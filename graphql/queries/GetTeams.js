import { gql } from "@apollo/client";

export const GET_TEAMS = gql`
  query GetTeams($field: String, $value: String, $limNum: Int) {
    getTeams(field: $field, value: $value, lim_num: $limNum) {
      data {
        teamName
        teamID
        description
        teamAbrieviation
        createdAt
        teamLogo
        association
        email
        website
        phone
        personIncharge
        personType
        postalCode
        postalAddress
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
        isVerified
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
