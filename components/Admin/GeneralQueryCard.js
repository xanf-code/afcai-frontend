import { useMutation } from "@apollo/client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReadMoreReact from "read-more-react";
import { DELETE_CONTACT_QUERY } from "../../graphql/mutations/deleteGeneralQuery";

dayjs.extend(relativeTime);

function GeneralQueryCard({ contact }) {
  const [deleteQuery, { loading, error }] = useMutation(DELETE_CONTACT_QUERY, {
    refetchQueries: ["GetContacts"],
  });

  const handleOnClick = (query_id) => {
    deleteQuery({
      variables: {
        queryId: query_id,
      },
    }).then(() => {
      if (!loading && error === undefined) {
        toast.success("Query has been resolved ⚡️", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
        });
      }
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-row justify-between font-IBMSans">
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{contact.name}</div>
          <div className="text-sm text-gray-500">{contact.email}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{contact.phone}</div>
          <div className="text-sm text-gray-500">{contact.queryID}</div>
        </div>
      </div>
      {contact.teamID != "" && (
        <div className="flex flex-col mt-2">
          <a
            href={`/backend/admin/verified?teamID=${contact.teamID}`}
            target="__blank"
          >
            <div className="font-IBMSans text-red-700 hover:underline underline-offset-2">
              {contact.teamID}
            </div>
          </a>
        </div>
      )}
      <div className="flex flex-col mt-4 font-IBMSans">
        <div className="text-lg font-semibold">{contact.subject}</div>
        <div className="text-sm text-gray-500">
          <ReadMoreReact
            text={contact.message}
            min={50}
            ideal={100}
            max={200}
            readMoreText="...read more"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between mt-4 font-IBMSans">
        <div className="text-sm text-gray-500 items-center flex">
          {dayjs(contact.createdAt * 1000).fromNow()}
        </div>
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-800 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={() => {
            handleOnClick(contact.queryID);
          }}
          disabled={loading ? true : false}
        >
          Resolved
        </button>
      </div>
    </>
  );
}

export default GeneralQueryCard;
