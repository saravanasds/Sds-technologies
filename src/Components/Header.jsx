import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import sdslogo from ".././assets/logo-white.png"
import { FaHome, FaServicestack, FaInfoCircle, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { GoFileSubmodule } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className="bg-black  sticky top-0 z-20 border-b-[0.5px] border-gray-700 flex flex-col justify-center items-center">
      <div className='w-full h-10 flex justify-between items-center px-5 md:px-10 shadow shadow-gray-800'>
        <div className='flex gap-4 md:gap-10 font-light text-sm'>
          <a href="" className='text-[#73D1FF] tracking-widest flex gap-1 items-center'><IoIosMail className='h-6 w-6 text-white' />sdspalani@gmail.com</a>
          <span className='text-[#73D1FF] tracking-widest flex gap-2 items-center'><FaPhoneAlt className='h-4 w-4 text-white' />9384293632</span>
        </div>
        <div className='flex gap-4 md:gap-6 font-light'>
          <a href="" className='text-[#73D1FF] tracking-widest'><FaInstagramSquare className='h-4 w-4 text-white'/></a>
          <a href="" className='text-[#73D1FF] tracking-widest'><FaFacebookSquare className='h-4 w-4 text-white'/></a>
          <a href="" className='text-[#73D1FF] tracking-widest'><IoLogoYoutube className='h-4 w-4 text-white'/></a>
          <a href="" className='text-[#73D1FF] tracking-widest'><FaLinkedin className='h-4 w-4 text-white'/></a>
          <a href="" className='text-[#73D1FF] tracking-widest'><SiIndeed className='h-4 w-4 text-white'/></a>
        </div>
      </div>
      <div className="w-[90%] flex justify-between items-center p-4 md:p-8" data-aos="fade-down" data-aos-delay="300">
        <Link
          to="/"
          className="text-2xl text-white font-bold tracking-wider uppercase transition-all duration-300 hover:text-blue-500 hover:scale-110 cursor-pointer"
        >
          <img src={sdslogo} alt="" className='w-24 md:w-36' />
        </Link>

        <ul className="lg:flex md:space-x-4 md:gap-12 hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#73D1FF] border-b-2 border-[#73D1FF] pb-2 font-extrabold text-sm uppercase tracking-wider"
                  : "text-white hover:text-[#73D1FF] text-sm pb-2 uppercase font-semibold nav-link tracking-wider"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#73D1FF] border-b-2 border-[#73D1FF] pb-2 font-extrabold text-sm uppercase tracking-wider "
                  : "text-white hover:text-[#73D1FF] text-sm pb-2 uppercase font-semibold nav-link tracking-wider"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-[#73D1FF] border-b-2 border-[#73D1FF] pb-2 font-extrabold text-sm uppercase tracking-wider "
                  : "text-white hover:text-[#73D1FF] text-sm pb-2 uppercase font-semibold nav-link tracking-wider"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-[#73D1FF] border-b-2 border-[#73D1FF] pb-2 font-extrabold text-sm uppercase tracking-wider "
                  : "text-white hover:text-[#73D1FF] text-sm pb-2 uppercase font-semibold nav-link tracking-wider"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "text-[#73D1FF] border-b-2 border-[#73D1FF] pb-2 font-extrabold text-sm uppercase tracking-wider "
                  : "text-white hover:text-[#73D1FF] text-sm pb-2 uppercase font-semibold nav-link tracking-wider"
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <button className="md:ml-20 bg-gradient-to-r from-[#73D1FF] via-gray-900 to-black hover:scale-110 transition-all duration-300  text-white font-bold py-2 px-8 rounded-lg border-[1px] border-gray-800 uppercase">
              <Link to="/contact" className="text-sm">
                Contact Us
              </Link>
            </button>
          </li>
        </ul>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden flex justify-end items-center">
          <button onClick={toggleMenu} className="text-gray-900 hover:text-gray-700 focus:outline-none">
            <FaBars className="text-3xl text-white" />
          </button>


          {/* ************************************************** */}
          {/* Mobile view */}
          <div
            className={`${isMenuOpen ? 'flex' : 'hidden'
              } p-6 bg-[rgb(229,229,229)] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg`}
          >
            <ul className="flex flex-col gap-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
                      : "text-gray-900 hover:text-blue-700 text-lg mb-4"
                  }
                  onClick={toggleMenu}
                >
                  <div className="flex items-center gap-4">
                    <FaHome className="text-xl" /> <div>Home</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
                      : "text-gray-900 hover:text-blue-700 text-lg"
                  }
                  onClick={toggleMenu}
                >
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-xl" /> <div>About</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
                      : "text-gray-900 hover:text-blue-700 text-lg"
                  }
                  onClick={toggleMenu}
                >
                  <div className="flex items-center gap-4">
                    <FaServicestack className="text-xl" /> <div>Services</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
                      : "text-gray-900 hover:text-blue-700 text-lg"
                  }
                  onClick={toggleMenu}
                >
                  <div className="flex items-center gap-4">
                    <GoFileSubmodule className="text-xl" /> <div>Projects</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
                      : "text-gray-900 hover:text-blue-700 text-lg"
                  }
                  onClick={toggleMenu}
                >
                  <div className="flex items-center gap-4">
                    <FaInfoCircle className="text-xl" /> <div>Courses</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white bg-gradient-to-r from-[#73D1FF] via-gray-900 to-black p-2 px-6 rounded-md hover:text-white text-lg transition-all duration-500 font-semibold"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
