import React from 'react';

const FooterGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-950">
      <div className="absolute top-[-25%] left-[-25%] transform rotate-90 bg-gradient-to-r from-[#00c3ffdb] to-[#FF29C3] h-96 w-96 blur-[130px]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#00c3ff] to-[#FF29C3] h-[400px] w-[400px] blur-[80px] rotate-45"></div>
      <div className="absolute top-[20%] left-[55%] bg-gradient-to-r from-purple-500 to-pink-500 w-24 h-24 blur-[10px]"></div>
      <div className="absolute top-[10%] left-[10%] bg-yellow-500 w-10 h-10 rounded-full blur-[2px]"></div>
      <div className="absolute top-[80%] left-[80%] bg-orange-600 w-10 h-10 rounded-full blur-[5px]"></div>
    </div>
  );
};

export default FooterGradient;
