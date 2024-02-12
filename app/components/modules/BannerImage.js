import React from "react";
import Image from "next/image";
import Bannercctv from "../../../public/images/banner cctv.jpeg";

import Bannersmart from "../../../public/images/banner_smart.jpeg";

const BannerImage = () => {
  return (
    <section className="flex my-8">
      <div className="px-4">
        <Image src={Bannercctv} alt="banner cctv" className=" rounded-lg" />
      </div>
      <div className="px-4">
        <Image src={Bannersmart} alt="banner smart" className=" rounded-lg" />
      </div>
    </section>
  );
};

export default BannerImage;
