import React from 'react';
import { useState } from "react";
import { useRouter } from "next/navigation";
const FilterPrice = () => {
    const router = useRouter();

    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    const searchHandler = () => {
      if (min && max) {
        router.push(`/filter/${min}/${max}`);
      } else {
        alert("Please Enter minimum and maximum price!");
      }
    };
  
    return (
        <ul className="mt-4 trantransition-all ease-in duration-75">
            <li className="flex flex-row-reverse mt-2">
              <input type="checkbox" />
              <span className="mr-1">300,000</span>
            </li>
            <li className="flex flex-row-reverse mt-2">
              <input type="checkbox" />
              <span className="mr-1">500,000</span>
            </li>
            <li className="flex flex-row-reverse mt-2">
              <input type="checkbox" />
              <span className="mr-1">1000,000</span>
            </li>
          </ul>
    );
};

export default FilterPrice;