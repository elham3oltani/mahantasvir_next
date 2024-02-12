"use client"
import react from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import camera1 from "../../../public/images/cctv02.png";
import alarm from "../../../public/images/alarm1.jpeg";
import camera2 from "../../../public/images/cctv01.png";
import camera3 from "../../../public/images/cctv-det3.webp";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { IoBookmark, IoEyeOutline } from "react-icons/io5";
import logo from "../../../public/images/logo.png";
import cctvlogo from "../../../public/images/cctvlogo.jpg";
import { IsInCartProduct } from "../../components/helper/functions";
import { HiPlus } from "react-icons/hi";
import { BsCartCheck } from "react-icons/bs";
const Cart = async () => {
  const { state, dispatch } = useContext(CartContext);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const data = await getData();
  const productNew = data["proposal"];
  console.log(productNew);
  return (
    <div className="bg-[#f7f7f7] mt-8 h-full">
      <div className="p-2 w-[85%] mx-auto rounded-xl pt-4 bg-[#f7f7f7]">
        <div className="flex items-center flex-row-reverse justify-between  mt-4">
          <h1 className="border-b-2 text-xl border-basic font-bold">
            {" "}
            جدیدترین محصولات
          </h1>
          <button className="bg-white rounded-full shadow-lg text-basic text-sm px-1.5 py-2">
            مشاهده همه
          </button>
        </div>
        {productNew.map((product)=>(
        <Carousel
        key={product.id}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
          // autoPlay={true}
          className="w-full mx-auto pt-4 "
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
        >
        
           <div className="bg-white my-4 mx-auto xl:w-[250px] xl:h-[355px] lg:w-[208px] lg:h-[355px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px] ms:h-[272px] shadow-lg flex justify-between flex-col overflow-hidden rounded-[10px]">
           <div className="relative">
             <img
               src={product.files}
               className="object-cover mt-4 w-fit mx-auto"
               alt={product.name}
             />
             {/* <div className=" absolute left-3 top-0  ">
             <IoBookmark size={45} className="text-basic" />
             <span className=" absolute left-[10px] top-2 text-white text-sm">
               30%
             </span>
           </div> */}
           </div>
           <div className="flex justify-center text-[#929090] flex-col items-center mt-2 border-t">
             <div className="mt-3 flex flex-col">
               <p className="text-center font-bold ">90000</p>
               <p className="mt-1">cctv warm light s22</p>
             </div>
           </div>
           <div className=" text-[#aaa] py-4">
             <div className="flex justify-between items-center mx-4">
               <p className="text-black font-bold">
                 160.000
                 <span className="text-[12px]">تومان</span>
               </p>
               {IsInCartProduct(state) ? (
                 <button
                   className="text-white justify-center flex items-center transition-all duration-200 delay-150 ease-in-out rounded-md bg-orange-500 w-7 h-7 xl:h-8 xl:w-12 lg:h-8 lg:w-12"
                   onClick={() =>
                     dispatch({
                       type: "REMOVE-ITEM-PRODUCT",
                       payload: item,
                     })
                   }
                 >
                   <BsCartCheck size={22} className="" />
                 </button>
               ) : (
                 <>
                   <button
                     className="text-white bg-blue-200 transition-all duration-200 delay-150 ease-in-out  px-2.5 rounded-md py-1 align-middle hidden lg:flex xl:flex 2xl:flex"
                     onClick={() =>
                       dispatch({
                         type: "ADD_ITEMS-PRODUCT",
                         payload: item,
                       })
                     }
                   >
                     {" "}
                     <BsCart3 />
                   </button>
                   <button
                     className="text-white bg-blue-200 items-center transition-all duration-200 delay-150 ease-in-out w-7 h-7 justify-center rounded-md py-1 align-middle flex 2xl:hidden lg:hidden xl:hidden"
                     onClick={() =>
                       dispatch({
                         type: "ADD_ITEMS-PRODUCT",
                         payload: item,
                       })
                     }
                   >
                     {" "}
                     <HiPlus className="" size={20} />
                   </button>
                 </>
               )}
               : []
             </div>
           </div>
         </div>
        
        </Carousel>
          ))}
      </div>
    </div>
  );
};
export async function getData() {
  const res = await fetch("https://backend.mahantasvir.ir")
  return res.json();
}
export default Cart;
