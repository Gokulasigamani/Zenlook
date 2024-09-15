import React from "react";
import Title from "../Typography/Title";
import img from '../images/services-img.png'
import ServiceGradient from "../gradientBg/ServiceGradient";
import ServiceCards from "../Cards/ServiceCards";
import ideaSharingIcon from '../icons/idea-sharing.png'
import ideaIcon from '../icons/idea.png'
import goalIcon from '../icons/goal.png'

export default function Services() {
  const services = [
    {
      icon: ideaSharingIcon,
      title: "Solutions Uniquely Crafted for Your Business Needs",
      des: "We tailor solutions to fit your business, ensuring relevance and success.",
    },
    {
      icon: ideaIcon,
      title: "Creative Excellence Elevates Every Endeavor",
      des: "Our work is fueled by creative excellence, from concept to execution, delivering exceptional results every time.",
    },
    {
      icon: goalIcon,
      title: "Our primary focus is client satisfaction.",
      des: "Our top priority is your satisfaction, and we work diligently to ensure you are delighted with the results we achieve together",
    },
  ];

  return (
    <div className="w-full flex pt-5 h-[100vh] relative">
      <ServiceGradient />

      {/* Image */}
      <div className="relative flex items-center z-10 mt-20 w-1/2">
        <img src={img} alt="service_img" className="h-[530px] w-[620px]" />
      </div>

      {/* right-content */}
      <div className="relative z-10 w-1/2 pl-20 pr-40">
        <h1 className="text-[#8A898E] opacity-[63%] uppercase tracking-widest text-[24px] font-poppins font-thin">
          Why choose us?
        </h1>

        <h1 className="text-[40px] font-semibold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#D730DD] to-[#EFEFEF]">
          We offer best services
        </h1>

        <p className="text-[16px] mt-4 tracking-wider opacity-[50%] font-thin font-poppins text-[#FBFBFB]">
          From Zero to Hero transform your business with our proven digital
          marketing strategies
        </p>

        <div className="mt-6 space-y-2">
          {services.map((service, index) => (
            <ServiceCards
              key={index}
              icon={service.icon}
              title={service.title}
              des={service.des}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
