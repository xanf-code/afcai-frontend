import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_TEAMS } from "../graphql/queries/GetTeams";
import debounce from "lodash.debounce";
import AffiliatedCard from "../components/UI/AffiliatedCard";

function Affiliated() {
  const [page, setPage] = useState(0);
  const [field, setField] = useState("teamName");
  const [value, setValue] = useState("");
  const PAGE_SIZE = 4;

  const setValueQuery = (e) => setValue(e?.target?.value);
  const { loading, error, data } = useQuery(GET_TEAMS, {
    variables: {
      field: field,
      value: value,
      limNum: PAGE_SIZE,
      offset: page * PAGE_SIZE,
      onlyVerified: true,
    },
  });

  //   Manage Loading and Error Later

  const totalPage = data?.getTeams.docCount / PAGE_SIZE;

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
        data.getTeams.data.map((team) => (
          <div key={team.teamProfileSlug}>
            <AffiliatedCard team={team} />
          </div>
        ))}
      <div className="flex justify-evenly">
        <button
          disabled={page < 1 ? true : false}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <span>Page {page + 1}</span>
        <button
          disabled={page >= totalPage - 1 ? true : false}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Affiliated;
