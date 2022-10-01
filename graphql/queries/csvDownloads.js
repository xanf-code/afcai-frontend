import { gql } from "@apollo/client";

export const DOWNLOAD_CSV = gql`
  query GetVerifiedTeams($field: String, $value: String, $limNum: Int) {
    getVerifiedTeams(lim_num: $limNum, field: $field, value: $value) {
      docs {
        teamName
        teamID
        teamAbrieviation
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
        teamReputation
        disabledCatering
        teamFounded
        teamAssociationLink
        crsAccess
        seniorMensTeamStatus
        seniorWomensTeamStatus
        academyType
        teamProfileSlug
      }
    }
  }
`;
