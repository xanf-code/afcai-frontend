import { useQuery } from "@apollo/client";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import { FileCsv } from "phosphor-react";
import { useEffect, useState } from "react";
import VerifiedSkeleton from "../../../components/Admin/VerifiedSkeleton";
import VerifiedTeams from "../../../components/Admin/VerifiedTeams";
import { GET_VERIFIED_TEAMS } from "../../../graphql/queries/GetVerifiedTeams";
import { ExportToCsv } from "export-to-csv";
import { DOWNLOAD_CSV } from "../../../graphql/queries/csvDownloads";
import dayjs from "dayjs";

function Verified() {
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

  const [limit, setLimit] = useState(4);
  const [field, setField] = useState("teamName");
  const [value, setValue] = useState("");

  const setValueQuery = (e) => setValue(e?.target?.value);
  const { loading, error, data } = useQuery(GET_VERIFIED_TEAMS, {
    variables: {
      field,
      value,
      limit: null,
    },
  });

  const { data: csvData } = useQuery(DOWNLOAD_CSV, {
    variables: {
      field,
      value,
      limit: null,
    },
  });

  // const hasNextCursor = data?.getVerifiedTeams?.hasNextCursor;

  // const handleLoadData = () => {
  //   const nextCursor = data?.getVerifiedTeams?.nextCursor;

  //   fetchMore({
  //     variables: {
  //       cursor: nextCursor,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult) return prev;

  //       return {
  //         getVerifiedTeams: {
  //           ...fetchMoreResult.getVerifiedTeams,
  //           docs: [
  //             ...prev.getVerifiedTeams.docs,
  //             ...fetchMoreResult.getVerifiedTeams.docs,
  //           ],
  //         },
  //       };
  //     },
  //   });
  // };

  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    title: `Affiliated Teams ${dayjs().format("DD-MM-YYYY")}`,
    filename: `${dayjs().date()}-${dayjs().month() + 1}-${dayjs().year()}`,
  };

  const downloadCSV = () => {
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(csvData?.getVerifiedTeams?.docs);
  };

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
        <div className="flex justify-end">
          {data && data.getVerifiedTeams && (
            <div
              onClick={() => downloadCSV()}
              className="flex items-center space-x-1.5 bg-gray-100 rounded-md px-3 py-2 hover:bg-gray-200 transition ease-in-out duration-300 cursor-pointer"
            >
              <FileCsv size={20} weight="duotone" />
              <span className="text-sm font-IBMSans font-semibold">
                Generate CSV
              </span>
            </div>
          )}
        </div>
        {data &&
          data.getVerifiedTeams.docs.slice(0, limit).map((team, index) => (
            <div key={index} className="my-3 md:my-0">
              <a>
                <VerifiedTeams data={team} />
              </a>
            </div>
          ))}
        {(error || loading) && <VerifiedSkeleton />}
        {data && data.getVerifiedTeams.docs.length === 0 && (
          <div className="flex flex-col bg-gray-50 rounded-md p-4 my-4">
            <div className="text-center text-gray-500 font-IBMSans">
              No teams
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
      <div className="pt-3 justify-center flex">
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

export default Verified;
