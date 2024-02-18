"use client";
import React, { useContext } from "react";
import BsCartCheck from "react-icons/bs";
import { IsInCartProduct, quantityCountProduct } from "../helper/functions";
import { HiPlus, HiMinus } from "react-icons/hi";
import { TbTrashX } from "react-icons/tb";
import Link from "next/link";
import { numberWithComma,shortText } from "../helper/functions";
import FilterProduct from "./FilterProduct";
import { CartContext } from "../context/CartContextProvider";
import SortByProduct from "./SortByProduct";
const Product = ({ data }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <>
      <div className="lg:mx-28 mt-16 overflow-hidden">
        
        <div className="lg:flex-row flex flex-col-reverse">
          
          <div className="lg:w-[70%] w-full">
          <SortByProduct />
            <section className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3">
              {data
                ? data.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white hover:scale-95 border duration-500 delay-75
                       transition xl:w-[260px] xl:h-[355px] lg:w-[208px] lg:h-[355px] md:w-[225px]
                        md:h-[345px] ml:w-[192px] ml:h-[300px] mm:w-[167px] mm:h-[272px] ms:w-[140px]
                        ms:h-[252px] shadow-lg my-4 mx-auto flex justify-between flex-col overflow-hidden rounded-[10px]"
                    >
                        <Link href={`/products/${product.id}`}>
                      <div className="relative">
                        <img
                          src={product.files}
                          className="object-cover mt-4 p-0 mx-auto md:w-fit md:h-[180px]
                           xl:w-fit xl:h-[180px] lg:w-fit lg:h-[180px] w-[140px] h-[100px]"
                        />
                      </div>
                      </Link>
                      <div>
                        <p className="text-center font-bold lg:text-lg text-sm">{product.name}</p>
                      </div>
                      <div className="flex justify-evenly">
                        <p className="text-basic text-sm lg:text-lg font-bold">
                          {numberWithComma(product.price)}
                          <span className="text-[12px]">تومان</span>
                        </p>
                      </div>
                      <div className="flex flex-row-reverse justify-center items-center mx-2 text-[#fff] px-2 border-t h-[46px]">
                        {quantityCountProduct(state, product.id) === 1 && (
                          <button
                            className="p-1 mx-3 rounded-full flex items-end justify-centerl bg-basic h-7 w-7"
                            onClick={() =>
                              dispatch({
                                type: "REMOVE-ITEM-PRODUCT",
                                payload: product,
                              })
                            }
                          >
                            <TbTrashX className="" size={21} />
                          </button>
                        )}

                        {quantityCountProduct(state, product.id) > 1 && (
                          <button
                            className="mx-3 p-1 h-7 bg-basic w-7 flex items-end justify-center rounded-full text-2xl"
                            onClick={() =>
                              dispatch({
                                type: "DECRESS-PRODUCT",
                                payload: product,
                              })
                            }
                          >
                            <HiMinus size={17} />
                          </button>
                        )}
                        {quantityCountProduct(state, product.id) > 0 && (
                          <span className="text-[#414040]">
                            {quantityCountProduct(state, product.id)}
                          </span>
                        )}
                        {IsInCartProduct(state, product.id) ? (
                          <button
                            onClick={() =>
                              dispatch({
                                type: "INCRESS-PRODUCT",
                                payload: product,
                              })
                            }
                            className="p-1 mx-3 rounded-full flex items-end justify-center bg-basic h-7 w-7"
                          >
                            <HiPlus />
                          </button>
                        ) : (
                          <button
                            className="text-[#717171] text-sm"
                            onClick={() =>
                              dispatch({
                                type: "ADD_ITEMS-PRODUCT",
                                payload: product,
                              })
                            }
                          >
                            اضافه به سبد خرید
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                : []}
            </section>
          </div>
          <FilterProduct />
        </div>
      </div>
    </>
  );
};

export default Product;
