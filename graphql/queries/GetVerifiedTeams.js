import { gql } from "@apollo/client";

export const GET_VERIFIED_TEAMS = gql`
  query GetVerifiedTeams(
    $value: String
    $field: String
    $page: Int
    $limNum: Int
  ) {
    getVerifiedTeams(
      value: $value
      field: $field
      page: $page
      lim_num: $limNum
    ) {
      docs {
        teamName
        teamID
        isVerifiedTime
        createdAt
        teamLogo
        association
        teamProfileSlug
      }
      totalDocs
      limit
      totalPages
      page
      pagingCounter
      hasPrevPage
      hasNextPage
    }
  }
`;
