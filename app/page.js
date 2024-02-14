
import AttributesProduct from "./components/AttributesProduct";
import Banner from "./components/Banner";
import Discount from "./components/Discount";
import Cart from "./components/modules/Cart";
import NewestProduct from "./components/template/NewestProduct";
import SpeialSale from "./components/SpeialSale";
import BannerImage from "./components/modules/BannerImage";
import BestSeleProduct from "./components/template/BestSeleProduct";
//import BestSelling from "./components/modules/BestSelling"
import BannerIntro from "./components/modules/BannerIntro";
import BasicPage from "./components/BasicPage";

export default async function Home() {
  

  return (
    <div className="">
  <BasicPage /> 
      <AttributesProduct />
      {/* <SpeialSale /> */}
      {/* <Discount /> */}
      <NewestProduct />
     <BannerIntro /> 
      <BestSeleProduct /> 
      <BannerImage />
    
    </div>
  );
}
