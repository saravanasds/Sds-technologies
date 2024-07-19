import React from 'react'
import { MdCenterFocusStrong } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";
import { FaGripfire } from "react-icons/fa6";

const Aboutcom4 = () => {
  return (
    <>
      <div className='w-[100%] h-auto'>

        <div className='relative w-full text-center mb-16'>
          <h2 className=' text-[#73D1FF] text-3xl md:text-5xl text-center font-bold md:mb-10  tracking-wider relative inline-block ' data-aos="slide-right" data-aos-delay="800">Why SDS ?
            <span className="absolute -bottom-2 left-0 w-1/2 md:w-3/4 h-[3px] bg-gradient-to-r from-red-500 to-transparent animate-pulse"></span></h2>
        </div>

        <div className='w-[100%] h-auto flex text-white flex-col justify-evenly items-center md:flex-row '>

          <div className='w-[250px] h-[250px] sm:w-[350px] sm:h-[250px] flex flex-col justify-evenly items-center text-center p-5' data-aos="slide-right" data-aos-delay="800">
            <MdCenterFocusStrong className='font-medium text-white bg-green-500 text-7xl mb-3 rounded-xl hover:-translate-y-3 duration-500 hover:bg-green-400 animate-bounce transform transition-all' style={{boxShadow: "0px 2px 0px #73D1FF"}}/>
            <h2 className='font-bold text-xl px-10 bg-gradient-to-r from-black via-[#73D1FF] to-black text-black uppercase animate-pulse'>Focus</h2>
            <p className='tracking-wider'>We are truly focused on every IT solution which we develop</p>
          </div>

          <div className='w-[250px] h-[250px] sm:w-[350px] sm:h-[250px] flex flex-col justify-evenly items-center text-center' data-aos="slide-up" data-aos-delay="800">
            <TbBulbFilled className='font-medium text-white text-7xl bg-yellow-500 rounded-xl hover:-translate-y-3 duration-500 hover:bg-yellow-400 animate-bounce transform transition-all' style={{boxShadow: "0px 2px 0px #73D1FF"}}/>
            <h2 className='font-bold text-xl px-10 bg-gradient-to-r from-black via-[#73D1FF] to-black text-black uppercase animate-pulse'>Idea</h2>
            <p className='tracking-wider'>We are all about meeting the creative vision of client</p>
          </div>

          <div className='w-[250px] h-[250px] sm:w-[350px] sm:h-[250px]  flex flex-col justify-evenly items-center text-center p-5 ' data-aos="slide-left" data-aos-delay="800">
            < FaGripfire className='font-medium text-white text-7xl bg-red-600 mb-3 rounded-xl hover:-translate-y-3 duration-500 hover:bg-red-400 animate-bounce transform transition-all' style={{boxShadow: "0px 2px 0px #73D1FF"}}/>
            <h2 className='font-bold text-xl px-10 bg-gradient-to-r from-black via-[#73D1FF] to-black text-black uppercase animate-pulse'>Passion</h2>
            <p className='tracking-wider'>Our passion lies in giving effective solutions for our clients</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Aboutcom4