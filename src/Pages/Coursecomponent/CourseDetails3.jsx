import React from 'react'
// import { PiCertificateThin } from "react-icons/pi";
import Certify from "../../assets/certify1.png"


const CourseDetails3 = () => {
  return (
    <>
      <div className='w-[100%] flex justify-center items-center mb-16' >
        <div className='w-[90%] h-auto flex flex-col justify-center items-center  '>

          <div className='lg:w-[90%] w-full flex flex-col text-white lg:flex-row sm:p-10 p-2'>

            <div className='lg:w-[50%] w-[100%] h-auto order-2 mt-10 lg:mt-0 lg:order-1 flex flex-col justify-center items-start ' data-aos="slide-right" data-aos-delay="200">
              <h2 className='md:font-semibold md:text-5xl md:py-2 md:leading-tight text-3xl tracking-wider text-[#73D1FF] '>Earn a career certificate</h2>
              <p className='w-[100%] md:font-lg text-xl py-2 tracking-wider'>Add this credential to your <span className='text-[#F9CF8C] font-montserrat font-bold'>LinkedIn profile, resume, or CV</span>  Share it on social media and in your performance review..</p>
            </div>

            <div className='lg:w-[50%] lg:h-auto w-[100%] flex justify-center lg:justify-end order-1 lg:order-2 ' data-aos="flip-right" data-aos-delay="500">
              {/* < PiCertificateThin className='lg:w-[250px] lg:h-[200px] w-[200px] h-[150px] border-2 lg:mr-5  bg-yellow-500 ' /> */}
              <img
                src={Certify}
                alt=""
                className='lg:w-[300px] lg:h-auto w-[200px] h-[150px] lg:mr-5 animate-slow-ping transform transition-all'
                
              />
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default CourseDetails3