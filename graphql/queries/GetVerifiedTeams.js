import { gql } from "@apollo/client";

export const GET_VERIFIED_TEAMS = gql`
  query GetVerifiedTeams($field: String, $value: String, $limNum: Int) {
    getVerifiedTeams(lim_num: $limNum, field: $field, value: $value) {
      docs {
        id
        teamName
        teamID
        description
        isVerifiedTime
        teamAbrieviation
        createdAt
        teamLogo
        association
        email
        phone
        website
        personIncharge
        personType
        postalCode
        postalAddress
        teamType
        state
        district
        socials {
          facebook
          instagram
          twitter
          youtube
          linkedin
        }
        teamReputation
        disabledCatering
        teamFounded
        teamAssociationLink
        crsAccess
        seniorMensTeamStatus
        seniorWomensTeamStatus
        academyType
        teamProfileSlug
        youthTeams
        licensedCoaches
      }
      totalDocs
      resCount
    }
  }
`;
