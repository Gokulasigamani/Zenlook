import React from 'react'
import ContactForm from './From/ContactForm'
import zig from "../icons/zig-zag.png"
import circle from "../icons/circle.png"
import add from "../icons/add.png"
export default function ContactFormSection() {
  return (
    <div className='flex flex-col justify-center items-center my-20 w-full relative'>
      <p className="inline-block max-w-[60%] text-center font-semibold text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-[#F9B5FB]  to-[#921196]">
      Fill out our online form and one of our customer support representatives will get back to you as soon as possible.</p>
      <ContactForm/>
      <img src={zig} alt='zig' className='absolute top-1/2 left-20'/>
      <img src={circle} alt='circle' className='absolute top-3/4 left-3/4'/>
      <img src={add} alt='add' className='absolute top-1/4 left-3/4'/>
      <img src={circle} alt='circle' className='absolute top-[90%] left-20'/>
      <div className="absolute top-1/2 left-3/4 transform rotate-90 bg-gradient-to-r from-[#00c3ffdb] to-[#FF29C3] h-60 w-60 blur-[160px]"></div>
      <div className="absolute top-1/4 left-40 transform rotate-90 bg-gradient-to-r from-[#00c3ffdb] to-[#FF29C3] h-60 w-60 blur-[190px]"></div>

    </div>
  )
}
