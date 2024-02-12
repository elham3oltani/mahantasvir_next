'use client'

import React from 'react';

import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
const FilterProduct = () => {
    const [isOpenBrand, setIsOpenBrand] = useState(false);
    const [isOpenPrice, setIsOpenPrice] = useState(false);
    const [isOpenModel, setIsModel] = useState(false);
    const [isOpenView, setIsView] = useState(false);
    return (
        <section className="w-[25%] mt-10 ml-10 ">
        <div className="border border-[#ece3e3] outline-none rounded-md px-4 py-3">
          <div className="flex justify-between flex-row-reverse items-center">
            <span>بر اساس قیمت</span>
            <IoIosArrowDown
              onClick={() => setIsOpenPrice(!isOpenPrice)}
              size={20}
              className="text-basic"
            />
          </div>
          {isOpenPrice ? (
            <ul className="mt-4 trantransition-all ease-in duration-75">
              <li className="flex flex-row-reverse mt-2">
                <input type="checkbox" />
                <span className="mr-1">hikevision</span>
              </li>
              <li className="flex flex-row-reverse mt-2">
                <input type="checkbox" />
                <span className="mr-1">fonix</span>
              </li>
              <li className="flex flex-row-reverse mt-2">
                <input type="checkbox" />
                <span className="mr-1">smart</span>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>

        <div className="border border-[#ece3e3] outline-none rounded-md px-4 py-3 mt-4">
          <div className="flex justify-between flex-row-reverse items-center">
            <span> بر اساس برند</span>
            <IoIosArrowDown
              onClick={() => setIsOpenBrand(!isOpenBrand)}
              size={20}
              className="text-basic"
            />
          </div>
          {isOpenBrand ? (
            <ul className="mt-4 trantransition-all ease-in duration-75">
              <li className="flex flex-row-reverse mt-2">
                <input type="checkbox" />
                <span className="mr-1">hikevision</span>
              </li>
              <li className="flex flex-row-reverse mt-2">
                <input type="checkbox" />
                <span className="mr-1">fonix</span>
              </li>
              <li className="flex flex-row-reverse mt-2">
                <input type="checkbox" />
                <span className="mr-1">smart</span>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>

        <div className="border border-[#ece3e3] outline-none rounded-md px-4 py-3 mt-4">
          <div className="flex justify-between flex-row-reverse items-center">
            <span> بر اساس مدل</span>
            <IoIosArrowDown
              onClick={() => setIsModel(!isOpenModel)}
              size={20}
              className="text-basic"
            />
          </div>
          {isOpenModel ? (
            <ul className="mt-4 trantransition-all ease-in duration-75">
              <li className="flex flex-row-reverse mt-2">
                <input type="checkbox" />
                <span className="mr-1">hikevision</span>
              </li>
              <li className="flex flex-row-reverse mt-2">
                <input type="checkbox" />
                <span className="mr-1">fonix</span>
              </li>
              <li className="flex flex-row-reverse mt-2">
                <input type="checkbox" />
                <span className="mr-1">smart</span>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>

        <div className="border border-[#ece3e3] outline-none rounded-md px-4 py-3 mt-4">
          <div className="flex justify-between flex-row-reverse items-center">
            <span> دید در شب</span>
            <IoIosArrowDown
              onClick={() => setIsView(!isOpenView)}
              size={20}
              className="text-basic"
            />
          </div>
          {isOpenView ? (
            <ul className="mt-4 trantransition-all ease-in duration-75">
              <li className="flex flex-row-reverse mt-2">
                <input type="checkbox" />
                <span className="mr-1">hikevision</span>
              </li>
              <li className="flex flex-row-reverse mt-2">
                <input type="checkbox" />
                <span className="mr-1">fonix</span>
              </li>
              <li className="flex flex-row-reverse mt-2">
                <input type="checkbox" />
                <span className="mr-1">smart</span>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
        <button className='bg-basic rounded-full border-none text-white w-full py-2 mt-4'>حذف فیلتر ها</button>
      </section>
    );
};

export default FilterProduct;