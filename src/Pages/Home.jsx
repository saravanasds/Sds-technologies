import React from 'react';
import Hero from './HomeComponents/Hero';
import AboutHome from './HomeComponents/AboutHome';
import Testimonials from './HomeComponents/Testimonials';
import MouseFollower from "../Components/MouseFollow";
import ServiceSection from "./ServiceComponents/ServiceSection"
import CourseDetails1 from "../Pages/Coursecomponent/CourseDetails1"

import OurProjects from './ProjectComponent/OurProjects';
import Slider from 'react-slick';
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
      <div className="relative bg-black overflow-hidden">
        <MouseFollower />
        <div className="flex flex-col justify-center items-center overflow-hidden" >
          <Hero />
          <AboutHome />
          <ServiceSection />
          <CourseDetails1 />
          <OurProjects />
          <Testimonials />
        </div>
      </div>


    </>
  );
}

export default Home;
