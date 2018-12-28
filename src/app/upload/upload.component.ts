import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as mutations from '../../graphql/mutations';
import { Auth } from "aws-amplify";
import gql from 'graphql-tag';
import AWSAppSyncClient from 'aws-appsync';
import aws_config from '../../aws-exports';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  file: any;
  uploadForm = new FormGroup({
    description: new FormControl('')
  });

  constructor() { }

  ngOnInit() { }

  onFileChange(event){
    this.file = event.target.files[0];
  }

  async onSubmit() {
    let creds = await Auth.currentCredentials();
    let s3Object = {
      bucket: "semanticsearchdocs",
      key: `private/${creds.identityId}/${uuid()}`,
      region: "us-east-1",
      mimeType: this.file.type,
      localUri: this.file
    };

    let createDocInput = {
      name: this.file.name,
      description: this.uploadForm.value.description,
      file: s3Object
    };

    //make call with appsync sdk client
    let client = await this.getAppSyncClient();
    let result = await client.mutate({
      mutation: gql(mutations.createDocument),
      variables: {
        input: createDocInput
      }
    });

    //NOTE: The call below using the amplify graphQL client and the generated typescript models
    //      doesn't work with complex objects (i.e. file won't be uploaded to S3).
    //await API.graphql(graphqlOperation(mutations.createDocument, {input: createDocInput}));

    alert("Document uploaded.");
  }

  async getAppSyncClient(): Promise<AWSAppSyncClient<NormalizedCacheObject>> {
    let creds = await Auth.currentCredentials();
    return new AWSAppSyncClient({
      url: aws_config.aws_appsync_graphqlEndpoint,
      region: aws_config.aws_appsync_region,
      auth: {
        type: aws_config.aws_appsync_authenticationType,
        jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken(),
      },
      complexObjectsCredentials: () => creds
    });
  }
}