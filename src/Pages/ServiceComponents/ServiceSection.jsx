import React from 'react'
import ServiceCard from './ServiceCard';

import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { FaMobileAlt } from "react-icons/fa";
import { PiFigmaLogoFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { SiCoinmarketcap } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { FaAngleDoubleDown } from "react-icons/fa";

const ServiceSection = () => {

    const services = [
        {
          title: 'Web Development',
          description: 'Build modern, responsive websites tailored to your needs.',
          Icon: TbDeviceDesktopAnalytics,
          link: '/services/web-development',
          color: 'cyan', // Example color
        },
        {
          title: 'Mobile App Development',
          description: 'Turn your ideas into easy-to-use mobile apps.',
          Icon: FaMobileAlt,
          link: '/services/app-development',
          color: '#E53E3E', // Example color
        },
        {
          title: 'Graphics Design',
          description: 'Bring your ideas to life with creative graphic design.',
          Icon: PiFigmaLogoFill,
          link: '/services/graphics-design',
          color: '#F59E0B', // Example color
        },
        {
          title: 'Courses',
          description: 'Learn new skills with our course and unlock your potential.',
          Icon: CgWebsite,
          link: '/courses',
          color: '#10B981', // Example color
        },
        {
          title: 'Digital Marketing',
          description: 'Grow your business with effective digital marketing strategies.',
          Icon: SiCoinmarketcap,
          link: '/services/digital-marketing',
          color: '#3B82F6', // Example color
        },
        {
          title: 'Social Media Marketing',
          description: 'Boost your brand with strategic social media marketing.',
          Icon: SlSocialInstagram,
          link: '/services/social-media-marketing',
          color: '#D97706', // Example color
        },
        // Add more services as needed
      ];

  return (
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
  )
}

export default ServiceSection