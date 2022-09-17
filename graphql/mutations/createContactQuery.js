import { gql } from "@apollo/client";

export const CREATE_CONTACT_QUERY = gql`
  mutation CreateContact(
    $name: String!
    $email: String!
    $phone: String!
    $subject: String!
    $message: String!
  ) {
    createContact(
      name: $name
      email: $email
      phone: $phone
      subject: $subject
      message: $message
    ) {
      name
      email
      phone
      subject
      message
      createdAt
    }
  }
`;
