import { gql } from "@apollo/client";

export const DELETE_CONTACT_QUERY = gql`
  mutation ResolveContact($queryId: String!) {
    resolveContact(queryID: $queryId) {
      name
      email
      phone
      queryID
      subject
      message
      createdAt
    }
  }
`;
