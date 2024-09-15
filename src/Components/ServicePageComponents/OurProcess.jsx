import React from "react";
import ProcessCard from "../Cards/ProcessCard";
import img1 from "../images/process-img-1.png";
import img2 from "../images/process-img-2.png";
import img3 from "../images/process-img-3.png";

export default function OurProcess() {
  const processes = [
    {
      img: img1,
      title: "Understanding/ Developing Strategy",
    },
    {
      img: img2,
      title: "Design & Website Development",
    },
    {
      img: img3,
      title: "Automated Testing & Support",
    },
  ];
  return (
    <div className="flex flex-col my-28 items-center justify-center text-center gap-24 h-[70vh] w-full ">
      <p className=" text-center tracking-wider  font-semibold text-[50px] bg-clip-text text-transparent bg-gradient-to-r from-[#F9B5FB]  to-[#921196]">
        Our process
      </p>
   
      <div className="w-full flex justify-between items-center relative">
      {processes.map((data,index)=>(
        <ProcessCard title={data.title} img={data.img} key={index}/>
      ))}
      </div>
    </div>
  );
}
