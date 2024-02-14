"use client";
import react from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import camera1 from "../../../public/images/cctv02.png";
import alarm from "../../../public/images/alarm1.jpeg";
import camera2 from "../../../public/images/cctv01.png";
import camera3 from "../../../public/images/cctv-det3.webp";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { IoBookmark, IoEyeOutline } from "react-icons/io5";
import logo from "../../../public/images/logo.png";
import cctvlogo from "../../../public/images/cctvlogo.jpg";
import { IsInCartProduct } from "../../components/helper/functions";
import { numberWithComma } from "../../components/helper/functions";
import { HiPlus } from "react-icons/hi";
import { BsCartCheck } from "react-icons/bs";
import { ImSpinner6 } from "react-icons/im";
const Cart = ({ data }) => {
  //const { state, dispatch } = useContext(CartContext);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="bg-[#f7f7f7] mt-8 h-full">
      <div className="p-2 w-[85%] mx-auto rounded-xl pt-4 bg-[#f7f7f7]">
        <div className="flex items-center flex-row-reverse justify-between  mt-4">
          <h1 className="border-b-2 text-xl border-basic font-bold">
            {" "}
            جدیدترین محصولات
          </h1>
          <button className="bg-white rounded-full shadow-lg text-basic text-sm px-1.5 py-2">
            مشاهده همه
          </button>
        </div>

        <Carousel
          removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
          autoPlay={true}
          className="w-full mx-auto pt-4 "
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
        >
          {data ? (
            data.map((product) => (
              <div
                key={product.id}
                className="bg-white my-4 h-full mx-auto xl:w-[250px] xl:h-[355px] lg:w-[208px] lg:h-[355px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px] ms:h-[272px] shadow-lg flex justify-between flex-col overflow-hidden rounded-[10px]"
              >
                <div className="relative">
                  <img
                    src={product.files}
                    className="object-cover mt-4 p-0 mx-auto w-fit  h-[180px] max-h-[200px]"
                    alt={product.name}
                  />
                  {/* <div className=" absolute left-3 top-0  ">
  <IoBookmark size={45} className="text-basic" />
  <span className=" absolute left-[10px] top-2 text-white text-sm">
    30%
  </span>
</div> */}
                </div>
                <div className="flex justify-center text-[#929090] flex-col items-center mt-2 overflow-hidden ">
                  <div className="mt-3 flex flex-col justify-center">
                  <p className="mt-1 text-black text-center">{product.name}</p>

                    <p className="text-center text-basic font-bold mt-2">
                      {numberWithComma(product.price)}تومان
                    </p>
                  </div>
                </div>
                <div className="flex flex-row-reverse justify-between items-center text-[#aaa] px-2 border-t h-[46px]">
                 
                <Link href={`/productdet/single/${product.id}`}>
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
            ))
          ) : (
            <ImSpinner6 size={30} className="animate-spin mx-auto" />
          )}

          {/* <div className="bg-white my-4 mx-auto xl:w-[250px] xl:h-[355px] lg:w-[208px] lg:h-[355px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px] ms:h-[272px] shadow-lg flex justify-between flex-col overflow-hidden rounded-[10px]">
            <div className="relative">
              <Image
                src={camera3}
                className="object-cover mt-4 w-fit mx-auto max-h-[200px]"
                alt="camera"
              />
              <div className=" absolute left-3 top-0  ">
                <IoBookmark size={45} className="text-basic" />
                <span className=" absolute left-[10px] top-2 text-white text-sm">
                  30%
                </span>
              </div>
            </div>
            <div className="flex justify-center text-[#929090] flex-col items-center mt-2 ">
              <div className="mt-3 flex flex-col">
                <p className="text-center text-basic font-bold ">90000 تومان</p>
                <p className="mt-1 text-black">cctv warm light s22</p>
              </div>
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

          <div className="bg-white my-4 mx-auto xl:w-[250px] xl:h-[355px] lg:w-[208px] lg:h-[355px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px] ms:h-[272px] shadow-lg flex justify-between flex-col overflow-hidden rounded-[10px]">
            <div className="relative">
              <Image
                src={alarm}
                className="object-cover mt-4 w-fit mx-auto max-h-[200px]"
                alt="camera"
              />
              <div className=" absolute left-3 top-0  ">
                <IoBookmark size={45} className="text-basic" />
                <span className=" absolute left-[10px] top-2 text-white text-sm">
                  30%
                </span>
              </div>
            </div>
            <div className="flex justify-center text-[#929090] flex-col items-center mt-2 ">
              <div className="mt-3 flex flex-col">
                <p className="text-center text-basic font-bold ">90000 تومان</p>
                <p className="mt-1 text-black">cctv warm light s22</p>
              </div>
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

          <div className="bg-white my-4 mx-auto xl:w-[250px] xl:h-[355px] lg:w-[208px] lg:h-[355px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px] ms:h-[272px] shadow-lg flex justify-between flex-col overflow-hidden rounded-[10px]">
            <div className="relative">
              <Image
                src={camera1}
                className="object-cover mt-4 w-fit mx-auto max-h-[200px]"
                alt="camera"
              />
              <div className=" absolute left-3 top-0  ">
                <IoBookmark size={45} className="text-basic" />
                <span className=" absolute left-[10px] top-2 text-white text-sm">
                  30%
                </span>
              </div>
            </div>
            <div className="flex justify-center text-[#929090] flex-col items-center mt-2 ">
              <div className="mt-3 flex flex-col">
                <p className="text-center text-basic font-bold ">90000 تومان</p>
                <p className="mt-1 text-black">cctv warm light s22</p>
              </div>
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

          <div className="bg-white my-4 mx-auto xl:w-[250px] xl:h-[355px] lg:w-[208px] lg:h-[355px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px] ms:h-[272px] shadow-lg flex justify-between flex-col overflow-hidden rounded-[10px]">
            <div className="relative">
              <Image
                src={camera1}
                className="object-cover mt-4 w-fit mx-auto max-h-[200px]"
                alt="camera"
              />
              <div className=" absolute left-3 top-0  ">
                <IoBookmark size={45} className="text-basic" />
                <span className=" absolute left-[10px] top-2 text-white text-sm">
                  30%
                </span>
              </div>
            </div>
            <div className="flex justify-center text-[#929090] flex-col items-center mt-2 ">
              <div className="mt-3 flex flex-col">
                <p className="text-center text-basic font-bold ">90000 تومان</p>
                <p className="mt-1 text-black">cctv warm light s22</p>
              </div>
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
          </div> */}

          {/* <div className="bg-white my-4 mx-auto xl:w-[250px] xl:h-[355px] lg:w-[208px] lg:h-[355px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px] ms:h-[272px] shadow-lg flex justify-between flex-col overflow-hidden rounded-[10px]">
            <div className="relative">
              <Image
                src={camera1}
                className="object-cover mt-4 w-fit mx-auto max-h-[200px]"
                alt="camera"
              />
              <div className=" absolute left-3 top-0  ">
                <IoBookmark size={45} className="text-basic" />
                <span className=" absolute left-[10px] top-2 text-white text-sm">
                  30%
                </span>
              </div>
            </div>
            <div className="flex justify-center text-[#929090] flex-col items-center mt-2 ">
              <div className="mt-3 flex flex-col">
                <p className="text-center text-basic font-bold ">90000 تومان</p>
                <p className="mt-1 text-black">cctv warm light s22</p>
              </div>
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
          </div> */}

          {/* <div className="bg-white my-4 mx-auto xl:w-[250px] xl:h-[355px] lg:w-[208px] lg:h-[355px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px] ms:h-[272px] shadow-lg flex justify-between flex-col overflow-hidden rounded-[10px]">
            <div className="relative">
              <Image
                src={camera1}
                className="object-cover mt-4 w-fit mx-auto max-h-[200px]"
                alt="camera"
              />
              <div className=" absolute left-3 top-0  ">
                <IoBookmark size={45} className="text-basic" />
                <span className=" absolute left-[10px] top-2 text-white text-sm">
                  30%
                </span>
              </div>
            </div>
            <div className="flex justify-center text-[#929090] flex-col items-center mt-2 ">
              <div className="mt-3 flex flex-col">
                <p className="text-center text-basic font-bold ">90000 تومان</p>
                <p className="mt-1 text-black">cctv warm light s22</p>
              </div>
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
          </div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Cart;
