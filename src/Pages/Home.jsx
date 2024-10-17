import React from 'react';
import Hero from './HomeComponents/Hero';
import AboutHome from './HomeComponents/AboutHome';
import NammaPalani from './HomeComponents/NammaPalani';
import ServiceComp from './HomeComponents/ServiceComp';
import Testimonials from './HomeComponents/Testimonials';
import MouseFollower from "../Components/MouseFollow";
import Aboutcom5 from './Aboutcomponent/Aboutcom5';
import Aboutcom2 from './Aboutcomponent/Aboutcom2';

import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
     <Helmet>
        <title>Home | SDS Technologies - Web Development & Tech Solutions in Palani</title>
        <meta name="description" content="Welcome to SDS Technologies. We specialize in web development, tech solutions, and digital marketing in Palani. Contact us to learn more!" />
        <meta name="keywords" content="SDS Technologies, web development Palani, tech solutions Palani, SDS Tech Zone" />
      </Helmet>
      
      {/*  */}
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
    </>
  );
}

export default Home;
