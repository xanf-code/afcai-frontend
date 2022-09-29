import ky from "ky";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function IndTournament({ tournament }) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const router = useRouter();
  const { name } = router.query;
  return (
    <div>
      <Head>
        <title>{name}</title>
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
        <h1 className="font-semibold font-IBMSans text-2xl md:text-4xl text-black py-3">
          {name}
        </h1>
        <div className="md:grid md:grid-cols-2 md:gap-2 space-y-4 md:space-y-0">
          {tournament &&
            tournament.attributes.Images.data.map((attribute, index) => {
              return (
                <div className="rounded-md" key={index}>
                  <Image
                    className="object-cover opacity-100 hover:opacity-60 transition duration-500 ease-in-out"
                    decoding="async"
                    placeholder="blur"
                    blurDataURL="https://res.cloudinary.com/dec2lboba/image/upload/v1663854729/AFCAI-Private-Pics/badge-placeholder_dnq38h.png"
                    onClick={() =>
                      openInNewTab(
                        `${process.env.CMS_PUBLIC_URL}${attribute.attributes.url}`
                      )
                    }
                    src={`${process.env.CMS_PUBLIC_URL}${attribute.attributes.url}`}
                    width={500}
                    height={500}
                    alt={attribute.attributes.name}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await ky
    .get(`${process.env.CMS_PUBLIC_URL}/api/tournaments`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
    })
    .json();

  const paths = data.map((ind) => ({
    params: { id: ind.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const { data } = await ky
    .get(
      `${process.env.CMS_PUBLIC_URL}/api/tournament-images?populate=*&filters[id][$eq]=${id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      }
    )
    .json();

  const tournament = data[0];
  return {
    props: { tournament },
  };
}
