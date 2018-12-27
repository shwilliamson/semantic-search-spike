// tslint:disable
// this is an auto generated file. This will be overwritten

export const getDocument = `query GetDocument($id: ID!) {
  getDocument(id: $id) {
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
export const listDocuments = `query ListDocuments(
  $filter: ModelDocumentFilterInput
  $limit: Int
  $nextToken: String
) {
  listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      file {
        bucket
        key
        region
      }
    }
    nextToken
  }
}
`;
