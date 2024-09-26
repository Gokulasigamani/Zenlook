import React from "react";
import icon from "../icons/up-right.png";

export default function Button({ title }) {
  return (
    <div className=" relative p-0.5 flex items-center justify-center shadow-lg md:max-w-[358px] max-w-[250px] rounded-lg md:rounded-[70px] bg-gradient-to-tr from-white to-purple-700 ">
      <button className=" md:px-16 px-8 py-[12px] md:py-[18px] text-xl md:text-3xl text-center items-center  bg-[#232031] justify-center gap-3 md:rounded-[150px] rounded-lg text-white flex">
        {" "}
        {title}
        <img src={icon} alt="upright-arrow" />
      </button>
    </div>
  );
}
