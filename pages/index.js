import ImageCarousel from "../components/UI/ImageCarousel";
import HeroSection from "../components/UI/HeroSection";
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
      </div>
    </>
  );
}
