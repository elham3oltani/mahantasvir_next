"use client";
import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineHome,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full my-2">
      <div className="flex flex-row-reverse justify-between items-center lg:border-b lg:pb-2">
        <div className="relative lg:mr-4 lg:w-64 w-full px-2">
          <input
            type="text"
            placeholder="محصول مورد نظر خودت را پیدا کن"
            className="text-sm placeholder:text-[12px]  relative text-right pr-8 w-full rounded-md bg-[#e6e6e6] h-8 outline-none"
          />
          <LuSearch size={21} className="absolute text-basic top-1.5 right-4" />
        </div>
        <div className="lg:block hidden">
          <Image src={logo} alt="logo Mahan Tasvir" width={50} height={50} />
        </div>
        <div className="lg:flex hidden ml-2">
          <Link href="">
            {" "}
            <AiOutlineUser size={30} className="m-2" />
          </Link>
          <Link href="#" className="relative hidden lg:block">
            <AiOutlineShoppingCart size={30} className="m-2" />
            <span className="rounded-full h-[17px] w-[16px] text-sm align-top absolute bg-basic text-white text-center top-0.5 right-1">
              0
            </span>
          </Link>
          {/* <div onClick={() => setNav(!nav)} className="xl:hidden">
            {nav ? <IoClose size={30} /> : <HiOutlineMenu size={30} />}
          </div> */}
        </div>
      </div>

      <nav className="lg:flex hidden flex-row-reverse justify-center items-center mt-3 ">
        <Link
          href=""
          className="mx-4 px-1 py-1  hover:text-basic-hover transition-all duration-300"
        >
          صفحه اصلی
        </Link>
        <div className="relative">
          <button
            className="mx-4 hover:text-basic-hover transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            محصولات
            <span className="bottom-0.5 absolute text-basic">
              <IoIosArrowDown className={isOpen ? "animate-bounce" : ""} />
            </span>
            {isOpen ? (
              <div className="flex flex-col absolute z-20 mt-3 rounded-md px-6">
                <Link href="" className="bg-white">
                  cctv
                </Link>
                <Link href="" className="bg-white">
                  dozdgir
                </Link>
                <Link href="" className="bg-white">
                  gate
                </Link>
              </div>
            ) : (
              ""
            )}
          </button>
        </div>
        <Link
          href=""
          className="mx-4 px-1 py-1  hover:text-basic-hover transition-all duration-300   "
        >
          درباره ما
        </Link>
        <Link
          href=""
          className="mx-4 px-1 py-1  hover:text-basic-hover transition-all duration-300   "
        >
          تماس با ما
        </Link>
        <Link
          href=""
          className="mx-4 px-1 py-1  hover:text-basic-hover transition-all duration-300   "
        ></Link>
      </nav>

      {/* nav in mobile */}
      <nav className="lg:hidden text-sm py-1.5 bg-white text-slate-400 rounded-t-md shadow-xl shadow-slate-950  fixed flex flex-row-reverse w-full items-center justify-around bottom-0">
        <Link href="" className=" flex flex-col-reverse items-center bg-basic text-white">
          خانه
          <AiOutlineHome size={24} />
        </Link>
        <Link href="" className="flex flex-col-reverse items-center">
          محصولات
          <BiCategoryAlt size={24} />
        </Link>
        {/* <Link href="" className="">
          منو
        </Link> */}
        <Link href="" className="flex flex-col-reverse items-center">
          سبد خرید
          <AiOutlineShoppingCart size={24} />
        </Link>
        <Link href="" className="flex flex-col-reverse items-center">
          ورود
          <AiOutlineUser size={24} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
