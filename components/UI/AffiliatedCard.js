import Image from "next/image";
import { Flag, GlobeHemisphereEast, MapPin } from "phosphor-react";

function AffiliatedCard({ team }) {
  function textEllipsis(
    str,
    maxLength,
    { side = "end", ellipsis = "..." } = {}
  ) {
    if (str.length > maxLength) {
      switch (side) {
        case "start":
          return ellipsis + str.slice(-(maxLength - ellipsis.length));
        case "end":
        default:
          return str.slice(0, maxLength - ellipsis.length) + ellipsis;
      }
    }
    return str;
  }
  return (
    <div className="bg-gray-100 h-full rounded-md p-4">
      <div>
        <div className="flex flex-row">
          <Image
            className="object-cover opacity-100 hover:opacity-60 transition duration-500 ease-in-out"
            decoding="async"
            src={team?.teamLogo}
            alt={team?.teamName}
            width={80}
            height={80}
            placeholder="blur"
            blurDataURL={team?.teamLogo}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/shield.png";
            }}
          />
          <div className="flex flex-col ml-4">
            <h1 className="font-IBMSans font-semibold text-lg text-gray-700 text-ellipsis overflow-hidden whitespace-nowrap">
              {textEllipsis(`${team?.teamName}`, 22)}
            </h1>
            <h1 className="font-IBMSans font-medium text-sm text-gray-500">
              {textEllipsis(`${team?.teamType}`, 50)}
            </h1>
          </div>
        </div>
        <div className="mx-1 my-4">
          <div className="space-x-3 flex">
            <div className="flex">
              <GlobeHemisphereEast size={18} weight="duotone" />
              <h1 className="font-IBMSans text-sm font-semibold text-gray-700 ml-2">
                {team?.state}
              </h1>
            </div>
            <div className="flex">
              <Flag size={18} weight="duotone" />
              <h1 className="font-IBMSans text-sm font-semibold text-gray-700 ml-2">
                {team?.teamFounded}
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex space-x-1 items-center">
            <MapPin size={18} weight="duotone" />
            <div className="bg-white p-1 px-1 inline-block rounded-md">
              <h1 className="tracking-wide font-IBMSans text-xs">
                {team?.postalCode}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffiliatedCard;

// association: "Na";
// description: "Based in Lucknow ";
// district: "Lucknow ";
// email: "Sunset@dummymail.com";
// id: 1;
// postalCode: "226005";
// state: "UTTAR PRADESH";
// teamAbrieviation: "SSFC";
// teamFounded: "1998";
// teamLogo: "";
// teamName: "Sunset fc";
// teamProfileSlug: "sunset-fc-ssfc";
// teamReputation: "Non Registed Clubs (Not registed to local District Football Assocation)";
// teamType: "Non Profit (Trust / Association / Section 8)";
