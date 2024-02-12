import React from 'react';
import cctv from "../../public/images/cctv02.png";
import BsCartCheck from "react-icons/bs";
import HiPlus from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
const Product = () => {
    return (
      <>
         <section className="border border-[#ece3e3] mx-2 px-4 flex flex-row-reverse py-1 cursor-pointer h-12 items-center text-[#a4a4a7] mt-10 rounded-md">
            <div className="flex flex-row-reverse items-center ">
              <BiCategory size={30} className="text-basic" />
              <p className="text-[#414141] font-bold">نمایش بر اساس</p>
            </div>
            <div className="flex justify-around items-center w-[80%]">
              <div className="overflow-hidden hover:border-b-2 hover:border-basic">
                <p className="hover:text-basic transition-all duration-100 ease-in-out delay-75">جدیدترین</p>
              </div>
              <div>
                <p className="hover:text-basic transition-all duration-100 ease-in-out delay-75">پرفروش ترین</p>
              </div>
              <div>
                <p className="hover:text-basic transition-all duration-100 ease-in-out delay-75">ارزان ترین</p>
              </div>
              <div>
                <p className="hover:text-basic transition-all duration-100 ease-in-out delay-75">گران ترین</p>
              </div>
              <div>
                <p className="hover:text-basic transition-all duration-100 ease-in-out delay-75">محبوب ترین</p>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-2 mt-10 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3">
            <div className="bg-white xl:w-[260px] xl:h-[375px] lg:w-[208px] lg:h-[375px] md:w-[225px] md:h-[375px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px] ms:h-[272px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
              <div className="relative">
                <Image
                  src={cctv}
                  className="object-cover mt-4 w-fit max-h-[170px] mx-auto"
                />
                {/* <div className=" absolute left-3 top-0  ">
              <IoBookmark size={45} className="text-basic" />
              <span className=" absolute left-[10px] top-2 text-white text-sm">
                30%
              </span>
            </div> */}
              </div>
              <div>
                <p className="text-center font-bold ">دوربین وارم لایت 3358</p>
              </div>
              <div className="flex justify-evenly">
                {/* <p className="text-center line-through">
              236/000تومان
              <span className="text-[12px]">
              تومان
            </span>
            </p> */}

                <p className="text-basic font-bold">
                  160/000
                  <span className="text-[12px]">تومان</span>
                </p>
              </div>
              <div className="flex flex-row-reverse justify-evenly items-center rounded-[20px] text-[#aaa] px-2 border-t h-[46px]">
                <span className="hover:text-basic rounded-full ">
                  <GoHeart size={25} />
                </span>
                <span className="">
                  <IoEyeOutline size={25} />
                </span>
                <span>
                  <BsCart3 size={25} />
                </span>
              </div>
            </div>
            <div className="bg-white xl:w-[260px] xl:h-[375px] lg:w-[208px] lg:h-[375px] md:w-[225px] md:h-[375px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px] ms:h-[272px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
              <div className="relative">
                <Image
                  src={cctv}
                  className="object-cover mt-4 w-fit max-h-[170px] mx-auto"
                />
                {/* <div className=" absolute left-3 top-0  ">
              <IoBookmark size={45} className="text-basic" />
              <span className=" absolute left-[10px] top-2 text-white text-sm">
                30%
              </span>
            </div> */}
              </div>
              <div>
                <p className="text-center font-bold ">دوربین وارم لایت 3358</p>
              </div>
              <div className="flex justify-evenly">
                {/* <p className="text-center line-through">
              236/000تومان
              <span className="text-[12px]">
              تومان
            </span>
            </p> */}

                <p className="text-basic font-bold">
                  160/000
                  <span className="text-[12px]">تومان</span>
                </p>
              </div>
              <div className="flex flex-row-reverse justify-evenly items-center rounded-[20px] text-[#aaa] px-2 border-t h-[46px]">
                <span className="hover:text-basic rounded-full ">
                  <GoHeart size={25} />
                </span>
                <span className="">
                  <IoEyeOutline size={25} />
                </span>
                <span>
                  <BsCart3 size={25} />
                </span>
              </div>
            </div>
            <div className="bg-white xl:w-[260px] xl:h-[375px] lg:w-[208px] lg:h-[375px] md:w-[225px] md:h-[375px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px] ms:h-[272px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
              <div className="relative">
                <Image
                  src={cctv}
                  className="object-cover mt-4 w-fit max-h-[170px] mx-auto"
                />
                {/* <div className=" absolute left-3 top-0  ">
              <IoBookmark size={45} className="text-basic" />
              <span className=" absolute left-[10px] top-2 text-white text-sm">
                30%
              </span>
            </div> */}
              </div>
              <div>
                <p className="text-center font-bold ">دوربین وارم لایت 3358</p>
              </div>
              <div className="flex justify-evenly">
                {/* <p className="text-center line-through">
              236/000تومان
              <span className="text-[12px]">
              تومان
            </span>
            </p> */}

                <p className="text-basic font-bold">
                  160/000
                  <span className="text-[12px]">تومان</span>
                </p>
              </div>
              <div className="flex flex-row-reverse justify-evenly items-center rounded-[20px] text-[#aaa] px-2 border-t h-[46px]">
                <span className="hover:text-basic rounded-full ">
                  <GoHeart size={25} />
                </span>
                <span className="">
                  <IoEyeOutline size={25} />
                </span>
                <span>
                  <BsCart3 size={25} />
                </span>
              </div>
            </div>
            <div className="bg-white xl:w-[260px] xl:h-[375px] lg:w-[208px] lg:h-[375px] md:w-[225px] md:h-[375px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px] ms:h-[272px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
              <div className="relative">
                <Image
                  src={cctv}
                  className="object-cover mt-4 w-fit max-h-[170px] mx-auto"
                />
                {/* <div className=" absolute left-3 top-0  ">
              <IoBookmark size={45} className="text-basic" />
              <span className=" absolute left-[10px] top-2 text-white text-sm">
                30%
              </span>
            </div> */}
              </div>
              <div>
                <p className="text-center font-bold ">دوربین وارم لایت 3358</p>
              </div>
              <div className="flex justify-evenly">
                {/* <p className="text-center line-through">
              236/000تومان
              <span className="text-[12px]">
              تومان
            </span>
            </p> */}

                <p className="text-basic font-bold">
                  160/000
                  <span className="text-[12px]">تومان</span>
                </p>
              </div>
              <div className="flex flex-row-reverse justify-evenly items-center rounded-[20px] text-[#aaa] px-2 border-t h-[46px]">
                <span className="hover:text-basic rounded-full ">
                  <GoHeart size={25} />
                </span>
                <span className="">
                  <IoEyeOutline size={25} />
                </span>
                <span>
                  <BsCart3 size={25} />
                </span>
              </div>
            </div>
            <div className="bg-white xl:w-[260px] xl:h-[375px] lg:w-[208px] lg:h-[375px] md:w-[225px] md:h-[375px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px] ms:h-[272px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
              <div className="relative">
                <Image
                  src={cctv}
                  className="object-cover mt-4 w-fit max-h-[170px] mx-auto"
                />
                {/* <div className=" absolute left-3 top-0  ">
              <IoBookmark size={45} className="text-basic" />
              <span className=" absolute left-[10px] top-2 text-white text-sm">
                30%
              </span>
            </div> */}
              </div>
              <div>
                <p className="text-center font-bold ">دوربین وارم لایت 3358</p>
              </div>
              <div className="flex justify-evenly">
                {/* <p className="text-center line-through">
              236/000تومان
              <span className="text-[12px]">
              تومان
            </span>
            </p> */}

                <p className="text-basic font-bold">
                  160/000
                  <span className="text-[12px]">تومان</span>
                </p>
              </div>
              <div className="flex flex-row-reverse justify-evenly items-center rounded-[20px] text-[#aaa] px-2 border-t h-[46px]">
                <span className="hover:text-basic rounded-full ">
                  <GoHeart size={25} />
                </span>
                <span className="">
                  <IoEyeOutline size={25} />
                </span>
                <span>
                  <BsCart3 size={25} />
                </span>
              </div>
            </div>
          </section>
      </>
    );
};

export default Product;