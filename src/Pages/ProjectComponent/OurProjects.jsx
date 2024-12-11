import React from 'react';

import Proj1 from "../../assets/Website-List/Projects/SDS.jpg";
import Proj2 from "../../assets/Website-List/Projects/greenappleglobal.jpg";
import Proj3 from "../../assets/Website-List/Projects/surabhi.jpg";
import Proj4 from "../../assets/Website-List/Projects/sowbagya.png";
import Proj5 from "../../assets/Website-List/Projects/RR.png";
import Proj6 from "../../assets/Website-List/Projects/AGR.png";
import Proj7 from "../../assets/Website-List/Projects/Theiva.png";
import Proj8 from "../../assets/Website-List/Projects/sai-bathra-travels.jpg";

import Slider from 'react-slick';

const projectTemp = [
  { title: "Namma Palani", image: Proj1, link: "https://nammapalani.org.in/" },
  { title: "Green Apple", image: Proj2, link: "https://greenappleglobal.com/" },
  { title: "Surabhi Fencing", image: Proj3, link: "https://sds-surabhi.vercel.app/" },
  { title: "Sowbagya Furniture", image: Proj4, link: "https://sowbagyafurniture.in/" },
  { title: "RR-Hair&Skin Care", image: Proj5, link: "https://www.rrhairskinclinic.com/" },
  { title: "AGR e-commerce Store", image: Proj6, link: "" },
  { title: "Theivaa Academy", image: Proj7, link: "https://theivaa.vercel.app/" },
  { title: "Sai Bathra Travels", image: Proj8, link: "https://saibathratravels.in/" },
];

function  OurProjects() {
  const projectSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,               // Show 2 slides on lg screens
    slidesToScroll: 1,
    autoplay: true,                // Enable automatic sliding
    autoplaySpeed: 3000,           // Slide every 3 seconds
    arrows: true,                 // Remove arrow controls
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
    <div className='w-full overflow-hidden'>
      <h1 className="w-full text-4xl text-center font-bold text-[#73D1FF] text-border-bottom p-5 mb-3"
        data-aos="fade-down"
        data-aos-delay="400"
      >
         Projects
      </h1>

      <section className="w-[90%] bg-black lg:p-5 p-5 mx-auto container">
      <Slider {...projectSliderSettings}>
          {projectTemp.map((template, index) => (
            <div key={index} className="w-auto h-auto lg:h-auto p-3 sm:p-8 flex justify-center items-center" >
              <div
                className="relative bg-black border-2 border-gray-300 rounded-lg shadow-lg w-auto h-[250px] lg:w-full lg:h-[450px]  transform transition-transform duration-300 hover:scale-110 hover:shadow-4xl overflow-hidden group p-5"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="absolute inset-0 bg-cover bg-start md:bg-center bg-no-repeat w-[100%]  h-[250px] lg:h-[520px] "
                  style={{
                    backgroundImage: `url(${template.image})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-end transform transition-transform duration-500 z-30 translate-y-full group-hover:translate-y-0">
                  <a href={template.link} target="_blank" rel="noopener noreferrer" className="text-center text-[#162e39] mb-4 bg-gray-200 rounded-xl p-4 text-xl font-bold tracking-wider">
                    Visit Site
                  </a>
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
