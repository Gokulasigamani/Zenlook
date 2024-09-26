import React from "react";
import icon from "../icons/up-right.png";
import image1 from "../images/image 28.png";
import image2 from "../images/image 29.png";
import image3 from "../images/image 30.png";
import circle from "../icons/circle.png";
import zig from "../icons/zig-zag.png";
import add from "../icons/add.png"
function SampleWebsites() {
  const images = [image1, image2, image3];

  return (
    <div className="min-h-screen relative">
      <img src={circle} alt="circle" className="absolute left-3/4"></img>
      <img src={zig} alt="circle" className="absolute left-40 top-2/4"></img>

      <div className=" absolute blur-[150px] rotate-12 top-1/4 left-1/4 w-[700px] h-[100px] bg-gradient-to-r from-[#00c3ffdb] to-[#FF29C3]"></div>
      <div className="flex flex-col items-center justify-center  py-16 px-4 h-screen">
        {/* Title */}
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d97] to-[#ff6ac4] text-5xl font-bold mb-12">
          Our Awesome Websites
        </h2>

        {/* Images Container with Staggered Alignment */}
        <div className="flex justify-center space-x-8">
          {/* First Image */}
          <div className="relative">
            <div className="w-[350px] h-[250px] border-[11px] border-gray-500 rounded-lg overflow-hidden">
              <img
                src={images[0]}
                alt="Website 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Second Image slightly below the first */}
          <div className="relative mt-6">
            <div className="w-[350px] h-[250px] border-[11px] border-gray-500 rounded-lg overflow-hidden">
              <img
                src={images[1]}
                alt="Website 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Third Image slightly below the second */}
          <div className="relative mt-12">
            <div className="w-[350px] h-[250px] border-[11px] border-gray-500 rounded-lg overflow-hidden">
              <img
                src={images[2]}
                alt="Website 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex mt-20 items-center space-x-6">
          {/* Left Arrow */}
          <button className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center bg-transparent hover:bg-pink-500 hover:bg-opacity-20 transition-all duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center space-x-2">
            {/* Active dot with gradient */}
            <span className="w-8 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
            {/* Inactive dots */}
            <span className="w-3 h-3 rounded-full bg-gray-500" />
            <span className="w-3 h-3 rounded-full bg-gray-500" />
          </div>

          {/* Right Arrow */}
          <button className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center bg-transparent hover:bg-pink-500 hover:bg-opacity-20 transition-all duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* contactus */}
      <div className="bg-transparent relative  flex flex-col items-center mb-20 justify-center gap-10 h-[70vh] bg-gradient-to-r from-[#e341e006] to-[#c750c531]">
        <img src={circle} alt="circle" className="absolute left-40 "></img>{" "}
        <img src={circle} alt="circle" className="absolute left-[90%] top-10 "></img>
        <img src={zig} alt="circle" className="absolute left-[90%] top-3/4"></img>
        <img src={add} alt="circle" className="absolute left-[95%] top-2/4"></img>
        <img src={add} alt="circle" className="absolute left-[10%] top-10 rotate-12"></img>
        <img src={add} alt="circle" className="absolute left-[26%] top-3/4"></img>

        <div className="text-center">
          <h1 className="text-5xl font-medium font-poppins text-[rgba(255,255,255,.5)]">
            Contact us for the service you <br /> want to use
          </h1>
        </div>
        <button className="px-8 py-3 text-2xl font-poppins border-2 items-center justify-center gap-2 rounded-full flex text-[rgba(255,255,255,.5)] outline-[rgba(255,255,255,.5)]">
          Contact us
          <img src={icon} alt="upright-arrow" className="w-6 h-6 " />
        </button>
      </div>
    </div>
  );
}

export default SampleWebsites;
