'use client'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
// import banner1 from "../../public/1.webp";
 import banner4 from "../../public/images/2.webp";
// import banner3 from "../../public/3.webp";
import banner1 from "../../public/images/banner_dahua.jpeg";
import banner2 from "../../public/images/-bbb.jpeg";
import banner3 from "../../public/images/banner_tvt.jpeg";
function Banner() {
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
        //draggable={true}
        // swipeable={true}
        arrows={true}
        //showDots={true}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <LeftIcon className="w-9 h-9 text-white" />
            </div>
          );
        }}
        renderArrowNext={true}
        keyBoardControl={true}
        className="w-full md:h-[300px] xl:h-[400px] 2xl:h-[400px] lg:h-[350px] -z-20 relative object-cover"
      >
        <div className="w-full">
          <Image
            src={banner1}
            className="w-full md:h-[400px] 2xl:h-[400px] xl:h-[400px] lg:h-[400px] h-[200px] object-fill "
          />
        </div>
        <div>
          <Image
            src={banner2}
            className="w-full md:h-[400px] 2xl:h-[400px] xl:h-[400px] lg:h-[400px] h-[200px] object-fill "
          />
        </div>
        <div>
          <Image
            src={banner3}
            className="w-full md:h-[400px] 2xl:h-[400px] xl:h-[400px] lg:h-[400px] h-[200px]  object-fill"
          />
        </div>

        <div>
          <Image
            src={banner4}
            className="w-full md:h-[400px] 2xl:h-[400px] xl:h-[400px] lg:h-[400px] h-[200px]  object-fill"
          />
        </div>
      </Carousel>
    </>
  );
}

export default Banner;
