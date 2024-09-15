import React from 'react'

export default function HeroGradient() {
  return (
    <>
        <div className="rounded-[100px] top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 bg-gradient-to-r rotate-90 from-[#00c3ffdb] to-[#FF29C3] absolute h-96 w-96 blur-[130px] z-0"></div>
        <div className=" rounded-[100px]  top-2/4 left-[940px] transform -translate-x-1/4 -translate-y-1/4 bg-gradient-to-r  from-[#000000] to-[#ff00b7c1] absolute h-[400px] w-[400px] blur-[150px] rotate-45 z-0 overflow-clip"></div>
        <div className='absolute blur-[10px] opacity-75 rounded-[100px] bg-gradient-to-r from-purple-500 to-pink-500 w-24 h-24 top-[20%] left-[55%]'></div>
        <div className='bg-yellow-500 w-10 h-10 absolute rounded-full blur-[2px]'></div>
        <div className='top-[80%] left-[780px] bg-orange-600 w-10 h-10 absolute rounded-full blur-[5px]'></div>

    </>
  )
}
