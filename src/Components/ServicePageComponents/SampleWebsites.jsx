import React from "react";
import icon from "../icons/up-right.png";

function SampleWebsites() {
  return (
    <div className="h-screen">
      <div className="h-2/4 flex flex-col items-center">
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d97] to-[#ff6ac4] text-5xl font-bold mb-24">
          Our Awesome Websites
        </h2>
      </div>
      <div class="bg-transparent flex flex-col items-center justify-center gap-10 h-2/4">
        <div class="text-center">
          <h1 class="text-5xl font-medium font-poppins text-[rgba(255,255,255,.5)]">
            Contact us for the service you <br /> want to use
          </h1>
        </div>
        <button className="px-8 py-3 text-2xl font-poppins border-2 justify-center gap-2 rounded-full flex text-[rgba(255,255,255,.5)] outline-[rgba(255,255,255,.5)]">
          Contact us
          <img src={icon} alt="upright-arrow" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default SampleWebsites;
