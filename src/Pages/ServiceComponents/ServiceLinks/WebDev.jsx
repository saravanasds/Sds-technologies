import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WebBan from "../../../assets/Website-List/blog.jpg";
import WebBan2 from "../../../assets/Website-List/portfolio.jpg";
import WebBan3 from "../../../assets/Website-List/e-commerce.jpg";
import WebBan4 from "../../../assets/Website-List/business.jpg";
import WebBan5 from "../../../assets/Website-List/school.jpg";
import WebBan6 from "../../../assets/Website-List/entertainment.jpg";
import WebBan7 from "../../../assets/Website-List/eventsite.jpg";

import Proj1 from "../../../assets/Website-List/Projects/SDS.jpg";
import Proj2 from "../../../assets/Website-List/Projects/greenappleglobal.jpg";
import Proj3 from "../../../assets/Website-List/Projects/surabhi.jpg";
import Proj4 from "../../../assets/Website-List/Projects/Sowbagya.jpg";

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const webTemplates = [
  { title: 'Blogging Website', description: 'A perfect platform for your blogs.', image: WebBan },
  { title: 'Portfolio Site', description: 'Showcase your work and projects.', image: WebBan2 },
  { title: 'eCommerce Site', description: 'Sell your products online with ease.', image: WebBan3 },
  { title: 'Business Website', description: 'Professional website for your business.', image: WebBan4 },
  { title: 'Educational Site', description: 'Online learning platform.', image: WebBan5 },
  { title: 'Non-Profit Website', description: 'Raise awareness for your cause.', image: WebBan7 },
];

const projectTemp = [
  { title: "Namma Palani", image: Proj1, link: "https://nammapalani.org.in/" },
  { title: "Green Apple", image: Proj2, link: "https://greenappleglobal.com/" },
  { title: "Suarbhi Fencing", image: Proj3, link: "https://sds-surabhi.vercel.app/" },
  { title: "Sowbagya", image: Proj4, link: "https://sowbagyafurniture.in/" },
];

const technologies = {
  frontend: ['React', 'Tailwind CSS', 'Bootstrap'],
  backend: ['Node.js', 'Express.js'],
  database: ['MongoDB', 'MySQL', 'Firebase'],
};

function WebDev() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [activeTab, setActiveTab] = useState('frontend');

  const projectSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=''>
      <div className='text-center bg-black p-5 tracking-wider'>
        <h1 className='text-2xl sm:text-4xl font-bold text-[#73D1FF] mb-5'>Choose any Web - Templates</h1>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">
          Transforming ideas into <span className="text-yellow-600 underline">Digital Realities</span> Digital solutions for a connected world.
        </h3>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-16 lg:gap-20 p-5 sm:p-10 lg:p-20 bg-gradient-to-t from-black via-gray-900 to-black w-full">
        {webTemplates.map((template, index) => (
          <div
            key={index}
            className="relative bg-black border-[1px] border-[#73D1FF] rounded-2xl shadow-lg mx-auto w-full max-w-[370px] h-[400px] transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            style={{
              backgroundImage: `url(${template.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: "2px 2px 6px #73D1FF"
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-end transform transition-transform duration-500 translate-y-full group-hover:translate-y-0">
              <h2 className="text-xl font-semibold text-white mb-2">{template.title}</h2>
              <p className="text-gray-200 mb-4">{template.description}</p>
              <p className="text-gray-200 mb-4">
                Your digital storefront, crafted to attract, engage, and convert visitors into customers with sleek design and seamless user experience.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900 via-[#102d3a] to-gray-900 bg-opacity-50 flex items-center justify-center text-white tracking-wider font-black text-lg md:text-2xl underline transition-opacity duration-300 opacity-100 group-hover:opacity-0">
              {template.title}
            </div>
          </div>
        ))}
      </section>


      <div
        className=' bg-gradient-to-t from-black via-gray-900 to-black font-montserrat text-xl sm:text-[30px] font-bold text-center p-6 sm:p-16 text-white'
        data-aos="fade-up"
        data-aos-delay="200"
      >
        "Choose a template or Let us design you a Own site".
      </div>

      <h1 className=' w-full text-4xl text-center font-bold text-[#73D1FF] text-border-bottom p-5 mb-3'
        data-aos="fade-down"
        data-aos-delay="400"
      >
        Our Projects
      </h1>

      <section className="bg-black p-10 ">
        <Slider {...projectSliderSettings}>
          {projectTemp.map((template, index) => (
            <div key={index} className="p-3 sm:p-8 ">
              <div
                className="relative bg-black border-2 border-gray-300 rounded-lg shadow-lg w-full h-56 transform transition-transform duration-300 hover:scale-110 hover:shadow-4xl overflow-hidden group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  backgroundImage: `url(${template.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-end transform transition-transform duration-500 z-30 translate-y-full group-hover:translate-y-0">
                  <a href={template.link} target="_blank" rel="noopener noreferrer" className="text-center text-[#162e39] mb-4 bg-gray-200 rounded-xl p-4 text-md font-semibold tracking-wider">
                    Visit Site
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-gray-900 to-black  bg-opacity-50 flex items-center justify-center text-white tracking-wider font-black text-2xl underline transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  {template.title}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default WebDev;
