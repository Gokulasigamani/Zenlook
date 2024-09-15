import React from "react";
import SessionCards from "../Cards/SessionCards";
import icon from "../icons/up-right.png";
import SessionGradient from "../gradientBg/SessionGradient";
import clip1 from '../icons/Clip-img1png.png'
import clip2 from '../icons/Clip-img2.png'
import connect1 from '../images/connect-1.png'
import connect2 from '../images/connect-2.png'

const Sessions = () => {
  const SessionDetails = [
    {
      title: "Instagram marketing consultation",
    },
    {
      title:
        "Build Your Shopify Store and Master Client Acquisition: Inbound & Outbound Strategies",
    },
    {
      title:
        "Launch Your Online Store in Minutes: Quick and Easy No-Code Setup with Shopify",
    },
    {
      title: "Consultation for building online presence",
    },
    {
      title: " Freelancing Consultation",
    },
  ];

  return (
    <div className="w-full h-[100vh] relative flex py-3">

        <SessionGradient/>

      {/* left-content */}
      <div className="w-1/2 relative z-10">
        <img src={clip1} alt="" className="absolute right-0 top-2 opacity-[20%]"/>
        <img src={clip2} alt="" className="absolute left-[195px] top-[65px] "/>
        <img src={connect1} alt="" className="absolute w-[348px] h-[447px] left-[140px] top-[150px]"/>
        <img src={connect2} alt="" className="absolute w-[248px] h-[349px] left-[280px] bottom-[0px]"/>
      </div>

      {/* right-content */}
      <div className="w-1/2 relative z-10">
        <h1 className="text-[#8A898E] text-center opacity-[63%] tracking-[0.5rem] text-[24px] font-poppins font-thin">
          Sessions
        </h1>

        <h1 className="text-[40px] text-center font-semibold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#F9B5FB] via-[#F9B5FB] to-[#921196]">
          Connect 1:1 Session with us
        </h1>

        {/* Card Maps */}
        <div className="mt-4 space-y-4 flex flex-col items-center mr ">
          {SessionDetails.map((session, index) => (
            <SessionCards key={index} index={index + 1} title={session.title} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex mt-10 w-[450px] mx-auto justify-between">

            {/* button 1 */}
            <button className="w-[180px] h-[61px] rounded-[8px] bg-gradient-to-tr from-white to-purple-700 text-white p-[1.5px]">
                <div className="rounded-[8px] bg-[#111C3C] w-full h-full flex items-center justify-center font-poppins font-normal text-[16px]">
                    Know More
                </div>
            </button>

            {/* button 1 */}
            <button className="w-[180px] h-[61px] rounded-[8px] bg-gradient-to-bl from-[#FFFFFF90] to-[#8222D690] text-white p-[1.5px]">
                <div className="rounded-[8px] bg-gradient-to-r from-[#FFFFFF90] to-[#8222D6] w-full h-full flex items-center justify-center font-poppins font-normal text-[16px]">
                    Book Now
                    <img src={icon} alt="upright-arrow" className="w-[42px] h-[42px] ml-2"/>
                </div>
            </button>


        </div>

      </div>

    </div>
  );
};

export default Sessions;
