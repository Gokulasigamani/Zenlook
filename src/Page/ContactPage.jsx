import React from 'react'
import ContactHero from '../Components/ContactPageComponents/ContactHero'
import ContactFormSection from '../Components/ContactPageComponents/ContactFormSection'
import Process from '../Components/ContactPageComponents/Process'

const ContactPage = () => {
  return (
    <div className="flex flex-col w-full bg-gradient-to-r from-[#121212] to-[#10204d] overflow-x-hidden">
    <ContactHero />
    <Process/>
    <ContactFormSection/>
    </div>
  )
}

export default ContactPage