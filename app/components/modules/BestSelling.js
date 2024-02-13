"use client";
import react from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import camera1 from "../../../public/images/cctv02.png";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { ImSpinner6 } from "react-icons/im";
import { IoBookmark, IoEyeOutline } from "react-icons/io5";
import cctv3 from "../../../public/images/cctv01.png";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination,Navigation ,Autoplay} from "swiper/modules";

export default function App() {

  // const Autoplay ={
  //   delay:400
  // }

  return (
    <>
          <h1 className="text-right text-black border-b-2 border-basic mr-8">پر فروش ترین محصولات</h1>
      <div className="flex justify-center flex-row-reverse">

        <div className="w-1/4">
          <Image src={cctv3} alt="dorbin" className="bg-basic bg-opacity-25 h-400px opacity-40 " />
        </div>
        <Swiper
            slidesPerView={3}
            grid={{
              rows: 3,
              fill: "row",
            }}
            spaceBetween={2}
            pagination={{
              clickable: true,
            }}
           // modules={[Navigation, Autoplay]}
             modules={[Grid, Pagination]}
            className="bg-[#f7f7f7]"
          >
         {/* {data.map((product) => ( */}
              <SwiperSlide className="">
                <div className="xl:w-[260px]  xl:h-[365px] lg:w-[208px] lg:h-[365px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[280px] mm:w-[167px] mm:h-[252px] ms:w-[140px] ms:h-[252px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
                  <div className="relative">
                    <Image
                      src={camera1}
                      alt="{product.name}"
                      className="object-cover w-fit max-h-[160px] mx-auto"
                    />
                    <div className=" absolute left-3 top-0  ">
                      <IoBookmark size={45} className="text-basic" />
                      <span className=" absolute left-[10px] top-2 text-white text-sm">
                        30%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-center font-bold"> دوربین مداربسته آنالـوگ هایک ویژن مدل DS-2CE76D0T-ITPFS</p>
                  </div>
                  <div className="flex justify-evenly">
                    <p className="text-center line-through">236/000تومان</p>
                    <p className="text-basic font-bold">
                      4380000
                      <span className="text-[12px]">تومان</span>
                    </p>
                  </div>
                  <div className="flex flex-row-reverse justify-evenly items-center rounded-[20px] text-[#aaa] px-2 border-t h-[46px]">
                    <span className="hover:text-basic rounded-full">
                      <GoHeart size={25} className="" />
                    </span>
                    <span className="">
                      <IoEyeOutline size={25} />{" "}
                    </span>
                    <span>
                      {" "}
                      <BsCart3 size={25} className="" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide className="">
                <div className="xl:w-[260px] bg-white xl:h-[365px] lg:w-[208px] lg:h-[365px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[280px] mm:w-[167px] mm:h-[252px] ms:w-[140px] ms:h-[252px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
                  <div className="relative">
                    <Image
                      src={camera1}
                      alt="{product.name}"
                      className="object-cover w-fit max-h-[160px] mx-auto"
                    />
                    <div className=" absolute left-3 top-0  ">
                      <IoBookmark size={45} className="text-basic" />
                      <span className=" absolute left-[10px] top-2 text-white text-sm">
                        30%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-center font-bold">دوربین مداربسته آنالـوگ هایک ویژن مدل DS-2CE76D0T-ITPFS</p>
                  </div>
                  <div className="flex justify-evenly">
                    <p className="text-center line-through">236/000تومان</p>
                    <p className="text-basic font-bold">
                      4380000
                      <span className="text-[12px]">تومان</span>
                    </p>
                  </div>
                  <div className="flex flex-row-reverse justify-evenly items-center rounded-[20px] text-[#aaa] px-2 border-t h-[46px]">
                    <span className="hover:text-basic rounded-full">
                      <GoHeart size={25} className="" />
                    </span>
                    <span className="">
                      <IoEyeOutline size={25} />{" "}
                    </span>
                    <span>
                      {" "}
                      <BsCart3 size={25} className="" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="">
                <div className="xl:w-[260px] bg-white xl:h-[365px] lg:w-[208px] lg:h-[365px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[280px] mm:w-[167px] mm:h-[252px] ms:w-[140px] ms:h-[252px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
                  <div className="relative">
                    <Image
                      src={camera1}
                      alt="{product.name}"
                      className="object-cover w-fit max-h-[160px] mx-auto"
                    />
                    <div className=" absolute left-3 top-0  ">
                      <IoBookmark size={45} className="text-basic" />
                      <span className=" absolute left-[10px] top-2 text-white text-sm">
                        30%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-center font-bold">دوربین مداربسته آنالـوگ هایک ویژن مدل DS-2CE76D0T-ITPFS</p>
                  </div>
                  <div className="flex justify-evenly">
                    <p className="text-center line-through">236/000تومان</p>
                    <p className="text-basic font-bold">
                      4380000
                      <span className="text-[12px]">تومان</span>
                    </p>
                  </div>
                  <div className="flex flex-row-reverse justify-evenly items-center rounded-[20px] text-[#aaa] px-2 border-t h-[46px]">
                    <span className="hover:text-basic rounded-full">
                      <GoHeart size={25} className="" />
                    </span>
                    <span className="">
                      <IoEyeOutline size={25} />{" "}
                    </span>
                    <span>
                      {" "}
                      <BsCart3 size={25} className="" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide className="">
                <div className="xl:w-[260px] bg-white xl:h-[365px] lg:w-[208px] lg:h-[365px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[280px] mm:w-[167px] mm:h-[252px] ms:w-[140px] ms:h-[252px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
                  <div className="relative">
                    <Image
                      src={camera1}
                      alt="{product.name}"
                      className="object-cover w-fit max-h-[160px] mx-auto"
                    />
                    <div className=" absolute left-3 top-0  ">
                      <IoBookmark size={45} className="text-basic" />
                      <span className=" absolute left-[10px] top-2 text-white text-sm">
                        30%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-center font-bold"> دوربین مداربسته آنالـوگ هایک ویژن مدل DS-2CE76D0T-ITPFS</p>
                  </div>
                  <div className="flex justify-evenly">
                    <p className="text-center line-through">236/000تومان</p>
                    <p className="text-basic font-bold">
                      4380000
                      <span className="text-[12px]">تومان</span>
                    </p>
                  </div>
                  <div className="flex flex-row-reverse justify-evenly items-center rounded-[20px] text-[#aaa] px-2 border-t h-[46px]">
                    <span className="hover:text-basic rounded-full">
                      <GoHeart size={25} className="" />
                    </span>
                    <span className="">
                      <IoEyeOutline size={25} />{" "}
                    </span>
                    <span>
                      {" "}
                      <BsCart3 size={25} className="" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="">
                <div className="xl:w-[260px] bg-white xl:h-[365px] lg:w-[208px] lg:h-[365px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[280px] mm:w-[167px] mm:h-[252px] ms:w-[140px] ms:h-[252px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
                  <div className="relative">
                    <Image
                      src={camera1}
                      alt="{product.name}"
                      className="object-cover w-fit max-h-[160px] mx-auto"
                    />
                    <div className=" absolute left-3 top-0  ">
                      <IoBookmark size={45} className="text-basic" />
                      <span className=" absolute left-[10px] top-2 text-white text-sm">
                        30%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-center font-bold"> دوربین مداربسته آنالـوگ هایک ویژن مدل DS-2CE76D0T-ITPFS</p>
                  </div>
                  <div className="flex justify-evenly">
                    <p className="text-center line-through">236/000تومان</p>
                    <p className="text-basic font-bold">
                      4380000
                      <span className="text-[12px]">تومان</span>
                    </p>
                  </div>
                  <div className="flex flex-row-reverse justify-evenly items-center rounded-[20px] text-[#aaa] px-2 border-t h-[46px]">
                    <span className="hover:text-basic rounded-full">
                      <GoHeart size={25} className="" />
                    </span>
                    <span className="">
                      <IoEyeOutline size={25} />{" "}
                    </span>
                    <span>
                      {" "}
                      <BsCart3 size={25} className="" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide className="">
                <div className="xl:w-[260px] bg-white xl:h-[365px] lg:w-[208px] lg:h-[365px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[280px] mm:w-[167px] mm:h-[252px] ms:w-[140px] ms:h-[252px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
                  <div className="relative">
                    <Image
                      src={camera1}
                      alt="{product.name}"
                      className="object-cover w-fit max-h-[160px] mx-auto"
                    />
                    <div className=" absolute left-3 top-0  ">
                      <IoBookmark size={45} className="text-basic" />
                      <span className=" absolute left-[10px] top-2 text-white text-sm">
                        30%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-center font-bold">دوربین دید شب</p>
                  </div>
                  <div className="flex justify-evenly">
                    <p className="text-center line-through">236/000تومان</p>
                    <p className="text-basic font-bold">
                      4380000
                      <span className="text-[12px]">تومان</span>
                    </p>
                  </div>
                  <div className="flex flex-row-reverse justify-evenly items-center rounded-[20px] text-[#aaa] px-2 border-t h-[46px]">
                    <span className="hover:text-basic rounded-full">
                      <GoHeart size={25} className="" />
                    </span>
                    <span className="">
                      <IoEyeOutline size={25} />{" "}
                    </span>
                    <span>
                      {" "}
                      <BsCart3 size={25} className="" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="">
                <div className="xl:w-[260px] bg-white xl:h-[365px] lg:w-[208px] lg:h-[365px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[280px] mm:w-[167px] mm:h-[252px] ms:w-[140px] ms:h-[252px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
                  <div className="relative">
                    <Image
                      src={camera1}
                      alt="{product.name}"
                      className="object-cover w-fit max-h-[160px] mx-auto"
                    />
                    <div className=" absolute left-3 top-0  ">
                      <IoBookmark size={45} className="text-basic" />
                      <span className=" absolute left-[10px] top-2 text-white text-sm">
                        30%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-center font-bold">دوربین دید شب</p>
                  </div>
                  <div className="flex justify-evenly">
                    <p className="text-center line-through">236/000تومان</p>
                    <p className="text-basic font-bold">
                      4380000
                      <span className="text-[12px]">تومان</span>
                    </p>
                  </div>
                  <div className="flex flex-row-reverse justify-evenly items-center rounded-[20px] text-[#aaa] px-2 border-t h-[46px]">
                    <span className="hover:text-basic rounded-full">
                      <GoHeart size={25} className="" />
                    </span>
                    <span className="">
                      <IoEyeOutline size={25} />{" "}
                    </span>
                    <span>
                      {" "}
                      <BsCart3 size={25} className="" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
           {/* ))}  */}
        </Swiper>
      </div>
    </>
  );
}