import React from 'react'
import Hero from '../Components/HomePageComponents/Hero';
import Services from '../Components/HomePageComponents/Services';
import WhatWeOffer from '../Components/HomePageComponents/WhatWeOffer';
import Sessions from '../Components/HomePageComponents/Sessions';
import WorkWith from '../Components/HomePageComponents/WorkWith';
import ThingsWeHaveMade from '../Components/HomePageComponents/ThingsWeHaveMade';
import ContentSegment from '../Components/content/ContentSegment';
import GetInTouch from '../Components/HomePageComponents/GetInTouch';

export default function HomePage() {
  return (
    <div>
       <Hero />
        <Services />
        <WhatWeOffer />
        <Sessions/>
        <WorkWith />
        <ThingsWeHaveMade />
        <ContentSegment />
        <GetInTouch/>
    </div>
  )
}
