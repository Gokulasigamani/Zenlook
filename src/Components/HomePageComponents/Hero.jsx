import React from "react";
import img from "../images/hero-img.png";
import Button from "../Button/Button";
import Gradient from "../gradientBg/HeroGradient";

export default function Hero() {
  return (
    <div className="relative text-white flex justify-center items-center h-[100vh] w-full font-poppins">
      {/* backdrop-blur */}
    <Gradient/>

      {/* main-content */}
      <div className="relative z-10 w-1/2 p-36 pl-20 gap-10 flex flex-col justify-evenly h-full">
        <h1 className="text-[40px] opacity-80 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-[#D730DD] leading-normal tracking-normal">
          We accelerate the growth of your startup business
        </h1>
        <p className="text-2xl font-thin leading-relaxed tracking-[1px] pr-8">
          Our goal is to become a leader at the heart of the creative services
          industry as a digital creator
        </p>
        <Button title={"Get Started"} />
      </div>

      {/* image */}
      <div className="relative z-10 w-1/2 h-full justify-end flex items-center">
        <img src={img} alt="hero_img" className="h-[478px]" />
      </div>
      
    </div>
  );
}
