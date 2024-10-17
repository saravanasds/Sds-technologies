import React from 'react';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { FaMobileAlt } from "react-icons/fa";
import { PiFigmaLogoFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { SiCoinmarketcap } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { FaAngleDoubleDown } from "react-icons/fa";

import ServiceCard from './ServiceComponents/ServiceCard';
import ServiceHead from './ServiceComponents/ServiceHead';

import world from ".././assets/world.png"
import servicebg from ".././assets/servicebg.png"

import { Helmet } from "react-helmet";

function ServicesComponent() {
  const services = [
    {
      title: 'Web Development',
      description: 'We build responsive and high-performance websites using the latest technologies.',
      Icon: TbDeviceDesktopAnalytics,
      link: '/services/web-development',
      color: 'cyan', // Example color
    },
    {
      title: 'Mobile App Development',
      description: 'Custom software solutions to meet your business needs.',
      Icon: FaMobileAlt,
      link: '/services/app-development',
      color: '#E53E3E', // Example color
    },
    {
      title: 'Graphics Design',
      description: 'Transform your data into actionable insights.',
      Icon: PiFigmaLogoFill,
      link: '/services/graphics-design',
      color: '#F59E0B', // Example color
    },
    {
      title: 'Website Hoisting',
      description: 'Expand your reach and grow your business with our marketing strategies.',
      Icon: CgWebsite,
      link: '/services/website-hoisting',
      color: '#10B981', // Example color
    },
    {
      title: 'Digital Marketing',
      description: 'Expand your reach and grow your business with our marketing strategies.',
      Icon: SiCoinmarketcap,
      link: '/services/digital-marketing',
      color: '#3B82F6', // Example color
    },
    {
      title: 'Social Media Marketing',
      description: 'Expand your reach and grow your business with our marketing strategies.',
      Icon: SlSocialInstagram,
      link: '/services/social-media-marketing',
      color: '#D97706', // Example color
    },
    // Add more services as needed
  ];

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

      <div className='w-full flex justify-center bg-gradient-to-t from-black via-gray-900 to-black'>
        <div className="w-[90%] sm:p-4 md:py-20" >
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-cyan-400 bg-gradient-to-r from-transparent via-gray-900 to-transparent pb-3 p-1" data-aos="flip-up" data-aos-delay="800"><span className='text-white'>Our</span> Services</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="zoom-in" data-aos-delay="800">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
                link={service.link}
                backgroundImage={service.backgroundImage}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center min-h-screen w-full bg-black pb-10 overflow-hidden'>
        <ServiceHead />
      </div>

    </>
  );
}

export default ServicesComponent;
