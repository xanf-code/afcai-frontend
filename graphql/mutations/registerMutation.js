import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation RegisterTeam(
    $teamName: String!
    $description: String!
    $teamLogo: String!
    $teamAbrieviation: String!
    $association: String!
    $email: String!
    $phone: String!
    $website: String!
    $socials: SocialsInput!
    $personIncharge: String!
    $personType: String!
    $postalCode: String!
    $postalAddress: String!
    $teamType: String!
    $state: String!
    $district: String!
    $teamReputation: String!
    $disabledCatering: String!
    $teamFounded: String!
    $teamAssociationLink: String!
    $crsAccess: String!
    $seniorMensTeamStatus: String!
    $seniorWomensTeamStatus: String!
    $youthTeams: [String]!
    $academyType: String!
    $licensedCoaches: [String]!
  ) {
    registerTeam(
      teamName: $teamName
      description: $description
      teamLogo: $teamLogo
      teamAbrieviation: $teamAbrieviation
      association: $association
      email: $email
      phone: $phone
      website: $website
      socials: $socials
      personIncharge: $personIncharge
      personType: $personType
      postalCode: $postalCode
      postalAddress: $postalAddress
      teamType: $teamType
      state: $state
      district: $district
      teamReputation: $teamReputation
      disabledCatering: $disabledCatering
      teamFounded: $teamFounded
      teamAssociationLink: $teamAssociationLink
      crsAccess: $crsAccess
      seniorMensTeamStatus: $seniorMensTeamStatus
      seniorWomensTeamStatus: $seniorWomensTeamStatus
      youthTeams: $youthTeams
      academyType: $academyType
      licensedCoaches: $licensedCoaches
    ) {
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
    }
  }
`;

module.exports = REGISTER_MUTATION;
