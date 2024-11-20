import React from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import ServiceHead from './ServiceComponents/ServiceHead';
import ServiceSection from './ServiceComponents/ServiceSection';

import world from ".././assets/world.png"
import servicebg from ".././assets/servicebg.png"

import { Helmet } from "react-helmet";

function ServicesComponent() {
  const serviceTitle = "Services We Offer";
  const serviceVision = "our expertise together";

  const getWavingText = (text) => text.split("").map((char, index) => (
    <span key={index} style={{ "--i": index }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  const serviceTitleWaving = getWavingText(serviceTitle);
  const serviceVisionWaving = getWavingText(serviceVision);


  return (
    <>
    <Helmet>
        <title>Our Services | SDS Technologies</title>
        <meta name="description" content="Discover SDS Technologies' services in web development, digital marketing, and tech solutions in Palani." />
        <meta name="keywords" content="web development services Palani, digital marketing services, tech solutions Palani" />
      </Helmet>

      {/*  */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 mx-auto opacity-30 animate-bg-image backdrop-blur-sm " style={{ backgroundImage: `url(${servicebg})`, backgroundPosition: 'top', backgroundSize: "fit", backgroundRepeat: "no-repeat", backgroundBlendMode: "hard-light" }}></div>

        <div className='w-[100%] flex flex-col justify-center items-center sm:overflow-hidden'>
          <h2 className=' gradient-text font-bold mt-20  text-center mb-5  text-3xl md:text-6xl lg:text-7xl' data-aos="zoom-in"><span className='waving2 text-[#73D1FF] tracking-wider'>{serviceTitleWaving}</span></h2>
          <div className='font-bold text-3xl sm:text-4xl lg:text-6xl py-10 text-white bounceMedium flex justify-center items-center'>
            <FaAngleDoubleDown />
          </div>
        </div>
      </div>

      <div className='w-full h-auto pt-20 flex lg:flex-row justify-end lg:justify-center items-center  bg-black overflow-hidden lg:gap-0 gap-8 flex-col-reverse pb-10'>
        <div className='w-[90%] lg:w-[40%] flex justify-center items-center ' data-aos="slide-right" data-aos-delay="300">
          <img src={world} alt="" className='w-[60%] animate-slow-ping' />
        </div>
        <div className='w-[90%] lg:w-[60%] flex justify-center lg:justify-start items-center' data-aos="slide-left" data-aos-delay="300">
          <p className='text-2xl w-[100%] sm:text-3xl lg:text-6xl font-bold text-white hover:scale-100 text-center lg:text-left'>
            Your vision, <span className='text-[#00A79E]'>{serviceVisionWaving}</span> we create magic online.
          </p>
        </div>
      </div>

      <ServiceSection />

      <div className='flex justify-center items-center min-h-screen w-full bg-black pb-10 overflow-hidden'>
        <ServiceHead />
      </div>

    </>
  );
}

export default ServicesComponent;
