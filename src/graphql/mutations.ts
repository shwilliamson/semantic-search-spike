// tslint:disable
// this is an auto generated file. This will be overwritten

export const createDocument = `mutation CreateDocument($input: CreateDocumentInput!) {
  createDocument(input: $input) {
    id
    name
    description
    file {
      bucket
      key
      region
    }
  }
}
`;
export const updateDocument = `mutation UpdateDocument($input: UpdateDocumentInput!) {
  updateDocument(input: $input) {
    id
    name
    description
    file {
      bucket
      key
      region
    }
  }
}
`;
export const deleteDocument = `mutation DeleteDocument($input: DeleteDocumentInput!) {
  deleteDocument(input: $input) {
    id
    name
    description
    file {
      bucket
      key
      region
    }
  }
}
`;
