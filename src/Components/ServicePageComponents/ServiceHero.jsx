import React from 'react'
import bgImg from "../images/services-hero-img.png"
import Button from '../Button/Button'
import HeroGradient from '../gradientBg/HeroGradient'

export default function ServiceHero() {
  return (
    <div 
      style={{ 
        width: '100%', 
        height: '98vh', 
        backgroundImage: `url(${bgImg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
      className='flex flex-col items-center justify-center text-center gap-14 font-poppins'
    >
        <HeroGradient/>
        <p className=" relative max-w-[50%] font-semibold text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-[#F9B5FB]  to-[#921196]">
        Transforming Your Business with Innovative Web Solutions      </p>
        <p className= ' font-montserrat relative text-white text-center max-w-[77%] tracking-wider text-2xl'>At Zenhook, we harness the power of technology to fuel business growth and success. Our mission is to deliver innovative website solutions that streamline processes, boost efficiency, and elevate your business's performance.</p>
        <Button title={"Get Started"} />
    </div>
  )
}
