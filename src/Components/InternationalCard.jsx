import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const InternationalCard = ({ slides, country, flag }) => {
  return (
    <div className="w-full">
      <div className=" overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        className="h-64 overflow-hidden  "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-64">
              <img
                src={slide.image}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />

             <div className="absolute bottom-0 w-full h-[40px] bg-black/50 text-white text-[16px] font-medium flex items-center justify-center">
             {slide.title}
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      {/* Country Section */}
      <div className="flex items-center justify-center gap-3 mt-4 ">
        <img src={flag} alt="" className="w-[72px] h-[48px] object-contain" />
        <div>
          <div className=" w-[30px] border-[#183A5A] border-t-4 justify-center items-center m-auto "></div>
        <h2 className="text-lg font-medium text-[#183A5A] text-[24px]">{country}</h2>
        </div>
      </div>
    </div>
  );
};

export default InternationalCard;