"use client";
import AttributesProduct from "./components/AttributesProduct";
import Banner from "./components/Banner";
import Discount from "./components/Discount";
import Cart from "./components/modules/Cart";
import SpeialSale from "./components/SpeialSale";
import BannerImage from "./components/modules/BannerImage";
//import BestSeleProduct from "./components/template/BestSeleProduct";
import BestSelling from "./components/modules/BestSelling"
import BannerIntro from "./components/modules/BannerIntro";
import { useMediaQuery } from "react-responsive";
export default async function Home() {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="">
     <Banner />
      <AttributesProduct />
      {/* <SpeialSale /> */}
      {/* <Discount /> */}
      <Cart />
      <BannerIntro />

      <BestSelling /> 
      <BannerImage />
      <Cart />
    </div>
  );
}
