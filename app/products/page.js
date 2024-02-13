
import React from "react";
//import Link from "next/link";
import cctv from "../../public/images/cctv02.png";
import BsCartCheck from "react-icons/bs";
import HiPlus from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import Product from "./Product";
import FilterProduct from "./FilterProduct";

const products = async () => {

  return (
    <>
    
     <div className="mx-28 my-10 overflow-hidden">
      {/* top order */}
     
    
      <div className="flex">
        {/* single product */}
        <div className="w-[70%]">
          <Product />
        </div>
        {/* filter product */}
        <FilterProduct />
      </div>
    </div>
    </>
   
  );
};

export default products;
