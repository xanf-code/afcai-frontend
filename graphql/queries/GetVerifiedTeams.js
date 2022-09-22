import { gql } from "@apollo/client";

export const GET_VERIFIED_TEAMS = gql`
  query GetVerifiedTeams($field: String, $value: String, $limNum: Int) {
    getVerifiedTeams(lim_num: $limNum, field: $field, value: $value) {
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
      hasNextCursor
      totalDocs
      resCount
    }
  }
`;
