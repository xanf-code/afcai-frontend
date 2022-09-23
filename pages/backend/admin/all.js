import { useQuery } from "@apollo/client";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AllTeams from "../../../components/Admin/AllTeams";
import { GET_TEAMS } from "../../../graphql/queries/GetTeams";

function All() {
  const [limit, setLimit] = useState(3);
  const router = useRouter();

  const checkSession = () => {
    const accessToken = localStorage.getItem("access");
    if (!accessToken) {
      router.push("/backend/admin/login");
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const [field, setField] = useState("teamName");
  const [value, setValue] = useState("");

  const setValueQuery = (e) => setValue(e?.target?.value);

  const { loading, error, data } = useQuery(GET_TEAMS, {
    variables: {
      field,
      value,
      limNum: null,
    },
  });

  return (
    <div>
      <div className="max-w-2xl md:mx-auto md:mt-6 m-5">
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
          data.getTeams.data.slice(0, limit).map((team, index) => (
            <div key={index} className="my-3 md:my-0">
              <AllTeams team={team} />
            </div>
          ))}
        {data && data.getTeams.data.length === 0 && (
          <div className="flex flex-col bg-gray-50 rounded-md p-4 my-4">
            <div className="text-center text-gray-500 font-IBMSans">
              No teams found
              <div className="text-center text-gray-500 font-IBMSans">
                Try searching with different keywords
                <div className="text-center text-gray-500 font-IBMSans">
                  Or try searching with different filters
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" justify-center flex">
        <button
          className="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={() => {
            setLimit((prev) => prev + 3);
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default All;
