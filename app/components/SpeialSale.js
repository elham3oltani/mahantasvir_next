import React from "react";
import Image from "next/image";
import bannerDiscount from "../../public/images/banner.png";
import bgSpicial from "../../public/images/bgSpicial.png";
const SpeialSale = () => {
  return (
    <div className=" w-full rounded-lg h-[400px] bg-gradient-to-r from-[#404040] to-[#ed1d24] bg-opacity-5 ">
      <div className="flex flex-row-reverse">
      <div>
        <Image alt="banner" className="w-[600px] h-[400px]" src={bannerDiscount} />
      </div>
      </div>
    </div>
  );
};

export default SpeialSale;
