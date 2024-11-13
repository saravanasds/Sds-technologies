import React from 'react';

import Proj1 from "../../assets/Website-List/Projects/SDS.jpg";
import Proj2 from "../../assets/Website-List/Projects/greenappleglobal.jpg";
import Proj3 from "../../assets/Website-List/Projects/surabhi.jpg";
import Proj4 from "../../assets/Website-List/Projects/Sowbagya.jpg";
import Proj5 from "../../assets/Website-List/Projects/RR.png";
import Proj6 from "../../assets/Website-List/Projects/AGR.png";
import Proj7 from "../../assets/Website-List/Projects/Theiva.png";
import Proj8 from "../../assets/Website-List/Projects/sai-bathra-travels.jpg";

import Slider from 'react-slick';

const projectTemp = [
  { title: "Namma Palani", image: Proj1, link: "https://nammapalani.org.in/" },
  { title: "Green Apple", image: Proj2, link: "https://greenappleglobal.com/" },
  { title: "Suarbhi Fencing", image: Proj3, link: "https://sds-surabhi.vercel.app/" },
  { title: "Sowbagya Furnitures", image: Proj4, link: "https://sowbagyafurniture.in/" },
  { title: "RR-Hair&Skin Care", image: Proj5, link: "https://www.rrhairskinclinic.com/" },
  { title: "AGR e-commerce Store", image: Proj6, link: "" },
  { title: "Theivaa Academy", image: Proj7, link: "https://theivaa.vercel.app/" },
  { title: "Sai Bhatra Travels", image: Proj8, link: "https://saibathratravels.in/" },
];

function OurProjects() {
  const projectSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,               // Show 2 slides on lg screens
    slidesToScroll: 1,
    autoplay: true,                // Enable automatic sliding
    autoplaySpeed: 3000,           // Slide every 3 seconds
    arrows: false,                 // Remove arrow controls
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
          slidesToShow: 1,
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
    <div>
      <h1 className="w-full text-4xl text-center font-bold text-[#73D1FF] text-border-bottom p-5 mb-3"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        Our Projects
      </h1>

      <section className="bg-black p-10">
      <Slider {...projectSliderSettings}>
          {projectTemp.map((template, index) => (
            <div key={index} className="p-3 sm:p-8">
              <div
                className="relative bg-black border-2 border-gray-300 rounded-lg shadow-lg w-full h-72 lg:h-80 transform transition-transform duration-300 hover:scale-110 hover:shadow-4xl overflow-hidden group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${template.image})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-end transform transition-transform duration-500 z-30 translate-y-full group-hover:translate-y-0">
                  <a href={template.link} target="_blank" rel="noopener noreferrer" className="text-center text-[#162e39] mb-4 bg-gray-200 rounded-xl p-4 text-md font-semibold tracking-wider">
                    Visit Site
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-gray-900 to-black bg-opacity-50 flex items-center justify-center text-white tracking-wider font-black text-2xl underline transition-opacity duration-300 opacity-100 group-hover:opacity-0">
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

export default OurProjects;
