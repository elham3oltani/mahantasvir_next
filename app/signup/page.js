"use client";
import { useState } from "react";
import React from "react";
// import { AiOutlineUserAdd, AiOutlineNumber } from "react-icons/ai";
// import { GiConfirmed } from "react-icons/gi";
// import { MdOutlineAlternateEmail, MdOutlinePassword } from "react-icons/md";
const page = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [meterMob, setMeterMob] = useState(false);
  const [meterEmial, setMeterEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [name, setName] = useState("");
  const [meterPass, setMeterPass] = useState(false);
  const [meterUser, setMeterUser] = useState(false);
  let stringpattern = /(\+?98|098|0|0098)?(9\d{9})/;
  const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
  const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
  const sixChars = /.{6,}/g; // six characters or more
  const atLeastOneUpperCase = /[A-Z]/g;
  const specialCharacter = /[!@#%&]/g;
  const userRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  const passwordTracker = {
    lowercase: password.match(atLeastOneLowercase),
    number: password.match(atLeastOneNumeric),
    sixCharsOrGreater: password.match(sixChars),
    specialCharacter: password.match(specialCharacter),
    atLeastOneUpperCase: password.match(atLeastOneUpperCase),
  };
  const emailTracker = {
    email: email.match(emailRegx),
  };
  const mobileTracker = {
    NumMobile: mobile.match(stringpattern),
  };
  const userTracker = {
    name: name.match(userRegex),
  };
  return (
    <>
      <section className="bg-white lg:w-1/2 xl:w-1/3 md:w-1/2 px-4 py-8 mx-4 md:mx-auto xl:mx-auto lg:mx-auto my-10 rounded-lg shadow-[2px_2px_30px_3px_rgba(0,0,0,0.1)] ">
        <div className="after:flex">
          {/* <h1 className="before:flex before:items-center before:w-[200px] before:border-b before:border-basic">
        
          </h1> */}
        </div>
        <div className="mx-auto">
          <div className="mt-8 px-1">
            <div className="flex flex-col">
              <label className="mr-4 mb-2">
                <div className="flex justify-end">
                  <p className="text-basic">*</p>
                  <lable>نام کاربری</lable>
                </div>
              </label>
              <input
                name="name"
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setMeterUser(true)}
                value={name}
                type="text"
                className="w-full h-[45px] pr-5 text-right rounded-full overflow-hidden focus:border focus:border-basic border outline-none"
              />
            </div>
            {meterUser && (
              <p className="text-right mr-4 mt-1 text-sm text-basic">
                {!userTracker.name && "نام کاربری بین 8 تا 20 کاراکتر"}
              </p>
            )}
          </div>

          <div className="mt-8 px-1">
            <div className="flex flex-col">
              <label className="mr-4 mb-2">
                <div className="flex justify-end">
                  <p className="text-basic">*</p>
                  <lable>تلفن همراه</lable>
                </div>
              </label>
              <input
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
                onFocus={() => setMeterMob(true)}
                type="text"
                className="w-full h-[45px] pr-5 text-right rounded-full overflow-hidden focus:border focus:border-basic border outline-none"
              />
            </div>
            {meterMob && (
              <div className="text-red mr-4 mt-1 text-basic text-right text-sm">
                {!mobileTracker.NumMobile && "شماره تلفن با ۹ شروع شود"}
              </div>
            )}
          </div>

          <div className="mt-8 px-1">
            <div className="flex flex-col">
              <label className="mr-4 mb-2">
                <div className="flex justify-end">
                  <p className="text-basic">*</p>
                  <lable>ایمیل</lable>
                </div>
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setMeterEmail(true)}
                name="email"
                value={email}
                className="w-full h-[45px] pr-5 text-right rounded-full autofill:bg-white overflow-hidden ring-0 focus:border focus:border-basic border outline-none"
              />
            </div>
            {meterEmial && (
              <p className="text-right text-sm mr-4 mt-1 text-basic text-red">
                {!emailTracker.email && "ایمیل نامعتبر"}
              </p>
            )}
          </div>

          <div className="px-1 flex-col h-auto items-center mt-8 lg:flex lg:flex-row-reverse justify-between overflow-hidden">
            <div className="lg:w-1/2 w-full flex flex-col mx-1">
              <label className="mr-4 mb-2">
                <div className="flex justify-end">
                  <p className="text-basic">*</p>
                  <lable>رمز عبور</lable>
                </div>
              </label>
              <div className="">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  onFocus={() => setMeterPass(true)}
                  value={password}
                  type="password"
                  className="w-full h-[45px] pr-5 text-right rounded-full overflow-hidden focus:border focus:border-basic border outline-none"
                />
                {meterPass && (
                  <div className="text-basic mr-4 text-right text-sm">
                    {!passwordTracker.sixCharsOrGreater &&
                      " پسورد شامل 6 کاراکتر،"}
                    {!passwordTracker.lowercase && "حروف کوچیک "}
                    {!passwordTracker.atLeastOneUpperCase && "و حروف بزرگ "}
                    {!passwordTracker.number && "عدد،"}
                    {!passwordTracker.specialCharacter && "  و کاراکتر خاص"}
                  </div>
                )}
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-1 xl:mt-0 lg:mt-0 mt-8 flex flex-col mx-1">
              <label className="mr-4 mb-2">
                <div className="flex justify-end">
                  <p className="text-basic">*</p>
                  <lable>تایید رمز عبور</lable>
                </div>
              </label>
              <div className="">
                <input
                  value={password_confirmation}
                  name="password_confirmation"
                  onChange={(e) => setPassword_confirmation(e.target.value)}
                  type="password"
                  className="w-full h-[45px] pr-5 text-right rounded-full overflow-hidden focus:border focus:border-basic border outline-none"
                />
              </div>
            </div>
          </div>
          <button className="w-[25%] ml-3 bg-basic text-white rounded-full p-2 my-6">
            ثبت نام
          </button>
        </div>
      </section>
    </>
  );
};

export default page;
