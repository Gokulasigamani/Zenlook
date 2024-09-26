import React from 'react'
import contactImg from '../images/contact-hero-img.png'
import icon from "../icons/up-right.png";

const ContactHero = () => {
  return (
    <div
        style={{
            width: '100%',
            height: '736px',
            backgroundImage: `url(${contactImg})`,
            backgroundSize: 'cover',
        }}
        className='flex flex-col items-center justify-center text-center font-poppins gap-14'>

        <div className=''>
            <div className="rounded-[100px] top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 bg-gradient-to-r rotate-90 from-[#00c3ffdb] to-[#FF29C3] absolute h-96 w-96 blur-[130px] z-0"></div>
            <div className='absolute blur-[10px] opacity-75 rounded-[100px] bg-gradient-to-r from-purple-500 to-pink-500 w-24 h-24 top-[20%] left-[55%]'></div>
            <div className='bg-yellow-500 top-[46%] left-[670px] w-10 h-10 absolute rounded-full blur-[4px]'></div>
            <div className='top-[80%] left-[800px] bg-orange-600 w-10 h-10 absolute rounded-full blur-[6px]'></div>
        </div>

        <p className='relative max-w-[1066px] font-medium text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-[#D730DD] via-[#F8F8F8]  to-[#F8F8F8]'>At Zenhook, we value your feedback and are always here to help with any questions or concerns. Please reach out to us.</p>
        

        <div className="relative object-scale-down p-0.5 flex items-center justify-center shadow-lg max-w-[358px] rounded-[70px] bg-gradient-to-tr from-white to-purple-700 ">
          <button className="px-16 py-[18px] object-scale-down text-3xl  bg-[#482269] justify-center gap-3 rounded-[150px] text-white flex">
            Contact Us
            <img src={icon} alt="upright-arrow" />
          </button>
        </div>

    </div>
  )
}

export default ContactHero