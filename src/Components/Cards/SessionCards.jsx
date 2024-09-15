import React from 'react';

const SessionCards = ({ index, title }) => {
  return (
    <div className='flex justify-start items-center w-[450px] border-[1px] border-[#68686842] backdrop-blur-sm bg-[#12153399] px-4 py-3 rounded-sm'>
        
    <div className="w-[15%] h-full flex items-center my-auto justify-center">
      <div className='flex justify-center items-center w-[45px] h-[46px] border-white border-[2px] rounded-full'>
        <span className='text-white text-[16px] font-normal'>{index}</span>
      </div>
    </div>

      <div className='w-[85%] px-[11px]'>
        <h2 className='text-white stroke-black stroke-[1px] tracking-widest font-poppins text-[14px] font-[20]'>{title}</h2>
      </div>
    </div>
  );
};

export default SessionCards;
