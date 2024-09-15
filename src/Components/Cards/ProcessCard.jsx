import React from "react";

export default function ProcessCard({ img, title }) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-20">
      <div className="w-[162px] h-[162px] bg-[#202020]  rounded-full font-poppins shadow-inner shadow-white/10 ">
        {" "}
        <img src={img} alt={title} className="w-full object-cover p-10" />
      </div>
      <p className="text-white text-3xl max-w-72"> {title}</p>
    </div>
  );
}
