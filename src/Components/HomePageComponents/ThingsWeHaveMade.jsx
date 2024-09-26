import React from "react";
import Title from "../Typography/Title";
import WorksCardsX from "../Cards/WorksCardsX";
import { FcNext, FcPrevious } from "react-icons/fc";
import Marquee from "react-fast-marquee";

export default function ThingsWeHaveMade() {
  const worksCards = new Array(20).fill(0); // Create an array with 20 elements for mapping.

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="rounded-[700px] top-0 left-0 bg-gradient-to-r rotate-90 from-[#00c3ffdb] to-[#FF29C3] absolute h-[500px] w-[500px] blur-[250px] "></div>
      <Title title={"Things We've Made"} miniTitle={"Work"} />
      <p className="text-[rgb(187,187,187)] font-thin text-base md:text-xl font-poppins p-5 md:max-w-[33%] text-center pt-4 tracking-wide">
        We help our clients grow their bottom-line with clear and professional
        websites.
      </p>
      <div className="pt-16 z-10 w-full">
        <Marquee gradient={false} speed={50} pauseOnHover={false}>
          <div className="flex flex-col space-y-8">
            {/* First row */}
            <div className="flex justify-center space-x-4">
              {worksCards.slice(0, 10).map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 mx-4 ${
                    index % 4 === 0 || index % 4 === 2 ? "md:pt-24" : "pt-0"
                  }`}
                >
                  <WorksCardsX />
                </div>
              ))}
            </div>

            {/* Second row */}
            <div className="flex justify-center space-x-4">
              {worksCards.slice(10, 20).map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 mx-4 ${
                    index % 4 === 0 || index % 4 === 2 ? "md:pt-24" : "pt-0"
                  }`}
                >
                  <WorksCardsX />
                </div>
              ))}
            </div>
          </div>
        </Marquee>
      </div>
{/* 
      <div className="flex p-10 text-4xl text-white items-center pt-28">
        <FcPrevious className="border border-white rounded-full w-12 h-12 p-2" />
        <p className="text-sm px-4 tracking-[1px] font-poppins leading-8 ">
          1 / 3
        </p>
        <FcNext className="border border-white rounded-full w-12 h-12 p-2" />
      </div> */}
    </div>
  );
}
