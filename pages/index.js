import ImageCarousel from "../components/UI/ImageCarousel";
import ky from "ky";
import HeroSection from "../components/UI/HeroSection";
import HomeBlogSection from "../components/UI/HomeBlogSection";
import HomeMeta from "../components/Meta/HomeMeta";
import TestimonialSection from "../components/UI/TestimonialSection";

export default function Home() {
  return (
    <>
      <HomeMeta />
      <div className="max-w-6xl md:mx-auto space-y-4 mx-6 my-2 md:my-0 mt-6 md:mt-0">
        <div className=" md:grid md:grid-cols-2 md:gap-2 space-y-3 md:space-y-0">
          <ImageCarousel />
          <HeroSection />
        </div>
        <div className="bg-gray-50 p-5 rounded-md">
          <TestimonialSection />
        </div>
        {/* <HomeBlogSection data={data} /> */}
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const { data } = await ky
//     .get(
//       `${process.env.CMS_PUBLIC_URL}/api/posts?sort=publishedAt:desc&pagination[limit]=9&populate=*`,
//       {
//         headers: {
//           Accept: "application/json",
//           Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
//         },
//       }
//     )
//     .json();
//   return {
//     props: {
//       data,
//     },
//   };
// }
