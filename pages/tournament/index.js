import ky from "ky";
import Head from "next/head";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { ShieldStar } from "phosphor-react";

dayjs.extend(relativeTime);

export default function Tournament({ data }) {
  return (
    <div>
      <Head>
        <title>AFCAI - Tournaments</title>
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
        <div className="md:grid md:grid-cols-2 md:gap-3 font-IBMSans ">
          {data &&
            data.map((attribute, index) => {
              const slug_id = attribute.id.toString();
              return (
                <Link
                  href={`/tournament/${slug_id}/?name=${attribute.attributes.Tournament_Name}`}
                  key={index}
                >
                  <a>
                    <div className="bg-gray-100 rounded-md p-5 mb-3 mt-2 md:mb-0 hover:bg-gray-200 transition ease-in-out duration-300">
                      <h1 className="text-xl font-bold">
                        🏆 {attribute.attributes.Tournament_Name}
                      </h1>
                      <p className="text-gray-500 text-sm">
                        {dayjs(attribute.attributes.publishedAt).fromNow()}
                      </p>
                    </div>
                  </a>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await ky
    .get(`${process.env.CMS_PUBLIC_URL}/api/tournaments`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
    })
    .json();
  return {
    props: {
      data,
    },
  };
}
