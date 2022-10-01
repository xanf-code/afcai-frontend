import Head from "next/head";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function ChangeLog() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/data/changelog.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div>
      <Head>
        <title>AFCAI - Changelog</title>
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
      <div className="max-w-2xl md:mx-auto md:mt-6 m-5 prose">
        <ReactMarkdown children={content} />
      </div>
    </div>
  );
}

export default ChangeLog;
