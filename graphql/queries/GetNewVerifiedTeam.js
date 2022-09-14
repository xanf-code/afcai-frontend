import { gql } from "@apollo/client";

export const GET_NEW_VERIFIED_TEAM = gql`
  query GetTeams($isVerifiedTime: Boolean, $limNum: Int) {
    getTeams(isVerifiedTime: $isVerifiedTime, lim_num: $limNum) {
      teamName
      teamID
      description
      isVerified
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
      isVerifiedTime
    }
  }
`;
