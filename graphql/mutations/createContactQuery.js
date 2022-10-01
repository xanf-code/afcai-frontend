import { gql } from "@apollo/client";

export const CREATE_CONTACT_QUERY = gql`
  mutation CreateContact(
    $teamId: String
    $name: String!
    $email: String!
    $phone: String!
    $subject: String!
    $message: String!
  ) {
    createContact(
      teamID: $teamId
      name: $name
      email: $email
      phone: $phone
      subject: $subject
      message: $message
    ) {
      teamID
      name
      email
      phone
      subject
      message
      createdAt
    }
  }
`;
