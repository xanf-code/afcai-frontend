import { gql } from "@apollo/client";

export const GET_VERIFIED_TEAMS = gql`
  query GetVerifiedTeams($field: String, $value: String, $cursor: Int) {
    getVerifiedTeams(
      lim_num: 4
      field: $field
      value: $value
      cursor: $cursor
    ) {
      docs {
        teamName
        district
        teamType
        state
        association
        postalCode
        id
        description
        teamAbrieviation
        teamLogo
        email
        teamReputation
        teamFounded
        teamProfileSlug
      }
      limit
      totalPages
      nextCursor
      hasNextCursor
      totalDocs
      resCount
    }
  }
`;
