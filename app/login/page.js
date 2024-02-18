"use client";
import React from "react";
import { loginHandler } from "../api/login";
import { useState } from "react";
import Link from "next/link";
const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [warn, setWarning] = useState("");
  const token = localStorage.getItem("token");
  localStorage.setItem("isActive", isLoggedin);
 
  return (
    <section className="bg-white w-1/3 my-20 px-10 py-8 mx-auto rounded-lg shadow-[2px_2px_30px_3px_rgba(0,0,0,0.1)]">
   <div className="flex items-center flex-row-reverse text-[#6d6d6d] text-lg font-bold">
            <Link href="/signup" className="px-2">
              {" "}
                   ثبت نام
            </Link>
            <span className="text-xl">|</span>
            <Link href="/login" className="px-2 text-basic">ورود</Link>
          </div>
      <div className="mx-auto">
        <div className="mt-8 px-1 w-full">
          <div className="flex flex-col">
            <label className="mr-4 mb-2">
              <div className="flex justify-end">
                <p className="text-basic">*</p>
                <lable>تلفن همراه</lable>
              </div>
            </label>
            <input
              type="email"
              className="w-full h-[45px] pr-5 text-right rounded-full overflow-hidden focus:border focus:border-basic border outline-none"
            />
          </div>
        </div>

        <div className="flex h-auto items-center mt-8 flex-row-reverse justify-between overflow-hidden">
          <div className="w-full flex flex-col mx-1">
            <label className="mr-4 mb-2">
              <div className="flex justify-end">
                <p className="text-basic">*</p>
                <lable>رمز عبور</lable>
              </div>
            </label>
            <div className="">
              <input
                name="password"
                type="password"
                className="w-full h-[45px] pr-5 text-right rounded-full overflow-hidden focus:border focus:border-basic border outline-none"
              />
            </div>
          </div>
        </div>
        <button onClick={loginHandler} className="w-[25%] mx-1 bg-basic text-white rounded-full p-2 my-10">
          ورود
        </button>
      </div>
    </section>
  );
};

export default page;
