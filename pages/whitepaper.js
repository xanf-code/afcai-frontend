import Head from "next/head";
import { File } from "phosphor-react";

function WhitePaper() {
  return (
    <div>
      <Head>
        <title>AFCAI - WhitePaper</title>
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
      <div className="max-w-2xl md:mx-auto md:mt-6 m-5">
        <a href="/whitepaper/paper_1.pdf" download>
          <div className="bg-blue-50 p-5 rounded-md hover:bg-blue-100 transform ease-in-out duration-500">
            <div className="flex space-x-2">
              <File size={25} weight="duotone" />
              <h1 className="font-IBMSans flex justify-center">
                Click to Download
              </h1>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default WhitePaper;
