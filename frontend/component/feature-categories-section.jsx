import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import myimage from "../public/biscuit.jpg";

export default function FeatureCategoriesSection() {
  const categories = [
    {
      image: myimage,
      name: "Biscuits",
    },

    {
       image: myimage,
      name: "Biscuits 2",
    },
    {
       image: myimage,
      name: "Biscuits 3",
    },
    {
       image: myimage,
      name: "Biscuits 4",
    },
    {
       image: myimage,
      name: "Biscuits 5",
    },
    {
       image: myimage,
      name: "Biscuits 6",
    },
    {
       image: myimage,
      name: "Biscuits 7",
    },
    {
       image: myimage,
      name: "Biscuits 8",
    },
  ];

  return (
    <div className=" w-8/12 mx-auto space-y-8 mt-24">
      <p className=" text-3xl font-semibold ">Featured Categories</p>
      <div>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className=" space-y-2 overflow-hidden border border-gray rounded-3xl flex flex-col items-center 
                    justify-center hover:border-green-500 hover:shadow-amber-700  "
              >
                <img src={item.image} alt="" height={150} width={150} />

                <p className="  font-semibold text-center">
                 {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
