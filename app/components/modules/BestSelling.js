"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import camera1 from "../../../public/images/cctv02.png";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { ImSpinner6 } from "react-icons/im";
import { IoBookmark, IoEyeOutline } from "react-icons/io5";
import cctv3 from "../../../public/images/cctv01.png";
import banner from "../../../public/images/package dozdgir.jpg";
import Image from "next/image";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function App({ data }) {
  // const Autoplay ={
  //   delay:400
  // }

  return (
    <>
      <div className="grid grid-rows-2 w-full">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="w-[60%] h-auto grid"
        >
          {data ? (
            data.map((product) => (
              <SwiperSlide key={product.id} className="max-w-[300px] h-auto">
                <div className="xl:w-[260px] bg-white xl:h-[365px] lg:w-[208px] lg:h-[365px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[280px] mm:w-[167px] mm:h-[252px] ms:w-[140px] ms:h-[252px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
                  <div className="relative">
                    <img
                      src={product.files}
                      alt={product.name}
                      className="object-cover w-fit max-h-[160px] mx-auto"
                    />
                    {product.discount > 0 ? (
                      <div className="absolute left-3 top-0 ">
                        <span className="bg-basic rounded-xl absolute left-[10px] top-2 text-white text-sm">
                          {product.discount}
                        </span>
                      </div>
                    ) : (
                      []
                    )}
                  </div>
                  <div>
                    <p className="text-center font-bold">{product.name}</p>
                  </div>
                  <div className="flex justify-evenly">
                    <p className="text-center line-through">236/000تومان</p>
                    <p className="text-basic font-bold">
                      4380000
                      <span className="text-[12px]">تومان</span>
                    </p>
                  </div>
                  <div className="flex flex-row-reverse justify-evenly items-center  text-[#aaa] px-2 border-t h-[46px]">
                    <span className="hover:text-basic rounded-full">
                      <GoHeart size={25} className="" />
                    </span>
                    <Link href={`products/${product.id}`} passHref>
                      <span className="">
                        <IoEyeOutline size={25} />{" "}
                      </span>
                    </Link>

                    <span>
                      {" "}
                      <BsCart3 size={25} className="" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <ImSpinner6 size={30} className="animate-spin mx-auto" />
          )}
        </Swiper>
      </div>
    </>
  );
}
