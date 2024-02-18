// "use client";
// import React from "react";
// import banner from "../../public/images/banner.png";
// import bgDisc from "../../public/images/bannerStore.jpg";
// import takhfif from "../../public/images/takhfif.jpg";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import camera2 from "../../public/images/dorbin.jpeg";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { GoHeart } from "react-icons/go";
// import { BsCart3 } from "react-icons/bs";
// import { IoBookmark } from "react-icons/io5";
// const Discount = () => {
//   return (
//     <div className="h-[400px] rounded-xl mx-24">
//       <div className=" flex flex-row-reverse items-center my-8 px-2  mx-auto w-full">
//         <div className="w-[30%] h-[380px]">
//           <Image
//             alt="banner"
//             className="w-[380px] h-[350px] rounded-lg"
//             src={takhfif}
//           />
//         </div>
//         <div className="bg-basic h-[380px] rounded-tl-[5%] rounded-3xl rounded-bl-[60%] w-[40%]">
//           <Swiper
//             modules={[Autoplay, Pagination, Navigation]}
//             direction={"vertical"}
//             pagination={{
//               clickable: true,
//             }}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             className="w-full rounded-lg"
//           >
//             <SwiperSlide className="my-auto w-full">
//               <div className="flex items-center justify-between w-full flex-row-reverse m-4 bg-white">
//                 <Image src={camera2} width={200} />
//                 <div className="flex flex-col">
//                   <p>دوربین وارم لایت ۸۰۵۳</p>
//                   <p>265/000</p>
//                   <p>15%</p>
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide className="flex items-center justify-center ">
//               <div className="flex items-center flex-row-reverse">
//                 <Image src={camera2} width={200} />
//                 <div>
//                   <p>دوربین وارم لایت ۸۰۵۳</p>
//                   <p>265/000</p>
//                 </div>
//                 <p>15%</p>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Discount;
