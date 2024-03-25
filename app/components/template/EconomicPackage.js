import React from "react";
import Cart from "../modules/Cart";
import Link from "next/link";
const EconomicPackage = async () => {
  const data = await getData();

  return (
    <div className="lg:w-[93%] mx-auto bg-basic mt-8 p-2 rounded-xl h-[20%] shadow-lg">
      <div className="">
        <div className="flex items-center px-1 md:px-3 mx-8 flex-row-reverse justify-between lg:mt-4">
          <h1 className="text-xl text-center lg:mx-0 mx-auto w-full lg:w-fit lg:rounded-none rounded-xl lg:bg-transparent bg-basic text-white lg:text-white font-bold">
            {" "}
            پکیج اقتصادی
          </h1>
          {/* <div className="hidden lg:inline border md:w-[65%] w-[70%]"></div> */}
          <Link
            href="/seeAllBest"
            className="bg-white rounded-full hidden lg:flex shadow-lg text-basic text-sm px-1.5 py-2"
          >
            مشاهده همه
          </Link>
        </div>
 
         
          <Cart data={data[0]} />;
       
      </div>
    </div>
  );
};

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/product/pakages`);
  return res.json();
}
export default EconomicPackage;
