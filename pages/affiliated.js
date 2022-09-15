import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_VERIFIED_TEAMS } from "../graphql/queries/GetVerifiedTeams";
import debounce from "lodash.debounce";
import AffiliatedCard from "../components/UI/AffiliatedCard";

function Affiliated() {
  const [page, setPage] = useState(1);
  const [field, setField] = useState("teamName");
  const [value, setValue] = useState("");
  const PAGE_SIZE = 10;

  const setValueQuery = (e) => setValue(e?.target?.value);
  const { loading, error, data } = useQuery(GET_VERIFIED_TEAMS, {
    variables: {
      field: field,
      value: value,
      limNum: PAGE_SIZE,
      page: page,
    },
  });

  //   Manage Loading and Error Later
  const hasNextPage = data?.getVerifiedTeams.hasNextPage;
  const hasPrevPage = data?.getVerifiedTeams.hasPrevPage;

  return (
    <div className="max-w-3xl md:mx-auto md:mt-6 m-5">
      <div>
        <select value={field} onChange={(e) => setField(e.target.value)}>
          <option value="teamName">Team Name</option>
          <option value="state">State or UT</option>
          <option value="postalCode">Pin code</option>
        </select>
        <input type="text" onChange={debounce(setValueQuery, 700)} />
      </div>
      {data &&
        data.getVerifiedTeams.docs.map((team) => (
          <div key={team.teamProfileSlug}>
            <AffiliatedCard team={team} />
          </div>
        ))}
      {/* <div className="flex justify-evenly">
        <button
          disabled={hasPrevPage ? false : true}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <span>Page {data?.getVerifiedTeams.page}</span>
        <button
          disabled={hasNextPage ? false : true}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div> */}
    </div>
  );
}

export default Affiliated;
