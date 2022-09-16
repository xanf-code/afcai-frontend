import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_VERIFIED_TEAMS } from "../graphql/queries/GetVerifiedTeams";
import debounce from "lodash.debounce";
import AffiliatedCard from "../components/UI/AffiliatedCard";

function Affiliated() {
  const [field, setField] = useState("teamName");
  const [value, setValue] = useState("");

  const setValueQuery = (e) => setValue(e?.target?.value);
  const { loading, error, data, fetchMore } = useQuery(GET_VERIFIED_TEAMS, {
    variables: {
      field,
      value,
      cursor: null,
    },
  });

  const hasNextCursor = data?.getVerifiedTeams?.hasNextCursor;
  const resCount = data?.getVerifiedTeams?.resCount;

  const handleLoadData = () => {
    const nextCursor = data?.getVerifiedTeams?.nextCursor;

    fetchMore({
      variables: {
        cursor: nextCursor,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        return {
          getVerifiedTeams: {
            ...fetchMoreResult.getVerifiedTeams,
            docs: [
              ...prev.getVerifiedTeams.docs,
              ...fetchMoreResult.getVerifiedTeams.docs,
            ],
          },
        };
      },
    });
  };
  //   Manage Loading and Error Later

  return (
    <div className="max-w-3xl md:mx-auto md:mt-6 m-5">
      <div className="flex mb-4 space-x-3">
        <select
          className="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 font-IBMSans"
          value={field}
          onChange={(e) => setField(e.target.value)}
        >
          <option value="teamName">Name</option>
          <option value="state">State</option>
          <option value="district">District</option>
          <option value="association">Association</option>
          <option value="postalCode">Pin code</option>
          <option value="teamType">Team type</option>
        </select>
        <input
          type="search"
          onChange={debounce(setValueQuery, 700)}
          className="form-control flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
      </div>
      {data &&
        data.getVerifiedTeams.docs.map((team, index) => (
          <div key={index}>
            <AffiliatedCard team={team} />
          </div>
        ))}
      <div>
        <button
          disabled={hasNextCursor ? false : true}
          onClick={handleLoadData}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default Affiliated;
