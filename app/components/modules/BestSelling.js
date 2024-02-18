"use client";
import React, { useRef, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImSpinner6 } from "react-icons/im";
import { IoBookmark, IoEyeOutline } from "react-icons/io5";
import { TbTrashX } from "react-icons/tb";
import { HiPlus, HiMinus } from "react-icons/hi";
import {
  numberWithComma,
  quantityCountBestSelling,
  IsInCartBestSelling,
} from "../helper/functions";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { CartContext } from "../context/CartContextProvider";
import { Grid, Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function App({ data }) {
  const { state, dispatch } = useContext(CartContext);

  return (
    <>
      <div className="w-full bg-[#f7f7f7]">
        <div className="p-2 lg:w-[85%] mx-auto rounded-xl pt-4 ">
        <div className="flex items-center px-1 md:px-3 flex-row-reverse justify-between text-white lg:mt-4">
          <h1 className="text-xl text-center lg:mx-0 mx-auto w-full lg:w-fit py-2 lg:rounded-none rounded-xl lg:bg-transparent bg-basic lg:text-black font-bold">
            {" "}
            پر فروش ترین محصولات
          </h1>
          <div className="hidden lg:inline md:w-[65%] border w-[70%]"></div>
          <Link
            href="/seeAllProduct"
            className="bg-white rounded-full hidden lg:flex shadow-lg text-basic text-sm px-1.5 py-2"
          >
            مشاهده همه
          </Link>
        </div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 5,
            },

            375: {
              slidesPerView: 2,
              spaceBetween: 5,
            },

            425: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              spaceBetween: 7,
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 10,
              slidesPerView: 4,
            },
            1280: {
              spaceBetween: 15,
              slidesPerView: 4,
            },
            1440: {
              spaceBetween: 15,
              slidesPerView: 4,
            },
          }}
          slidesPerView={3}
          grid={{
            rows: 1,
          }}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          className="h-auto grid"
          
        >
          {data ? (
            data.map((product) => (
              <SwiperSlide key={product.id} className="max-w-[300px] h-auto">
                <div className="xl:w-[260px] bg-white xl:h-[365px] lg:w-[208px] lg:h-[365px] md:w-[225px] md:h-[355px] ml:w-[192px] ml:h-[280px] mm:w-[167px] mm:h-[252px] ms:w-[140px] ms:h-[252px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]">
                <Link href={`/products/${product.id}`}>
                  <div className="relative">
                    <img
                      src={product.files}
                      alt={product.name}
                      className="object-cover mt-4 p-0 mx-auto md:w-fit md:h-[180px] xl:w-fit xl:h-[180px] lg:w-fit lg:h-[180px] w-[140px] h-[100px]"
                    />
                    {product.discount > 0 ? (
                      <div className="absolute left-3 top-0 ">
                        <span className="bg-basic rounded-xl absolute left-[10px] top-2 text-white text-sm">
                          {product.discount}
                        </span>
                      </div>
                    ) : (
                      []
                    )}
                    
                  </div>
                  </Link>
                  <div className="mt-3 flex flex-col justify-center">
                    <p className="text-center mt-1 font-bold">{product.name}</p>
                  </div>
                  <div className="flex justify-evenly mt-2 items-center">
                    <p className="text-basic font-bold">
                    {numberWithComma(product.price)}
                      <span className="text-[12px] text-[#929090]">تومان</span>
                    </p>
                  </div>
                  <div className="flex flex-row-reverse justify-center items-center text-[#fff] px-2 border-t h-[46px]">
                    {quantityCountBestSelling(state, product.id) === 1 && (
                      <button
                      className="p-1 mx-3 rounded-full flex items-end justify-centerl bg-basic h-7 w-7"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE-ITEM-BEST-SELL",
                            payload: product,
                          })
                        }
                      >
                         <TbTrashX className="" size={21} />
                      </button>
                    )}

                    {quantityCountBestSelling(state, product.id) > 1 && (
                      <button
                      className="mx-3 p-1 h-7 bg-basic w-7 flex items-end justify-center rounded-full text-2xl"
                        onClick={() =>
                          dispatch({
                            type: "DECRESS-BEST-SELL",
                            payload: product,
                          })
                        }
                      >
                       <HiMinus size={17} />
                      </button>
                    )}
                    {quantityCountBestSelling(state, product.id) > 0 && (
                      <span className="text-black">{quantityCountBestSelling(state, product.id)}</span>
                    )}
                    {IsInCartBestSelling(state, product.id) ? (
                      <button
                      className="p-1 mx-3 rounded-full flex items-end justify-center bg-basic h-7 w-7"

                        onClick={() =>
                          dispatch({
                            type: "INCRESS-BEST-SELL",
                            payload: product,
                          })
                        }
                      >
                         <HiPlus />
                      </button>
                    ) : (
                      <button
                      className="text-[#717171] "
                        onClick={() =>
                          dispatch({
                            type: "ADD_ITEMS-BEST-SELL",
                            payload: product,
                          })
                        }
                      >
                        اضافه به سبد خرید
                      </button>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <ImSpinner6 size={30} className="animate-spin mx-auto" />
          )}
        </Swiper>
      </div>
      </div>
    </>
  );
}
