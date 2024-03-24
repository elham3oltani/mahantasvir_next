"use client";
import React from "react";
//import Link from "next/link";
import BsCartCheck from "react-icons/bs";
import HiPlus from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import Product from "../components/modules/Product";
import FilterProduct from "../components/modules/FilterProduct";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";

const products = async ({ searchParams }) => {
  const params = useParams();
  console.log(params);
  const data=await getData()
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
          <FilterProduct data={data} />
        </div>
      </div>
    </>
  );
};

export default products;
export async function getData() {
  const res = await fetch(`${process.env.BASE_URL}`, {
    nex: { revalidate: 10 },
  });
  const data = res.json();
  return data;
}
