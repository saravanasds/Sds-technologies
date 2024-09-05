import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaServicestack, FaInfoCircle, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { GoFileSubmodule } from "react-icons/go";
import "./Components.css"
import sdslogo from ".././assets/logo-white.png"


function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-[#4D6B9C] to-black p-8 h-auto zoom-animation" data-aos="fade-up" data-aos-delay="800">

      <div className='bg-gradient-to-b from-transparent to-black backdrop-blur-xl p-8 rounded-xl' >

        <div className="container mx-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {/* Logo */}
          <div className="flex items-center justify-center" >
            <h1>
              <div className="text-2xl font-bold text-white uppercase tracking-wider transition-all duration-300 hover:text-blue-500 hover:scale-110 cursor-pointer">
                <img src={sdslogo} alt="" className='w-60' />
              </div>

            </h1>
          </div>

          {/* Navigation */}
          <div className="flex flex-col justify-start items-center  md:p-6 text-white">
            <div className='w-full  relative'>
              <h3 className="w-full text-xl font-semibold mb-4 font-montserrat text-left relative inline-block">Page Links
                <span className="absolute -bottom-2 left-0 w-1/2 md:w-3/4 h-[2px] bg-gradient-to-r from-red-500 to-transparent"></span>
              </h3>
            </div>
            <ul className="text-white space-y-2 w-full">
              <li className="flex items-center hover:text-[#73D1FF] transition-colors duration-300">
                <FaHome className="mr-2" />
                <Link to="/" onClick={scrollToTop}>Home</Link>
              </li>
              <li className="flex items-center hover:text-[#73D1FF] transition-colors duration-300">
                <FaEnvelope className="mr-2" />
                <Link to="/about" onClick={scrollToTop}>About us</Link>
              </li>
              <li className="flex items-center hover:text-[#73D1FF] transition-colors duration-300">
                <FaServicestack className="mr-2" />
                <Link to="/services" onClick={scrollToTop} >Services</Link>
              </li>
              <li className="flex items-center hover:text-[#73D1FF] transition-colors duration-300">
                <GoFileSubmodule  className="mr-2 " />
                <Link to="/projects" onClick={scrollToTop}>Projects</Link>
              </li>

              <li className="flex items-center hover:text-[#73D1FF] transition-colors duration-300">
                <FaInfoCircle className="mr-2" />
                <Link to="/courses" onClick={scrollToTop}>Courses</Link>
              </li>

            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-start items-center md:p-6 text-white ">
            <div className='w-full relative '>
              <h3 className="w-full text-xl font-semibold mb-4 text-left font-montserrat relative inline-block">Our Other Links
                <span className="absolute -bottom-2 left-0 w-1/2 md:w-3/4 h-[2px] bg-gradient-to-r from-red-500 to-transparent"></span>
              </h3>
            </div>
            <ul className="text-white space-y-2 w-full text-left">
              <li className="flex items-center hover:text-black transition-colors duration-300">
                <FaHome className="mr-2" />
                <Link to="/">Namma Palani </Link>
              </li>
              <li className="flex items-center hover:text-black transition-colors duration-300">
                <FaServicestack className="mr-2" />
                <a href='https://nammapalani.org.in/' target='blank'>Namma Palani Store</a>
              </li>
            </ul>
          </div>

          {/* Location and Address */}
          {/* md:col-span-4 */}
          <div className="flex flex-col justify-start items-center md:p-6 rounded-lg shadow-lg text-white">
            <div className='w-full relative text-left'>
              <h3 className="w-full text-xl font-semibold mb-4 font-montserrat relative inline-block">Location
                <span className="absolute -bottom-2 left-0 w-1/2 md:w-3/4 h-[2px] bg-gradient-to-r from-red-500 to-transparent"></span>
              </h3>
            </div>

            <p className="text-white text-left w-full">Red Cross Road,<br />
              Shanmugapuram,<br />
              Palani - 642601,<br />
              Dindigul
              </p>
            
          </div>
        </div>

        {/* Social medias */}
        <div className='flex justify-evenly items-evenly gap-5 lg:gap-10 w-full p-4 md:p-6 my-6 flex-col lg:flex-row rounded-lg shadow-lg border-[1px] border-[#73D1FF]'>
          <div className='lg:w-2/5 text-center relative flex justify-center items-center'>
            <h2 className='font-semibold text-sm sm:text-xl font-montserrat text-white relative inline-block text-left'>
              Our Social-Media Handles
            </h2>
          </div>

          <div className='lg:w-3/5'>
            <ul className='flex justify-between sm:justify-evently text-2xl font-semibold'>
              <li className='text-blue-900 bg-white p-2 rounded-lg md:px-8 hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer hover:scale-125'>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                  <FaFacebook className='text-2xl sm:text-4xl' />
                  <span className='hidden xl:block'>Facebook</span>
                </a>
              </li>
              <li className='text-pink-600  hover:text-pink-700 bg-white p-2 rounded-lg md:px-8 transition duration-300 ease-in-out cursor-pointer hover:scale-125'>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                  <FaInstagram className='text-2xl sm:text-4xl' />
                  <span className='hidden xl:block'>Instagram</span>
                </a>
              </li>
              <li className='text-red-600  hover:text-red-700 bg-white p-2 rounded-lg md:px-8 transition duration-300 ease-in-out cursor-pointer hover:scale-125'>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                  <FaYoutube className='text-2xl sm:text-4xl' />
                  <span className='hidden xl:block'>Youtube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <hr className='  mt-8 '/> */}
        {/* Bottom Disclaimer */}
        <div className="container mx-auto mt-4 text-sm tracking-wider text-center">
          <p className='text-white '>&copy; Copyright 2024 - <span className='font-montserrat font-bold text-blue-400 cursor-pointer'>SDS Technologies </span> All rights reserved.</p>

        </div>

      </div>

    </footer>

  );
}

export default Footer;
