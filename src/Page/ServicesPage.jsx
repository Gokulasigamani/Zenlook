import React from 'react'
import ServiceHero from '../Components/ServicePageComponents/ServiceHero'
import OurProcess from '../Components/ServicePageComponents/OurProcess'
import ProvidedServices from '../Components/ServicePageComponents/ProvidedServices'
import providedservie1 from "../Components/images/providedservies-img1.png";
import providedservie2 from "../Components/images/providedservies-img2.png";
import providedservie3 from "../Components/images/providedservies-img3.png";
import PriceList from '../Components/ServicePageComponents/PriceList';
import SampleWebsites from '../Components/ServicePageComponents/SampleWebsites';

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-gradient-to-r from-[#121212] to-[#10204d] overflow-x-hidden">
        <ServiceHero/>
        <OurProcess/>
        <ProvidedServices title={"Web Development"} des={"Creates custom web solutions that meet clients' unique requirements. Our team of experienced developers and designers deliver user-friendly and visually appealing web applications optimized for performance and scalability. Committed to providing high-quality services, on-time and within budget."} imageSrc={providedservie1} reverse={false}/>
        <ProvidedServices title={"UI/UX Designing"} des={"Focus on improving the user experience and the visual design of software products. The services combine research, design, and technology to create user-friendly and visually appealing software that meets customer needs and expectations."} imageSrc={providedservie2} reverse={true}/>
        <ProvidedServices title={"Solution Designing"} des={"To help clients develop and implement effective technology solutions for their specific business needs. These services include identifying problems, gathering requirements, creating functional specifications, and designing custom software solutions."} imageSrc={providedservie3} reverse={false} />
        <PriceList/>
        <SampleWebsites/>
    </div>
  )
}
