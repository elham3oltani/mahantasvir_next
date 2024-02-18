import React from "react";
import quality from "../../../public/images/quality.png";
import guarantee from "../../../public/images/guarantee.png";
import money from "../../../public/images/money.png";
import Image from "next/image";
const ProductDetailItem = (props) => {
  const dataProductItem = props.data["product_attribute"];

  let data = dataProductItem?.map((item) => {
    const getFiles = { attribute: item?.attribute, value: item?.value };
    return getFiles || {};
  });
  const threeItem=data.slice(0,5)
  console.log(data);
  return (
    <>
      <div className="mt-4">
        <h1 className="font-bold text-right text-xl"> : ویژگی ها</h1>
        {threeItem.map((item) => (
          <div key={item.id} className="">
            <div className="my-2 mr-6 flex-row-reverse flex items-center text-[#414141] text-right">
              <span className="text-silver mt-2 text-[16px]">
                {" "}
                : {item?.attribute}
              </span>
              <span className="font-bold block mt-2 mr-2"> {item?.value} </span>
            </div>
          </div>
        ))}
        <div className="border-t flex justify-between items-center px-2 py-1">
          <div className="text-[12px] flex items-center">
            <Image src={quality} height={30} width={30} />
            <span className="ml-1">تضمین کیفیت</span>
          </div>
          <div className="text-[12px] flex items-center">
            <Image src={guarantee} height={30} width={30} />
            <span className="ml-1">گارانتی</span>
          </div>
          <div className="text-[12px] flex items-center">
            <Image src={money} height={30} width={30} />
            <span className="ml-1">قیمت مناسب</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailItem;
