import React from "react";

const page = () => {
  return (
    <section className="bg-white w-1/3 my-20 px-10 py-8 mx-auto rounded-lg shadow-[2px_2px_30px_3px_rgba(0,0,0,0.1)]">
      {/* <div className="after:flex">
          <h1 className="before:flex before:items-center before:w-[200px] before:border-b before:border-basic"></h1>
        </div> */}
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
              type="text"
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
        <button className="w-[25%] mx-1 bg-basic text-white rounded-full p-2 my-10">
          ورود
        </button>
      </div>
    </section>
  );
};

export default page;
