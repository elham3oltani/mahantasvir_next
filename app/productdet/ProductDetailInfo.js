import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdEventAvailable, MdPriceCheck } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";
const ProductDetailInfo = () => {
  return (
    <>
      <div className=" w-full flex flex-col items-end justify-end px-4 rounded-md shadow-[2px_2px_30px_3px_rgba(0,0,0,0.1)]  border">
        <div className="flex border-b w-full flex-row-reverse justify-between items-center">
          <p className="py-1.5">اطلاعات محصول</p>
        </div>

        <div className="flex my-2 items-center">
          <p className="mx-1">موجود در انبار</p>

          <MdEventAvailable size={25} className="text-green-500" />
        </div>

        {/* <div className="flex my-2 items-center">
          <p className="mx-1">گارانتی ۲ ساله</p>
          <AiOutlineFileProtect size={25} className="text-blue-500" />
        </div> */}

        <div className="flex my-2 items-center">
          <p className="mx-1">ارسال از یک روز کاری دیگر</p>
          <FaShippingFast size={25} className="text-blue-500" />
        </div>
        <div className="flex my-2 items-center">
          <p className="mx-1 flex items-center font-bold text-lg text-orange-500 justify-center">
            <span className="mx-1 text-black">تومان</span>
            2308777
          </p>
          <MdPriceCheck size={25} className="text-blue-500" />
        </div>
        <div className="flex w-full">
          <button className="bg-basic w-full py-2 px-2 mx-2 my-2 rounded-lg text-white">
            به سبد خرید اضافه شد
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetailInfo;
