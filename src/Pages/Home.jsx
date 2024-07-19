import React from 'react';
import Hero from './HomeComponents/Hero';
import AboutHome from './HomeComponents/AboutHome';
import NammaPalani from './HomeComponents/NammaPalani';
import ServiceComp from './HomeComponents/ServiceComp';
import Testimonials from './HomeComponents/Testimonials';
import MouseFollower from "../Components/MouseFollow";
import Aboutcom5 from './Aboutcomponent/Aboutcom5';
import Aboutcom2 from './Aboutcomponent/Aboutcom2';

function Home() {
  return (
    <div className="relative home-section bg-black">
      <MouseFollower/>
      <div className="p-6 flex flex-col justify-center items-center overflow-hidden" data-aos="fade-up">
        <Hero />
        <AboutHome/>
        <Aboutcom2/>      
        <NammaPalani/>
        <ServiceComp/>
        <Testimonials/>
        <Aboutcom5/>
      </div>
    </div>
  );
}

export default Home;
