import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import banner1 from "../../public/1.webp";
import banner2 from "../../public/2.webp";
import banner3 from "../../public/3.webp";
function Banner(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
     <div className="relative">
     <Carousel
        autoPlay={true}
        transitionDuration={3000}
        autoPlaySpeed={2000}
        interval={3000}
        rewindWithAnimation={true}
        infinite={true}
        focusOnSelect={true}
        transitionTime={3000}
        customTransition="transform 300ms ease-in-out"
        responsive={responsive}
        removeArrowOnDeviceType={["mobile", "tablet"]}
        draggable={true}
        swipeable={false}

        arrows={true}
        showDots={true}
        renderArrowPrev={true}
        renderArrowNext	={true}
        keyBoardControl	={true}
        className="w-full relative md:h-[300px] xl:h-[400px] 2xl:h-[400px] lg:h-[350px] object-cover"
      >
              <div className="w-full">
                <Image
                  src={banner1}
                  className="w-full md:h-[400px] 2xl:h-[400px] xl:h-[400px] lg:h-[400px] h-[200px] object-fill lg:rounded-2xl"
                />
              
              </div>
              <div>
              <Image
                  src={banner2}
                  className="w-full md:h-[400px] 2xl:h-[400px] xl:h-[400px] lg:h-[400px] h-[200px] object-fill lg:rounded-2xl"
                />
                
              </div>
              <div>
              <Image
                  src={banner3}
                  className="w-full md:h-[400px] 2xl:h-[400px] xl:h-[400px] lg:h-[400px] h-[200px] lg:rounded-2xl object-fill"
                />
              </div>
      </Carousel>
     </div>
    </>
  );
}

export default Banner;
