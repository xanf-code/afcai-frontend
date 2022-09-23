import { useQuery } from "@apollo/client";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GeneralQueryCard from "../../../components/Admin/GeneralQueryCard";
import { GET_GENERAL_QUERIES } from "../../../graphql/queries/GetGeneralContacts";

function General() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [limit, setLimit] = useState(4);

  const setValueQuery = (e) => setValue(e?.target?.value);
  const { loading, error, data } = useQuery(GET_GENERAL_QUERIES, {
    variables: {
      value,
      limNum: null,
    },
  });

  const checkSession = () => {
    const accessToken = localStorage.getItem("access");
    if (!accessToken) {
      router.push("/backend/admin/login");
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <div className="max-w-2xl md:mx-auto md:mt-6 m-5">
      <div>
        <div className="mb-4">
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
          data.getContacts.slice(0, limit).map((contact) => (
            <div className="flex flex-col bg-gray-50 rounded-md p-4 my-4">
              <GeneralQueryCard contact={contact} />
            </div>
          ))}
        {data && data.getContacts.length === 0 && (
          <div className="flex flex-col bg-gray-50 rounded-md p-4 my-4">
            <div className="text-center text-gray-500 font-IBMSans">
              No queries found
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

export default General;
