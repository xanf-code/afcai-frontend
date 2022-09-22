import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_VERIFIED_TEAMS } from "../graphql/queries/GetVerifiedTeams";
import debounce from "lodash.debounce";
import AffiliatedCard from "../components/UI/AffiliatedCard";
import Link from "next/link";
import Head from "next/head";
import Skeleton from "../components/UI/Skeleton";

function Affiliated() {
  const [field, setField] = useState("teamName");
  const [value, setValue] = useState("");
  const [limit, setLimit] = useState(4);

  const setValueQuery = (e) => setValue(e?.target?.value);
  const { loading, error, data, fetchMore } = useQuery(GET_VERIFIED_TEAMS, {
    variables: {
      field,
      value,
      limNum: null,
    },
  });

  // const handleLoadData = () => {
  // setLimit((prev) => prev + 3);
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

  return (
    <div>
      <Head>
        <title>AFCAI - Affiliated Clubs</title>
        <meta
          name="description"
          content="AFCAI has been formed to help bridge the gap between the thousands of clubs in India and the All India Football Federation (AIFF). We wish to work in tandem with the AIFF and intend to help as many existing clubs and new clubs on their path to development."
        />
        <meta
          name="keywords"
          content="Indian Football, AFC, AFCAI, Football, AIFF, Football India, Football News, Football Association, Indian Football Association, Football In India, IFTWC"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dec2lboba/image/upload/v1663350360/AFCAI-Private-Pics/AFCAI-Association-of-Football-Clubs-and-Academies-in-India_s08c1v.jpg"
        />
      </Head>
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
        <div className="md:grid md:grid-cols-2 md:gap-4">
          {data &&
            data.getVerifiedTeams.docs.slice(0, limit).map((team, index) => (
              <div key={index} className="my-3 md:my-0">
                <Link href={"#"}>
                  <a>
                    <AffiliatedCard team={team} />
                  </a>
                </Link>
              </div>
            ))}
          {(error || loading) && <Skeleton />}
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
    </div>
  );
}

export default Affiliated;
