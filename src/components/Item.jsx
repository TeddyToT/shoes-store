import React, { useState } from "react";



const Item = ({ value }) => {
  const formatNumber = (number) => {
    return new Intl.NumberFormat("de-DE").format(number);
  };
  return (
    <>
      <div
        className={`w-ful border border-gray-400 bg-white rounded-lg p-4 group   duration-200 cursor-pointer`}
      >
        <div className="relative w-full flex items-center justify-center border border-gray-300 rounded-lg mb-5 p-5">
          <img
            src={value.image}
            alt="item"
            className="w-full scale-125 group-hover:scale-150  duration-300"
          />
        </div>
        <div className="w-full">
          <p className="text-lg  group-hover:text-blue-600 text-left font-bold truncate">
            {value.name}
          </p>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-end gap-1">

                <p className=" text-[#3e3e3e] text-base font-medium group-hover:text-blue-500 ">
                  {formatNumber(value.price)}đ
                </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
