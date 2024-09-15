import React from 'react'

const ServiceGradient = () => {
  return (
    <div>
        <div className='absolute top-1/2 left-[230px] rounded-[100px] rotate-1 blur-[80px] transform -translate-x-56 -translate-y-24 bg-gradient-to-r from from-[#00c3ffdb] to-[#FF29C3] h-[350px] w-[600px]'></div>
        <div className='absolute top-1/2 mt-14 right-[-90px] rounded-[100px] rotate-1 blur-[120px] transform -translate-x-56 -translate-y-24 bg-gradient-to-r from from-[#00C2FF] to-[#FF29C3] h-[180px] w-[230px]'></div>
        <div className='absolute blur-[10px] opacity-75 rounded-[100px] bg-gradient-to-r from-purple-500 to-pink-500 w-24 h-24 top-[20%] right-[57%]'></div>
        <div className='bg-yellow-500 w-10 h-10 absolute rounded-full blur-[2px] top-[45%] right-[770px]'></div>
        <div className='top-[80%] left-[600px] bg-orange-600 w-[32px] h-[32px] absolute rounded-full blur-[2px]'></div>
    </div>
  )
}

export default ServiceGradient