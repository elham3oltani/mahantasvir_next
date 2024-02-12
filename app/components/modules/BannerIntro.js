import React from "react";
import Image from "next/image";
import Bannerersal from "../../../public/images/banner-ersal.jpeg";
import Bannercctv2 from "../../../public/images/banner-cctv2.jpeg";
const bannerIntro = () => {
  return (
    <section className="flex my-8">
      <div className="px-4">
        <Image src={Bannerersal} alt="banner cctv" className=" rounded-lg" />
      </div>
      <div className="px-4">
        <Image src={Bannercctv2} alt="banner smart" className=" rounded-lg" />
      </div>
    </section>
  );
};

export default bannerIntro;
