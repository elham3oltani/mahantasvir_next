"use client"
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
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useParams } from 'next/navigation'


const products = async ({  searchParams }) => {
  const params = useParams()
  console.log(params)
//const searchParams = useSearchParams();
console.log(usePathname)
  const getDataProducts = await getData();
  const products=getDataProducts[0]
  console.log(products)
  return (
    <>
    <h1>{params.slug}</h1>
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
export async function getData() {
  const res = await fetch("https://backend.mahantasvir.ir", {
    nex: { revalidate: 10 },
  });
  const data = res.json();
  return data;
}