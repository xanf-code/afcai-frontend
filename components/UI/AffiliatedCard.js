import Image from "next/image";
import {
  FacebookLogo,
  Flag,
  GlobeHemisphereEast,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

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
            src={
              team?.teamLogo == ""
                ? "https://res.cloudinary.com/dec2lboba/image/upload/v1663854729/AFCAI-Private-Pics/badge-placeholder_dnq38h.png"
                : team?.teamLogo
            }
            alt={team?.teamName}
            width={80}
            height={80}
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dec2lboba/image/upload/v1663854729/AFCAI-Private-Pics/badge-placeholder_dnq38h.png"
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
                {textEllipsis(`${team?.state}`, 20)}
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
          <div className="flex justify-between">
            <div className="flex items-center space-x-1">
              <MapPin size={18} weight="duotone" />
              <div className="bg-white p-1 px-1 inline-block rounded-md">
                <h1 className="tracking-wide font-IBMSans text-xs">
                  {team?.postalCode}
                </h1>
              </div>
            </div>
            <div className="flex space-x-2">
              {team?.socials.facebook != "" && (
                <a href={team?.socials.facebook} target="__blank">
                  <FacebookLogo size={18} weight="duotone" />
                </a>
              )}
              {team?.socials.instagram != "" && (
                <a href={team?.socials.instagram} target="__blank">
                  <InstagramLogo size={18} weight="duotone" />
                </a>
              )}
              {team?.socials.youtube != "" && (
                <a href={team?.socials.youtube} target="__blank">
                  <YoutubeLogo size={18} weight="duotone" />
                </a>
              )}
              {team?.socials.twitter != "" && (
                <a href={team?.socials.twitter} target="__blank">
                  <TwitterLogo size={18} weight="duotone" />
                </a>
              )}
              {team?.socials.linkedin != "" && (
                <a href={team?.socials.linkedin} target="__blank">
                  <LinkedinLogo size={18} weight="duotone" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffiliatedCard;
