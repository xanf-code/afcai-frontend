import { gql } from "@apollo/client";

export const GET_TEAMS = gql`
  query GetTeams(
    $field: String
    $value: String
    $limNum: Int
    $offset: Int
    $onlyVerified: Boolean
  ) {
    getTeams(
      field: $field
      value: $value
      lim_num: $limNum
      offset: $offset
      onlyVerified: $onlyVerified
    ) {
      data {
        teamName
        description
        teamAbrieviation
        createdAt
        teamLogo
        association
        email
        website
        personIncharge
        personType
        postalCode
        teamType
        state
        district
        teamReputation
        disabledCatering
        teamFounded
        teamAssociationLink
        crsAccess
        seniorMensTeamStatus
        seniorWomensTeamStatus
        youthTeams
        academyType
        licensedCoaches
        teamProfileSlug
        socials {
          facebook
          twitter
          instagram
          youtube
          linkedin
        }
      }
      docCount
    }
  }
`;
