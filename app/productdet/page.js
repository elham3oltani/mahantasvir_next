import React from "react";
import ProductDetailImages from "./ProductDetailImages";
import ProductDetailItem from "./ProductDetailItem";
import ProductDetailInfo from "./ProductDetailInfo";
import Cart from "../components/modules/Cart";
const DetailProduct = () => {
  return (
    <>
      <section className=" xl:mx-[120px] lg:mx-[60px] md:mx-[40px] sm:mx-[30px] ">
        <h1 className="text-right mt-10">
          دوربین مداربسته آنالـوگ هایک ویژن مدلDS-2CE16D0T-EXIF
        </h1>
        <div className="bg-[#fff] shadow-[2px_2px_30px_3px_rgba(0,0,0,0.1)] max-h-[1366] overflow-hidden flex flex-row-reverse justify-between items-center rounded-xl my-10 ">
          <div className="w-[35%] ">
            <ProductDetailImages />
          </div>
          <div className="w-[30%]">
            <ProductDetailItem />
          </div>
          <div className="w-[20%] ">
            <ProductDetailInfo />
          </div>
        </div>
      </section>

      <Cart />
    </>
  );
};

export default DetailProduct;
