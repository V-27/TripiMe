import { useState, useEffect } from "react";
import { TestimonialsData } from "../Utils/TestimonialsData";
import TestimonialsCard from "./TestimonialsCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) =>
        index === TestimonialsData.length - 1 ? 0 : index + 1
      )
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  //  Manual Controls
  const prevSlide = () => {
    setIndex((index) =>
      index === 0
        ? TestimonialsData.length - 1
        : index - 1
    );
  };

  const nextSlide = () => {
    setIndex((index) =>
      index === TestimonialsData.length - 1
        ? 0
        : index + 1
    );
  };

  return (
    <section className="w-full py-20 bg-white relative ">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-15 md:mb-16 text-left">
        <p className="text-[#796344] text-sm md:text-base mb-3 ">HAPPY MEMORIES</p>
        <h1 className="text-[#212529] text-2xl md:text-3xl lg:text-4xl  mb-4">
          OUR TESTIMONIALS
        </h1>
        <div className="border-t-4 border-[#007ee6] w-full mb-2"></div>
        <p className="text-gray-400 text-sm md:text-base mb-3">
          what our customer says about us
        </p>
      </div>

      {/* Slider */}
      <div className="relative md:max-w-4xl mx-auto px-6 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {TestimonialsData.map((item, i) => (
            <div key={i} className="w-full flex-shrink-0 flex justify-center">
              <TestimonialsCard testimonial={item} />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3"
        >
          <IoIosArrowBack className="w-8 h-8" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3"
        >
          <IoIosArrowForward className="w-8 h-8" />
        </button>

      </div>
    </section>
  );
}

export default Testimonials;
