import React from "react";
import icon from "../icons/up-right.png";

export default function Button({ title }) {
  return (
    <div className=" relative p-0.5 flex items-center justify-center shadow-lg max-w-[358px] rounded-[70px] bg-gradient-to-tr from-white to-purple-700 ">
      <button className="px-16 py-[18px] text-3xl  bg-[#232031] justify-center gap-3 rounded-[150px] text-white flex">
        {" "}
        {title}
        <img src={icon} alt="upright-arrow" />
      </button>
    </div>
  );
}
