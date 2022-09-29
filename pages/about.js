import Head from "next/head";

function About() {
  return (
    <div>
      <Head>
        <title>AFCAI - About Us</title>
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
        <div>
          <h1 className="font-semibold font-IBMSans text-2xl md:text-4xl text-black py-3">
            About AFCAI
          </h1>
        </div>
        <div className="space-y-4 font-IBMSans font-normal tracking-wide text-justify pt-4 text-gray-800">
          <p>
            AFCAI has been formed to help bridge the gap between the thousands
            of clubs in India and the All India Football Federation (AIFF). We
            wish to work in tandem with the AIFF and intend to help as many
            existing clubs and new clubs on their path to development.
          </p>
          <p>
            Our view is to help each club from inception to reach its long-term
            goals in the football circuit. We aim to groom and help each club
            develop in terms of running operations managing finances and also
            give a hand in managing and solving club and academy-related issues.
            We invite all clubs and academics to be a part of this body and help
            develop India into a footballing nation.
          </p>
          <p>
            We are an organisation purely focused on the welfare and progress of
            Football clubs & Academies all over the country. We aim to enhance
            the existence of Football Clubs & academies in India, in terms of
            Knowledge and Resources. We want to promote Club Culture and have
            its widespread impact in every corner of the nation.
          </p>
          <p>
            Our vision and mission are to help football clubs & academies to
            operate and become sustainable to make football available to all,
            irrespective of their age, gender, religion, caste and all criteria
            possible.
          </p>
          <p>
            AFCAI has been formed to help bridge the gap between the thousands
            of clubs in India and the All India Football Federation (AIFF). We
            wish to work in tandem with the AIFF and intend to help as many
            existing and new clubs & academies on their path to development and
            raising India as a Footballing Nation.
          </p>
        </div>
        <p className="mt-10 text-xs font-normal font-IBMSans text-gray-600">
          Last Updated <span className="text-gray-800">24/09/22</span>
        </p>
      </div>
    </div>
  );
}

export default About;
