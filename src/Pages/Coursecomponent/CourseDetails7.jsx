import React from 'react'
import bg from '../../assets/education1.png'
import { TiTick } from "react-icons/ti";

const CourseDetails7 = () => {
  return (
    <>
      <div className='w-[100%] min-h-screen sm:p-10 bg-black flex justify-center items-center my-20 sm:my-0' >
        <div className='w-[90%] flex flex-col lg:flex-row justify-center items-center p-5 gap-20 lg:gap-0 bg-gradient-to-r from-transparent via-gray-900 to-transparent border-[1px] border-[#73D1FF] py-10' style={{ boxShadow: "2px 2px 12px #73D1FF" }}>

          <div className='div1 lg:w-[50%] flex justify-center items-center rounded-xl' data-aos="slide-right" data-aos-delay="200">
            <img src={bg} className='w-[90%]' />
          </div>

          <div className='div2 lg:w-[50%] mb-10 lg:mb-0 sm:px-10 flex flex-col justify-center items-left  rounded-xl' data-aos="slide-left" data-aos-delay="200">
            <h3 className='font-semibold text-xl sm:text-3xl py-2 leading-relaxed text-[#73D1FF] tracking-wider mb-5'>Get certified <span className='text-yellow-300'>courses</span> and support to guide you through the <span className='text-yellow-300'>job</span>  search process..</h3>
            <div className='text-white tracking-wider leading-relaxed'>
              <div className='flex justify-start items-center gap-2 text-md sm:text-xl'><TiTick className='text-green-400 ' /><h2 className='font-semibold  leading-loose'> Flexible Learning Options</h2></div>
              <div className='flex justify-left items-start gap-2 text-md sm:text-xl'><TiTick className='text-red-500 mt-2' /> <h2 className='font-semibold leading-loose'> Certifications and Credentials</h2></div>
              <div className='flex justify-left items-center gap-2 text-md sm:text-xl'><TiTick className='text-blue-500 ' /><h2 className='font-semibold leading-loose'> Supportive Community</h2></div>
              <div className='flex justify-left items-center gap-2 text-md sm:text-xl'><TiTick className='text-yellow-400 ' /><h2 className='font-semibold leading-loose'>Affordable Pricing</h2></div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default CourseDetails7
