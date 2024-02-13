"use client";
import React, { useEffect, useState,useContext } from "react";
import { LuSearch } from "react-icons/lu";
import { useMediaQuery } from "react-responsive";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineHome,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import logo from "../../../public/images/logo.png";
import cctvIcon from "../../../public/images/cctv-icon.png";
import Image from "next/image";
import Link from "next/link";
import alarmIcons from "../../../public/images/alarm-icons.png";
import { CartContext } from "../../components/context/CartContextProvider";
const Header = () => {
  let { state } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const desktopMode = useMediaQuery({
    query: "(min-width:1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40 && window.screenY < 90) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className="text-bold">
      <div className="lg:flex flex-row-reverse justify-between py-2 items-center lg:border-b px-8">
        <div className="flex items-center justify-center">
          <div className="lg:relative fixed z-50 px-2 w-full">
            <input
              type="text"
              placeholder="محصول مورد نظر خودت را پیدا کن"
              className="text-sm placeholder:text-[12px] w-full text-right lg:pr-12 pr-12 rounded-full bg-[#e6e6e6] h-[35px] outline-none"
            />
            
           <div className="">
          <Link href="" className="right-[9px] absolute p-2 bg-red-500 mt-2 rounded-full bottom-[-1px]">
          <LuSearch
              size={24}
              className="text-white "
            />
          </Link>
               {/* <Image
              src={logo}
              alt="logo"
              className="h-[50px] w-[150px] object-cover absolute overflow-hidden"
            /> */}
           </div>
          </div>
          <Link href="/" className="lg:block hidden">
            <Image
              src={logo}
              alt="logo"
              className="h-[60px] w-[300px] object-cover overflow-hidden"
            />
          </Link>
        </div>

        <div className="lg:flex hidden ml-8 ">
          <Link href="signup" className="bg-opacity-20 mr-3 text-center p-2 border border-basic rounded-full w-12 h-12">
            {" "}
            <AiOutlineUser size={30} className="text-[#6c6c6c]" />
          </Link>
          <Link href="shopping" className="relative hidden lg:block border border-basic text-center w-12 h-12 bg-opacity-20 p-2 rounded-full">
            <AiOutlineShoppingCart size={30} className="text-[#6c6c6c]" />
            <span className="rounded-full h-[15px] w-[15px] text-[12px] -top-1.5 left-1 absolute bg-basic text-white text-center ">
            {state.itemsCounter}

            </span>
          </Link>
          {/* <div onClick={() => setNav(!nav)} className="xl:hidden">
            {nav ? <IoClose size={30} /> : <HiOutlineMenu size={30} />}
          </div> */}
        </div>
      </div>

      <nav
        className={`${
          header
            ? "top-0 py-2 lg:fixed  z-30 transition-all shadow-lg duration-300 bg-body bg-opacity-90 text-[#414141] w-full flex flex-row-reverse justify-center items-center"
            : " lg:flex hidden text-[#414141] font-bold shadow-[5px_35px_60px_-15px_rgba(0,0,0,0.3)] flex-row-reverse justify-center items-center py-2 "
        }`}
      >
        <Link href="/" className="mx-4 px-1 py-1 text-basic-hover ">
          صفحه اصلی
        </Link>
        <div className="relative">
          <button
            className="mx-4 flex items-center duration-300  hover:text-basic-hover transition-all ease-in"
            onClick={() => setIsOpen(!isOpen)}
          >
            محصولات
            <span className="bottom-0.5 ">
              <IoIosArrowDown
                className={isOpen ? "animate-bounce text-basic" : "text-basic"}
              />
            </span>
          </button>
          {isOpen ? (
            <div className="flex flex-col justify-start w-[150px] absolute z-10 mr-3 text-sm bg-white mt-4 shadow-xl rounded-md px-0.5 py-1">
              <Link
                href="products"
                className="flex w-full justify-center items-center py-1.5 hover:text-basic-hover hover:bg-basic hover:bg-opacity-20 hover:rounded-full my-1 hover:shadow-md mx-auto"
              >
                دوربین مداربسته
              </Link>
              <Link
                href=""
                className="flex w-full justify-center items-center py-1.5 hover:text-basic-hover hover:bg-basic hover:bg-opacity-20 hover:rounded-full hover:shadow-md my-1 "
              >
                دزدگیر اماکن
              </Link>
              <Link
                href=""
                className="flex w-full justify-center  items-center py-1.5 hover:text-basic-hover hover:bg-basic hover:bg-opacity-20 hover:rounded-full hover:shadow-md my-1 "
              >
                گیت فروشگاهی
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
        <Link href="" className="mx-4 hover:text-basic-hover transition-all ease-in duration-150">
          لوازم جانبی
        </Link>

        <Link
          href="about-us"
          className="mx-4 px-1 py-1 hover:text-basic-hover transition-all ease-in-out duration-150  "
        >
          درباره ما
        </Link>
        <Link
          href="contact-us"
          className="mx-4 px-1 py-1 hover:text-basic-hover transition-all duration-150"
        >
          تماس با ما
        </Link>
     
      </nav>

      {/* nav in mobile */}
      <nav className="lg:hidden w-full max-h-[50px] text-[#aaa] mx-0 border-t-2 text-[12px]  bg-white text-slate-00 rounded-t-md shadow-xl shadow-slate-950 z-30 fixed flex flex-row-reverse items-center justify-around bottom-0">
        <Link
          href="/"
          className="flex flex-col-reverse items-center hover:text-basic hover:border-t-2 border-basic hover:w-auto"
        >
          خانه
          <AiOutlineHome size={24} />
        </Link>
        <Link
          href=""
          className="flex flex-col-reverse items-center hover:text-basic hover:border-t-2 border-basic hover:w-auto"
        >
          محصولات
          <BiCategoryAlt size={24} />
        </Link>

        <Link
          href="shopping"
          className="flex flex-col-reverse items-center hover:text-basic hover:border-t-2 border-basic hover:w-auto"
        >
          سبد خرید
          <AiOutlineShoppingCart size={24} />
        </Link>

        <Link
          href=""
          className="flex flex-col-reverse items-center hover:text-basic hover:border-t-2 border-basic hover:w-auto"
        >
          ورود
          <AiOutlineUser size={24} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
