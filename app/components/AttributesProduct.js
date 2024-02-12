import React from "react";
import Image from "next/image";
import medal from "../../public/images/medal.png";
import discount from "../../public/images/discount.png"
import freeDelivery from "../../public/images/free-delivery.png"
import service from "../../public/images/service.png"


const AttributesProduct = () => {
  return (
    <div className="flex flex-wrap flex-row-reverse rounded-lg justify-around items-center py-2 lg:w-4/5 w-full bg-white mx-auto shadow-xl my-12">
      <div className="flex flex-col items-center justify-center">
        <Image src={medal}  className="lg:w-16 w-10" />
        <p className="text-[12px]">ضمانت اصالت کالا</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={discount} className="lg:w-16 w-10"  />
        <p className="text-[12px]">تخفیفات ویژه</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={freeDelivery} className="lg:w-16 w-10" />
        <p className="text-[12px]">ارسال رایگان</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={service} className="lg:w-16 w-10" />
        <p className="text-[12px]">پشتیبانی</p>
      </div>
    </div>
  );
};

export default AttributesProduct;
