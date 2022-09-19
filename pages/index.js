import HomeBlog from "../components/UI/HomeBlog";
import Link from "next/link";
import ImageCarousel from "../components/UI/ImageCarousel";
import ky from "ky";
import dynamic from "next/dynamic";
import Head from "next/head";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>AFCAI - Home</title>
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
      <div className="max-w-6xl md:mx-auto space-y-4 mx-6 my-2 md:my-0 mt-6 md:mt-0">
        <div className=" md:grid md:grid-cols-2 md:gap-2 space-y-3 md:space-y-0">
          <ImageCarousel />
          <div className="md:grid md:grid-rows-2 md:gap-2 space-y-3 md:space-y-0">
            <ReactPlayer
              height={283}
              url="https://www.youtube.com/watch?v=-zA6JeKnMDk"
              controls={false}
              width="100%"
            />
            <div className="p-6 rounded-md border border-gray-100 space-y-4">
              <h1 className="text-2xl mb-2 font-IBMSans font-bold">
                {" "}
                Welcome to AFCAI 👋 ⚽️
              </h1>
              <h5 className="text-2xl font-normal tracking-tight font-IBMSans">
                Join the Movement Now ⚡️
              </h5>
              <p className="font-normal text-gray-500 font-IBMSans ">
                AFCAI has been formed to help bridge the gap between the
                thousands of clubs in India and the All India Football
                Federation (AIFF). We wish to work in tandem with the AIFF and
                intend to help as many existing clubs and new clubs on their
                path to development.
              </p>
              <div className="space-x-4">
                <Link href="/registration">
                  <a className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
                    Register Now
                  </a>
                </Link>
                <Link href="/about">
                  <a className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
                    Know More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h1 className="font-semibold font-IBMSans text-3xl md:text-2xl text-black pt-3 ">
          Latest Announcements
        </h1>
        <hr className="w-full border-1 border-gray-200 pb-2" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 ">
          {data &&
            data.map((blog) => (
              <div key={blog.id}>
                <Link href={`/post/${blog.attributes.Slug}`}>
                  <a>
                    <HomeBlog key={blog.id} blog={blog} />
                  </a>
                </Link>
                <hr className="my-4 h-px bg-gray-200 border-0 md:hidden" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await ky
    .get(
      `${process.env.CMS_PUBLIC_URL}/api/posts?sort=publishedAt:desc&pagination[limit]=9&populate=*`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      }
    )
    .json();
  return {
    props: {
      data,
    },
  };
}
