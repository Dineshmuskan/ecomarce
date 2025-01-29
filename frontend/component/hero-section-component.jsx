import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import sliderimageone from "../public/slide-1.jpg"
import sliderimagetwo from "../public/slide-2.jpg"


export default function HeroSectionComponent() {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-11/12 md:w-8/12 mx-auto rounded-md "
      >
        <SwiperSlide>
            
            <img className=" md:h-[65vh] object-cover"
            src={sliderimageone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className=" md:h-[65vh] object-cover"
            src={sliderimagetwo} alt="" />

        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
