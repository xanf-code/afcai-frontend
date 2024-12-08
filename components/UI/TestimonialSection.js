import { Quotes } from "phosphor-react";
import { useEffect, useState } from "react";

export default function TestimonialSection() {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState({});

  function HandleNext() {
    if (activeIndex >= data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }

  function HandlePrev() {
    if (activeIndex <= 0) {
      setActiveIndex(data.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.testimonials);
        setActiveSlide(data.testimonials[activeIndex]);
      });
  }, [activeIndex]);

  return (
    <>
      <div className="pt-3 flex">
        <Quotes size={25} weight="duotone" />
        <h1 className="font-semibold font-IBMSans text-3xl md:text-2xl text-black ml-1.5">
          Testimonials
        </h1>
      </div>
      <hr className="w-full border-1 border-gray-200 pb-2" />
      <div>
        <figure
          key={activeSlide.id}
          className="mx-auto max-w-screen-md text-center"
        >
          <svg
            aria-hidden="true"
            className="mx-auto mb-3 w-12 h-10 md:h-12 text-gray-400 mt-4"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-md md:text-xl font-medium italic font-IBMSans text-gray-900">
              {activeSlide.testimonial}
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center mt-4 space-x-3">
            <div className="flex flex-col items-center">
              <cite className="font-medium text-gray-900 ">
                {activeSlide.name}
              </cite>
              <cite className="text-sm font-light text-gray-500 ">
                {activeSlide.personType} at {activeSlide.club}
              </cite>
            </div>
          </figcaption>
        </figure>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={HandlePrev}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
          >
            Previous
          </button>
          <button
            onClick={HandleNext}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
