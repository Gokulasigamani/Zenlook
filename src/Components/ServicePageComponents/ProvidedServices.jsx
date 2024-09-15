import React from "react";

const ProvidedServices = ({ imageSrc, title, des, reverse }) => {
  return (

      <div className={`flex relative h-[85vh] ${reverse ? "" : "flex-row-reverse" }`}>

        {

          reverse ? <div className="absolute top-[29%] left-[200px] rounded-[100px] rotate-1 blur-[90px] transform -translate-x-56 -translate-y-24 bg-gradient-to-r from from-[#00c3ffdb] to-[#FF29C3] h-[350px] w-[600px]"></div> 

          : <div className="absolute top-[29%] right-[-290px] rounded-[100px] rotate-1 blur-[90px] transform -translate-x-56 -translate-y-24 bg-gradient-to-r from from-[#00c3ffdb] to-[#FF29C3] h-[330px] w-[600px]"></div>
        
        }

        <div className={`w-1/2 relative z-10 flex ${reverse ? "justify-start" : "justify-end"}`}>
          <img src={imageSrc} alt={title} className="w-[610px] h-[492px]" />
        </div>

        <div className="w-1/2 relative z-10 px-[80px] mt-10 ml-12  text-white">
          <h2 className="text-[40px] font-poppins font-bold bg-gradient-to-r from-[#FF29C3] to-[#F5D3F4] text-transparent bg-clip-text">{title}</h2>
          <p className="text-[24px] font-poppins font-normal text-[#F2F2F285] mt-[60px]">{des}</p>
        </div>

      </div>

  
  );
};

export default ProvidedServices;
