import { gql } from "@apollo/client";

export const UPDATE_VERIFIED_TEAM = gql`
  mutation UpdateTeam(
    $teamId: String!
    $teamName: String
    $association: String
    $email: String
    $phone: String
    $website: String
    $socials: SocialsInput
    $academyType: String
    $seniorWomensTeamStatus: String
    $seniorMensTeamStatus: String
    $crsAccess: String
    $teamAssociationLink: String
    $teamFounded: String
    $disabledCatering: String
    $teamReputation: String
    $district: String
    $state: String
    $teamType: String
    $postalAddress: String
    $postalCode: String
    $personIncharge: String
    $personType: String
  ) {
    updateTeam(
      teamID: $teamId
      teamName: $teamName
      association: $association
      email: $email
      phone: $phone
      website: $website
      socials: $socials
      academyType: $academyType
      seniorWomensTeamStatus: $seniorWomensTeamStatus
      seniorMensTeamStatus: $seniorMensTeamStatus
      crsAccess: $crsAccess
      teamAssociationLink: $teamAssociationLink
      teamFounded: $teamFounded
      disabledCatering: $disabledCatering
      teamReputation: $teamReputation
      district: $district
      state: $state
      teamType: $teamType
      postalAddress: $postalAddress
      postalCode: $postalCode
      personIncharge: $personIncharge
      personType: $personType
    )
  }
`;
