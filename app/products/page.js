
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
  const data = await getData()
  console.log(data)
  const products=data["proposal"]
  console.log(products)
  return (
    <>
    
     <div className="mx-28 my-10 overflow-hidden">
      {/* top order */}
      {products.map((product)=>(
        <div key={product.id} className="bg-basic">
          <p>piii</p>
          <img src={product?.files} alt={product.name} width={400} height={400}/>
          <p>{product.name}</p>
        </div>
      ))}
    
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
export async function getData() {
  const res = await fetch("https://backend.mahantasvir.ir");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  

  return res.json();
}
export default products;
