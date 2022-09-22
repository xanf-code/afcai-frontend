import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function AllTeamsCard({ data }) {
  return (
    <div className="bg-blue-100 p-4 rounded-md hover:bg-blue-200 space-y-2">
      <div className="flex justify-between">
        <h1 className="font-IBMSans text-black">{data.teamName}</h1>
        <div className="flex items-center">
          <h1 className="font-IBMSans text-sm">
            {dayjs(data.createdAt * 1000).fromNow()}
          </h1>
        </div>
      </div>
      <div>
        <span className="bg-indigo-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
          {data.postalCode}
        </span>
        <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
          {data.state}
        </span>
        <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
          {data.district}
        </span>
        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
          {data.association}
        </span>
      </div>
    </div>
  );
}

export default AllTeamsCard;
