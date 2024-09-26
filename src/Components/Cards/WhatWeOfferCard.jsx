import React from "react";
import upRight from "../icons/up-right.png";
import "./style.css";

export default function WhatWeOfferCard({ ServiceName, ServiceInfo }) {
  return (
    <div className="flex flex-col min-w-[390px] md:min-w-[416px] border border-neutral-300 h-[508px] rounded-[50px] relative duration parent mx-2">
      {/* top */}
      <div className="border-b font-montserrat border-neutral-300 h-[120px] md:h-[200px] flex justify-center items-center text-[30px] text-white">
        <h1>{ServiceName}</h1>
      </div>
      {/* bottom */}
      <div className="bg-[#c4c4c4] max-h-96 h-[320px] md:h-full  rounded-[50px] mt-24 z-10 flex justify-center items-start text-left text-black p-6 pr-12 child1">
        <p className="font-poppins font-extralight text-neutral-600 text-[22px] md:text-[24px] tracking-wide leading-normal">
          {ServiceInfo}
        </p>
        <div className="rounded-full bg-blue-950 w-28 h-28 flex justify-center items-center absolute top-[375px] md:top-96 left-64 md:left-72 child -rotate-45">
          <img src={upRight} alt="upright" className="w-1/2 h-1/2 rotate-45" />
        </div>
      </div>
      {/* backdrop-shadow */}
      <div className="w-[80%]  top-44 left-[40px] bg-[#757575] h-[200px] rounded-[50px] absolute"></div>
      <div className="w-[90%]  top-48 left-[20px] bg-[#9E9D9D] h-[200px] rounded-[50px] absolute"></div>
    </div>
  );
}
