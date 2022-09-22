import { gql } from "@apollo/client";

export const DELETE_TEAM = gql`
  mutation DeleteTeam($teamId: String!) {
    deleteTeam(teamID: $teamId)
  }
`;
