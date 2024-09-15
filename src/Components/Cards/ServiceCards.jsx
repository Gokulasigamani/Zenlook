import React from "react";

export default function ServiceCards({ icon, title, des }) {
  return (
    <div className="bg-[#68686840] w-[540px] h-min-[124px] h-max-[150px] py-2.5 rounded-xl flex">
      {/* left-content */}
      <div className="w-[180px] h-full flex items-center my-auto justify-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#00C2FF4D] to-[#FF29C3C7] flex items-center justify-center px-5 ">
          <img src={icon} alt="icon" width={55} className="" />
        </div>
      </div>

      {/* right-content */}
      <div className="flex flex-col w-[400px] h-full justify-center items-start pr-10">
        <h1 className="text-white text-[20px] font-medium font-poppins text-lg">
          {title}
        </h1>
        <p className="text-[#EAE9EE] text-[16px] font-extralight font-poppins opacity-[50%] mt-2">
          {des}
        </p>
      </div>
    </div>
  );
}
