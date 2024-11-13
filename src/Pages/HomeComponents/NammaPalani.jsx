import React from 'react'
import LogoImage from "../../assets/namma-palani.png"
import { FaBriefcase } from 'react-icons/fa';
import bg2 from "../../assets/bg2.png"
import { GrProjects } from "react-icons/gr";

import OurProjects from '../ProjectComponent/OurProjects';


const NammaPalani = () => {
  return (
    <>
      <div className="w-full mt-10 h-auto min-h-screen flex flex-col justify-center items-center lg:flex-row rounded-tl-2xl rounded-tr-2xl bg-opacity-20 backdrop-blur-lg shadow-lg" data-aos="fade-up" data-aos-delay="300" style={{  backgroundPosition: "center", backgroundSize: "cover" }}>
      
      {/* <OurProjects />     */}

        {/* Content Section */}
        <div className="w-full lg:w-[40%] lg:p-10 text-white flex flex-col justify-center items-center h-full" data-aos="slide-right" data-aos-delay="300">

          <div className='p-4  sm:mb-5 rounded-md shadow-md transition duration-300 hover:bg-opacity-20 hover:bg-gray-100 hover:backdrop-blur-lg' data-aos="fade-up" >

            <div className='flex items-end gap-2 mb-8'>
              <GrProjects className="text-3xl mr-2 text-[#9FF9FF]" />
              <h2
                className="text-2xl xl:text-4xl text-[#73D1FF] font-semibold tracking-wider relative inline-block"
              >
               Our Planning
                <span className="absolute -bottom-3 left-0 w-1/2 md:w-3/4 h-[3px] bg-gradient-to-r from-yellow-500 to-transparent animate-pulse"></span>
              </h2>

            </div>

            <p className="text-md mb-8 tracking-wider font-thin">
            Our platform is designed with simplicity and ease of use in mind, helping you develop a strategic IT plan aligned with your business goals.
            </p>
          </div>

          <div className='p-4  rounded-md shadow-md transition duration-300 hover:bg-opacity-20 hover:bg-gray-100 hover:backdrop-blur-lg' data-aos="fade-up" >
          <div className='flex items-end gap-2 mb-8'>
              <GrProjects className="text-3xl mr-2 text-[#9FF9FF]" />
              <h2
                className="text-2xl xl:text-4xl text-[#73D1FF] font-semibold tracking-wider relative inline-block"
              >
               Our Process
                <span className="absolute -bottom-3 left-0 w-1/2 md:w-3/4 h-[3px] bg-gradient-to-r from-yellow-500 to-transparent animate-pulse"></span>
              </h2>

            </div>

            <p className="text-md tracking-wider font-thin">
            Our process is designed to ensure maximum efficiency and client satisfaction. From initial consultation to final implementation, we work closely with you at every step.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[20%] flex justify-center items-center  bg-cover bg-center py-10 md:py-20" data-aos="fade-up" data-aos-delay="300">
        <img src={LogoImage} alt="" className='animate-bounceSlow h-56 md:h-auto '/>

        </div>


        {/* Content Section */}
        <div className="w-full lg:w-[40%] lg:p-10 text-white flex flex-col justify-center items-center h-full" data-aos="slide-left" data-aos-delay="300">

          <div className='p-4  sm:mb-5 rounded-md shadow-md transition duration-300 hover:bg-opacity-20 hover:bg-gray-100 hover:backdrop-blur-lg' data-aos="fade-up" >

           <div className='flex items-end gap-2 mb-8'>
              <GrProjects className="text-3xl mr-2 text-[#9FF9FF]" />
              <h2
                className="text-2xl xl:text-4xl text-[#73D1FF] font-semibold tracking-wider relative inline-block"
              >
            Our Support
                <span className="absolute -bottom-3 left-0 w-1/2 md:w-3/4 h-[3px] bg-gradient-to-r from-yellow-500 to-transparent animate-pulse"></span>
              </h2>

            </div>

            <p className="text-md mb-8 tracking-wider font-thin ">
            Driven by passion, we are a team of tech enthusiasts committed to delivering exceptional IT solutions.
            </p>
          </div>

          <div className='p-4  rounded-md shadow-md transition duration-300 hover:bg-opacity-20 hover:bg-gray-100 hover:backdrop-blur-lg' data-aos="fade-up" >

            <div className='flex items-end gap-2 mb-8'>
              <GrProjects className="text-3xl mr-2 text-[#9FF9FF]" />
              <h2
                className="text-2xl xl:text-4xl text-[#73D1FF] font-semibold tracking-wider relative inline-block"
              >
                Our Projects
                <span className="absolute -bottom-3 left-0 w-1/2 md:w-3/4 h-[3px] bg-gradient-to-r from-yellow-500 to-transparent animate-pulse"></span>
              </h2>

            </div>

            <p className="text-md tracking-wider font-thin">
              Learn more about our company, our values, and our mission to provide exceptional service and innovative solutions to our clients.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default NammaPalani