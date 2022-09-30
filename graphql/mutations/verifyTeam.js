import { gql } from "@apollo/client";

export const VERIFY_TEAM = gql`
  mutation VerifyTeam($teamId: String!) {
    verifyTeam(teamID: $teamId)
  }
`;
