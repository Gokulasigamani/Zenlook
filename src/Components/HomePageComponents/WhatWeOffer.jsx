import React from "react";
import Title from "../Typography/Title";
import WhatWeOfferCard from "../Cards/WhatWeOfferCard";
import arrowImage from "../images/shaped-arrow.png";
import ideaImage from "../images/idea-img.png";

export default function WhatWeOffer() {
  const ServicesDataList = [
    {
      name: "Website Development",
      decs: "Crafting visually stunning, responsive websites tailored to your brand, ensuring a seamless user experience across all devices",
    },
    {
      name: "Influencer marketing",
      decs: "Empowering your business with robust e-commerce solutions, from product listings to secure checkout, designed to drive sales and enhance customer satisfaction.",
    },
    {
      name: "Ecommerce services",
      decs: "Amplify your brand’s reach with targeted influencer partnerships, creating authentic connections that resonate with your audience and boost engagement.",
    },
  ];

  return (
    <div className="flex flex-col my-20 justify-center items-center relative">
      <Title title={"What we offer"} miniTitle={"services"} />

      {/* Horizontal scrollable container */}
      <div className="flex overflow-x-auto gap-5 px-5 py-10 md:p-10 no-scrollbar w-full">
        {ServicesDataList.map((data, index) => (
          <WhatWeOfferCard
            ServiceName={data.name}
            ServiceInfo={data.decs}
            key={index}
          />
        ))}
      </div>

      {/* Gradient */}
      <div className="rounded-[100px] top-1/2 left-[-100px] bg-gradient-to-r rotate-90 from-[#00c3ffdb] to-[#FF29C3] absolute h-72 w-72 blur-[120px] "></div>

      <img src={arrowImage} alt="arrow" className="absolute h-44 md:h-64  top-[-60px] rotate-90 md:rotate-0  md:top-8 left-72 md:left-0" />
      <img src={ideaImage} alt="idea" className="absolute hidden md:block h-60 top-[-80px] left-[82%]" />
    </div>
  );
}
