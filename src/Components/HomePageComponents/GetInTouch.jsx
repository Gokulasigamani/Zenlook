import React from "react";
import Button from "../Button/Button";

export default function GetInTouch() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mb-20 relative ">
      <div className="rounded-[100px] top-0 left-3/4 bg-gradient-to-r rotate-90 from-[#00c3ffdb] to-[#FF29C3] absolute h-96 w-96 blur-[290px] z-0"></div>

      <h3 className="bg-clip-text  z-10 text-[36px] font-poppins font-medium max-w-[70%] tracking-normal leading-normal text-center text-2xl mt-5 text-transparent bg-gradient-to-r from-[#F9B5FB]  to-[#921196]">
        Don’t feel hesitate to contact us. We’d be thrilled to take a Journey
        with you!
      </h3>
      <Button title={"Get In Touch"} />
    </div>
  );
}
