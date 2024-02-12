"use client";
import React from "react";
import banner from "../../public/images/banner.png";
import bgDisc from "../../public/images/bannerStore.jpg"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import camera2 from "../../public/images/dorbin.jpeg";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { IoBookmark } from "react-icons/io5";
const Discount = () => {
  return (
    <div className="w-full h-[400px] rounded-xl">
      <div className=" flex flex-row-reverse items-center justify-between my-8 px-2  mx-auto w-full">
      {/* <Image alt="banner" className="w-[600px] h-[400px]" src={banner} /> */}

        <div className=" relative">
        
        </div>
       <div className="">
      
       <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="w-[450px] h-[400px] rounded-lg bg-gradient-to-r overflow-hidden from-[#ff6969] to-[#ed1d24]"
        >
          <SwiperSlide className="my-auto">
            <div className="flex items-center justify-between flex-row-reverse m-4 bg-white">
              <Image src={camera2} width={200} />
              <div className="flex flex-col">
                <p>دوربین وارم لایت ۸۰۵۳</p>
                <p>265/000</p>
                <p>15%</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center ">
            <div className="flex items-center flex-row-reverse">
              <Image src={camera2} width={200} />
              <div>
                <p>دوربین وارم لایت ۸۰۵۳</p>
                <p>265/000</p>
              </div>
              <p>15%</p>
            </div>
          </SwiperSlide>
        </Swiper> 
       </div>
      </div>
    </div>
  );
};

export default Discount;
