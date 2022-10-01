import Link from "next/link";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function HeroSection() {
  return (
    <div className="md:grid md:grid-rows-2 md:gap-2 space-y-3 md:space-y-0">
      <ReactPlayer
        height={283}
        url="https://www.youtube.com/watch?v=-zA6JeKnMDk"
        controls={false}
        width="100%"
      />
      <div className="p-6 space-y-4">
        <h1 className="text-2xl mb-2 font-IBMSans font-bold">
          {" "}
          Welcome to AFCAI 👋 ⚽️
        </h1>
        <h5 className="text-2xl font-normal tracking-tight font-IBMSans">
          Know more about AFCAI tournaments 🏆
        </h5>
        <p className="font-normal text-gray-500 font-IBMSans text-justify">
          AFCAI is an organization that aims to promote football in India. We
          organize tournaments for all age groups and skill levels. We also
          provide a platform for players to showcase their talent and get
          noticed. Click on the button below to know more about our tournaments.
        </p>
        <div className="space-x-4">
          <Link href="/tournament">
            <a className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
              Tournaments
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
