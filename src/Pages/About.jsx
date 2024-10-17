import React from 'react';
import Aboutcom1 from './Aboutcomponent/Aboutcom1.jsx'
import Aboutcom3 from './Aboutcomponent/Aboutcom3.jsx'
import Aboutcom4 from './Aboutcomponent/Aboutcom4.jsx'
import Aboutcom5 from './Aboutcomponent/Aboutcom5.jsx'
import Aboutcom6 from './Aboutcomponent/Aboutcom6.jsx'

import AboutcomIframe from './Aboutcomponent/AboutcomIframe.jsx';
// import Aboutcom7 from './Aboutcomponent/Aboutcom7.jsx'

import { Helmet } from "react-helmet";

function About() {
  return (
    <>
     <Helmet>
        <title>About Us | SDS Technologies</title>
        <meta name="description" content="Learn about SDS Technologies, a leader in web development, tech solutions, and digital marketing services in Palani." />
        <meta name="keywords" content="About SDS Technologies, web development Palani, tech solutions Palani" />
      </Helmet>
      
      {/*  */}
      <div className='bg-black overflow-hidden'>
      <Aboutcom1 />
      <div className="w-full flex justify-center items-center mt-10" data-aos="flip-up" data-aos-delay="200">
        <ul className="bg-gradient-to-r from-[#4D6B9C] via-gray-900 to-black rounded-lg p-2 w-[90%] flex flex-wrap justify-around text-white border-[1px] border-gray-800">
          <li className="bg-gradient-to-r from-black via-gray-900 to-[#4D6B9C] border-gray-700 border-[1px] px-4 lg:px-12 my-4 rounded hover:rounded-lg hover:scale-110 transition-transform duration-300 py-4 w-[350px] animate-bounceSlow">
            <div>
              <h1 className="text-xl font-bold ">30+ Projects Completed</h1>
              <p>Web Development</p>
            </div>
          </li>
          <li className="bg-gradient-to-r from-black via-gray-900 to-[#4D6B9C] border-gray-700 border-[1px]  px-4 lg:px-12 my-4 rounded hover:rounded-lg hover:scale-110 transition-transform duration-300 py-4 w-[350px] animate-bounceSlow">
            <div >
              <h1 className="text-xl font-bold">Our Own Shopping App</h1>
              <p>Innovative Solutions</p>
            </div>
          </li>
          <li className="bg-gradient-to-r from-black via-gray-900 to-[#4D6B9C] border-gray-700 border-[1px] px-4 lg:px-12 my-4 rounded hover:rounded-lg hover:scale-110 transition-transform duration-300 py-4 w-[350px] animate-bounceSlow">
            <div >
              <h1 className="text-xl font-bold">Dedicated Team</h1>
              <p>Expert Developers</p>
            </div>
          </li>
        </ul>
      </div>
      <Aboutcom3 />
      <Aboutcom4 />
      <div className='w-[100%] flex justify-center items-center'>
        <div className='w-[90%]'><Aboutcom5 /></div>
      </div>
      <Aboutcom6 />
      <AboutcomIframe />
    </div>
    </>
  );
}

export default About;
