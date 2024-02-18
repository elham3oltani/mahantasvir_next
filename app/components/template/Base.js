
import React from 'react';
import AttributesProduct from "../AttributesProduct";
import NewestProduct from "./NewestProduct";
import BannerImage from "../modules/BannerImage";
import BestSeleProduct from "./BestSeleProduct";
import BannerIntro from "../modules/BannerIntro";
import CustomerTrust from '../CustomerTrust';
const index = () => {
 
    return (
     <>
     
        <AttributesProduct />
      {/* <SpeialSale /> */}
      {/* <Discount /> */}
      <NewestProduct />
     <BannerIntro /> 
      <BestSeleProduct /> 
      <BannerImage />
   <CustomerTrust />
     </>
    );
};

export default index;