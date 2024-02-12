"use client"
import AttributesProduct from "./components/AttributesProduct";
import Banner from "./components/Banner";
import Discount from "./components/Discount";
import Cart from "./components/modules/Cart";
import SpeialSale from "./components/SpeialSale";
import BannerImage from "./components/modules/BannerImage";
import BestSeleProduct from "./components/template/BestSeleProduct";
import BannerIntro from "./components/modules/BannerIntro";
import { useMediaQuery } from "react-responsive";
import BestSelling from "./components/modules/BestSelling"
export default async function Home() {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  //   const data = await getData()
  // console.log(data)
  const data = await getData();

  const productNew = data["proposal"];
  return (
    <div className="">

        <Banner />
        <AttributesProduct />
        {/* <SpeialSale /> */}
        {/* <Discount /> */}
        <Cart />
        <BannerIntro />
      <BestSelling data={productNew} />
        <BannerImage />
       
   
    </div>
  );
}
export async function getData() {
  const res = await fetch("https://backend.mahantasvir.ir");

  return res.json();
}
