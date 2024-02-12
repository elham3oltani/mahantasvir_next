'use client'
import React,{useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import cctv1 from "../../public/images/cctv1.png"
import cctv2 from "../../public/images/cctv01.png"
import cctv3 from "../../public/images/cctv02.png"
// import cctv4 from "../../../public/cctv01.png"
// import cctv5 from "../../../public/cctv02.png"
// import cctv6 from "../../../public/cctv1.png"



// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    <div className='border-l'>
    <Swiper
        style={{
          // '--swiper-navigation-color': '#fff',
          // '--swiper-pagination-color': '#fff',
        }}
        
        loop={true}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=""
      >

        <SwiperSlide className="h-[300px]" >
          <Image src={cctv3}   />
        </SwiperSlide>
        <SwiperSlide className="h-[300px]">
          <Image src={cctv1}  />
        </SwiperSlide>
        <SwiperSlide className="h-[300px]">
          <Image src={cctv2} className="w-[400px] h-fit" />
        </SwiperSlide>
       

      </Swiper>
      <Swiper
       
        onSwiper={setThumbsSwiper}
        loop={true}
     
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      className=""
      >
        <SwiperSlide className=''>
          <Image  src={cctv3} className="w-[80px] h-[80px] border rounded-md object-cover" />
        </SwiperSlide>
        <SwiperSlide className='ml-6'>
          <Image className="w-[80px] h-[80px] border rounded-md object-cover"  src={cctv1} />
        </SwiperSlide>
        <SwiperSlide className='ml-6'>
          <Image className="w-[80px] h-[80px] border rounded-md object-cover"  src={cctv2} />
        </SwiperSlide>  
        <SwiperSlide className='ml-6'>
          <Image className="w-[80px] h-[80px] border rounded-md object-cover"  src={cctv2} />
        </SwiperSlide> 
      </Swiper>
    </div>
    </>
  );
}