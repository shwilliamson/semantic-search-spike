/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateDocumentInput = {
  id?: string | null,
  name: string,
  description: string,
  file?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket: string,
  key: string,
  region: string,
  mimeType?: string | null,
  visibility?: Visibility | null,
  localUri?: string | null,
};

export enum Visibility {
  public = "public",
  private = "private",
}


export type UpdateDocumentInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  file?: S3ObjectInput | null,
};

export type DeleteDocumentInput = {
  id?: string | null,
};

export type ModelDocumentFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelDocumentFilterInput | null > | null,
  or?: Array< ModelDocumentFilterInput | null > | null,
  not?: ModelDocumentFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateDocumentMutationVariables = {
  input: CreateDocumentInput,
};

export type CreateDocumentMutation = {
  createDocument:  {
    __typename: "Document",
    id: string,
    name: string,
    description: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
  } | null,
};

export type UpdateDocumentMutationVariables = {
  input: UpdateDocumentInput,
};

export type UpdateDocumentMutation = {
  updateDocument:  {
    __typename: "Document",
    id: string,
    name: string,
    description: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
  } | null,
};

export type DeleteDocumentMutationVariables = {
  input: DeleteDocumentInput,
};

export type DeleteDocumentMutation = {
  deleteDocument:  {
    __typename: "Document",
    id: string,
    name: string,
    description: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
  } | null,
};

export type GetDocumentQueryVariables = {
  id: string,
};

export type GetDocumentQuery = {
  getDocument:  {
    __typename: "Document",
    id: string,
    name: string,
    description: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
  } | null,
};

export type ListDocumentsQueryVariables = {
  filter?: ModelDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDocumentsQuery = {
  listDocuments:  {
    __typename: "ModelDocumentConnection",
    items:  Array< {
      __typename: "Document",
      id: string,
      name: string,
      description: string,
      file:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateDocumentSubscription = {
  onCreateDocument:  {
    __typename: "Document",
    id: string,
    name: string,
    description: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
  } | null,
};

export type OnUpdateDocumentSubscription = {
  onUpdateDocument:  {
    __typename: "Document",
    id: string,
    name: string,
    description: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
  } | null,
};

export type OnDeleteDocumentSubscription = {
  onDeleteDocument:  {
    __typename: "Document",
    id: string,
    name: string,
    description: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
  } | null,
};
