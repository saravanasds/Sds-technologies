import React from 'react'
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { SiAntdesign } from "react-icons/si";

const CourseDetail6 = () => {
  return (
    <>
      <div className='w-[100%] min-h-screen flex  flex-col justify-center items-center  bg-black sm:p-10' >

        <h2 className='text-center text-4xl sm:text-5xl font-semibold text-[#73D1FF] tracking-widern my-5' data-aos="slide-right" data-aos-delay="300">We Teach </h2>

        <div className='w-full md:w-[85%] h-auto  grid  grid-cols-1 lg:grid-cols-3 px-5 gap-20 py-10'>
          <div className='text-2xl text-white text-center flex flex-col justify-center items-center font-bold tracking-wider p-14 duration-500 border-t-[1px] border-[#73D1FF] border-b-[1px] transition-all'data-aos="flip-right" data-aos-delay="300" style={{ boxShadow: "0px 2px 0px #73D1FF", borderRadius: "0px 100px 0px 100px" }}><MdOutlineTipsAndUpdates className='text-9xl font-bold mb-5 text-yellow-400 animate-bounceMedium'  />
            <h2>Simple Tips and Tricks</h2>
          </div>
          <div className='text-2xl text-white text-center flex flex-col justify-center items-center font-bold  tracking-wider p-14 duration-500 border-t-[1px] border-[#73D1FF] border-b-[1px] transition-all' data-aos="flip-right" data-aos-delay="300" style={{ boxShadow: "0px 2px 0px #73D1FF", borderRadius: "0px 100px 0px 100px" }}><GiTeacher className='text-9xl font-bold mb-5 text-green-300 animate-bounceMedium' />
            <h2>100% Practical Class</h2>
          </div>
          <div className='text-2xl text-white text-center flex flex-col justify-center  items-center font-bold  tracking-wider p-14 duration-500 border-t-[1px] border-[#73D1FF] border-b-[1px] transition-all' data-aos="flip-right" data-aos-delay="300" style={{ boxShadow: "0px 2px 0px #73D1FF", borderRadius: "0px 100px 0px 100px" }}><SiAntdesign className='text-9xl font-bold mb-5  text-red-400 animate-bounceMedium ' />
            <h2>Desgining Methods</h2>
          </div>
        </div>

      </div>
    </>
  )
}

export default CourseDetail6