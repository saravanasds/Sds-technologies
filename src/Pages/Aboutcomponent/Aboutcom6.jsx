import React from 'react'
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { GiTrophyCup } from "react-icons/gi";
import { GiStarsStack } from "react-icons/gi";
import { FaGripfire } from "react-icons/fa6";

const Aboutcom6 = () => {
  return (
    <>
      <div className='w-[100%] h-auto bg-black p-10'>
        <h2 className='w-[100%] font-semibold text-3xl sm:text-5xl text-white text-center mb-10 sm:p-5 p-2 text-border-bottom' data-aos="flip-up" data-aos-delay="800">Our Core Ideas</h2>

        <div className=' w-[100%] h-auto grid grid-cols-1  md:grid-cols-3 gap-10 mb-10 py-4  '>

          <div className='flex justify-center items-center ' data-aos="zoom-in-up" data-aos-delay="800">
            <div className=' w-[300px] h-[250px] p-5 rounded-xl shadow-sm hover:shadow-lg  hover:shadow-black shadow-black hover:scale-105 transition-all border-[1px] border-[#73D1FF] ' style={{ boxShadow: "2px 2px 12px #73D1FF" }}>
              <FaHandshakeSimple className='text-5xl font-semibold mb-3 text-red-500 ' />
              <h2 className='text-3xl font-semibold mb-3 text-white animate-bounceMedium '>Customer Commitment</h2>
              <p className='text-gray-400'>We develop relationships that make a positive difference</p>
            </div>
          </div>

          <div className='flex justify-center items-center' data-aos="zoom-in-up" data-aos-delay="800">
            <div className=' w-[300px] h-[250px] p-5  rounded-xl shadow-sm hover:shadow-lg  hover:shadow-black shadow-black hover:scale-105 transition-all border-[1px] border-[#73D1FF]' style={{ boxShadow: "2px 2px 12px #73D1FF" }}>
              < IoPeopleSharp className='text-5xl font-semibold mb-3  text-green-400' />
              <h2 className='text-3xl font-semibold mb-3 text-white animate-bounceMedium'>Personal Accountability</h2>
              <p className='text-gray-400'>We are personally accountable for delivering on our commitments</p>
            </div>
          </div>

          <div className='flex justify-center items-center' data-aos="zoom-in-up" data-aos-delay="800">
            <div className=' w-[300px] h-[250px] p-5  rounded-xl shadow-sm hover:shadow-lg  hover:shadow-black shadow-black hover:scale-105 transition-all border-[1px] border-[#73D1FF]' style={{ boxShadow: "2px 2px 12px #73D1FF" }}>
              <HiMiniBuildingLibrary className='text-5xl font-semibold mb-3  text-yellow-400' />
              <h2 className='text-3xl font-semibold mb-3 text-white animate-bounceMedium'>Integrity</h2>
              <p className='text-gray-400'>We uphold the highest standards of integrity in all of our actions</p>
            </div>
          </div>

          <div className='flex justify-center items-center' data-aos="zoom-in-up" data-aos-delay="800">
            <div className=' w-[300px] h-[250px] p-5  rounded-xl shadow-sm hover:shadow-lg  hover:shadow-black shadow-black hover:scale-105 transition-all border-[1px] border-[#73D1FF]' style={{ boxShadow: "2px 2px 12px #73D1FF" }}>
              <GiStarsStack className='text-5xl font-semibold mb-3 text-pink-400' />
              <h2 className='text-3xl font-semibold mb-3 text-white animate-bounceMedium'>Creative Leadership</h2>
              <p className='text-gray-400'>We inspire growth and innovation through learning and bold action</p>
            </div>
          </div>

          <div className='flex justify-center items-center' data-aos="zoom-in-up" data-aos-delay="800">
            <div className=' w-[300px] h-[250px] p-5  rounded-xl shadow-sm hover:shadow-lg  hover:shadow-black shadow-black hover:scale-105 transition-all border-[1px] border-[#73D1FF]' style={{ boxShadow: "2px 2px 12px #73D1FF" }}>
              <FaGripfire className='text-5xl font-semibold mb-3  text-orange-400' />
              <h2 className='text-3xl font-semibold mb-3 text-white animate-bounceMedium'>Passion for Progress</h2>
              <p className='text-gray-400'>We have an uncompromising focus on impact and excellence</p>
            </div>
          </div>

          <div className='flex justify-center items-center' data-aos="zoom-in-up" data-aos-delay="800">
            <div className='w-[300px] h-[250px] p-5 rounded-xl shadow-sm hover:shadow-lg  hover:shadow-black shadow-black hover:scale-105 transition-all border-[1px] border-[#73D1FF]' style={{ boxShadow: "2px 2px 12px #73D1FF" }}>
              <GiTrophyCup className='text-5xl font-semibold mb-3 text-lime-500 ' />
              <h2 className='text-3xl font-semibold mb-3 text-white animate-bounceMedium'>A Will To Win</h2>
              <p className='text-gray-400'>We exhibit a strong will to win in the marketplace and in every aspect of our business</p>
            </div>
          </div>



        </div>
      </div>


    </>
  )
}

export default Aboutcom6