import React from 'react'
import ProjectImage from '../../assets/computer.png';


const AboutHome = () => {
  return (
    <div id="target-section" className="w-[90%] h-auto min-h-screen sm:-mt-0 -mt-20 rounded-xl hover:rounded-lg flex flex-col-reverse lg:flex-row">

      {/* Content Section */}
      <div className="w-full lg:w-1/2 md:p-10 md:pt-10 text-black flex flex-col justify-center gap-4 h-full" data-aos="slide-right" data-aos-delay="300">

        <div className='p-4 rounded-md shadow-md transition duration-300 hover:bg-opacity-20 hover:bg-gray-400 hover:backdrop-blur-lg' >
          <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-[#73D1FF] tracking-wider relative inline-block">Web Development
            <span className="absolute -bottom-3 left-0 w-1/2 md:w-3/4 h-[3px] bg-gradient-to-r from-orange-500 to-transparent animate-pulse"></span>
          </h2>

          <p className="text-md indent-10 text-white tracking-wider">
            Explore our diverse range of projects that showcase our expertise and dedication to delivering high-quality solutions.Customize your website to reflect your unique style and meet your business goals with ease.
          </p>
        </div>

        <div className='p-4 rounded-md shadow-md transition duration-300 hover:bg-opacity-20 hover:bg-gray-400 hover:backdrop-blur-lg' >
          <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-[#73D1FF] tracking-wider relative inline-block">Digital Marketing
            <span className="absolute -bottom-3 left-0 w-1/2 md:w-3/4 h-[3px] bg-gradient-to-r from-orange-500 to-transparent animate-pulse"></span>
          </h2>
          <p className="text-md indent-10 text-white tracking-wider">
            Discover our dedication to digital marketing excellence, our commitment to innovative strategies, and our mission to deliver outstanding results and value to our clients.
          </p>
        </div>

        <div className='p-4 rounded-md shadow-md transition duration-300 hover:bg-opacity-20 hover:bg-gray-400 hover:backdrop-blur-lg' >
          <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-[#73D1FF] tracking-wider relative inline-block">Explore Courses
            <span className="absolute -bottom-3 left-0 w-1/2 md:w-3/4 h-[3px] bg-gradient-to-r from-orange-500 to-transparent animate-pulse"></span>
          </h2>
          <p className="text-md indent-10 text-white tracking-wider">
          Master new skills with our expert-led courses, crafted to advance your career, unlock new opportunities, and empower you to achieve your goals.
          </p>
        </div>

      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-96 sm:h-auto bg-cover flex justify-center items-center bg-center" data-aos="slide-left" data-aos-delay="300">
        {/* Optionally, you can add overlay or additional content here */}
        <img src={ProjectImage} alt="" className='animate-bounceSlow'/>
      </div>

    </div>

  )
}

export default AboutHome