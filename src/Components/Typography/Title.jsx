import React from "react";

export default function Title({ title, miniTitle }) {
  return (
    <div className="flex gap-2 flex-col items-center font-poppins">
      <h1 className=" text-gray-400 uppercase tracking-[8px] text-[24px] font-thin font-poppins">
        {miniTitle}
      </h1>
      <p className="inline-block font-semibold text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-[#F9B5FB]  to-[#921196]">
        {title}
      </p>
    </div>
  );
}
