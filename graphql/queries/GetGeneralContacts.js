import { gql } from "@apollo/client";

export const GET_GENERAL_QUERIES = gql`
  query GetContacts($value: String!, $limNum: Int) {
    getContacts(value: $value, lim_num: $limNum) {
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
