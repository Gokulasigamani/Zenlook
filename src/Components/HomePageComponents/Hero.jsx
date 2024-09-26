import React from "react";
import img from "../images/hero-img.png";
import Button from "../Button/Button";
import Gradient from "../gradientBg/HeroGradient";

export default function Hero() {
  return (
    <div className="relative text-white flex md:-mt-10 flex-wrap justify-center items-center md:h-[100vh] w-full font-poppins">
      {/* backdrop-blur */}
      <Gradient />

      {/* main-content */}
      <div className="z-10 w-full md:w-1/2  px-4 py-8 md:p-36 gap-10 flex flex-col justify-evenly md:items-start items-center h-full order-2 md:order-1 text-center md:text-left">
        <h1 className="text-[22px] md:text-[40px] opacity-80 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-[#D730DD] leading-normal tracking-normal">
          We accelerate the growth of your startup business
        </h1>
        <p className="text-base md:text-2xl font-thin leading-relaxed tracking-[1px] md:pr-8">
          Our goal is to become a leader at the heart of the creative services
          industry as a digital creator
        </p>
        <Button title={"Get Started"} />
      </div>

      {/* image */}
      <div className="relative md:z-10 w-full md:w-1/2 h-full md:justify-end flex items-center order-1 md:order-2">
      <img 
  src={img} 
  alt="hero_img" 
  className="h-[300px] md:h-[478px] w-full object-cover md:w-[99%] md:rounded-tl-[300px] md:rounded-bl-[300px] rounded-none"
/>

      </div>
    </div>
  );
}
