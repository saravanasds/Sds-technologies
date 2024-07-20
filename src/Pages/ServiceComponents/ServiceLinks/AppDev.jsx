import React from 'react'
import mobapp from "../../../assets/mobapp.png"
import { IoCheckmarkDoneSharp } from "react-icons/io5";

function AppDev() {
  return (
    <div className='w-full flex lg:flex-row justify-center items-center gap-20 flex-col-reverse py-10'>
      
      <div className='w-[90%] lg:w-[40%] flex flex-col justify-start  items-start px-10'>
        <h2 className='text-2xl sm:text-4xl mb-12 text-cyan-400 font-semibold lg:text-left text-center'>Based on Functionality and Purpose</h2>
        <div className='text-md sm:text-xl tracking-wider'>
          <p className='flex items-center gap-4 mb-4'><IoCheckmarkDoneSharp className='text-cyan-400'/> Social Media Apps</p>
          <p className='flex items-center gap-4 mb-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Gaming Apps</p>
          <p className='flex items-center gap-4 mb-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Productivity Apps</p>
          <p className='flex items-center gap-4 mb-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Entertainment Apps</p>
          <p className='flex items-center gap-4 mb-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>E-commerce Apps</p>
          <p className='flex items-center gap-4 mb-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Health & Fitness Apps</p>
          <p className='flex items-center gap-4 mb-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Education & Learning Apps</p>
          <p className='flex items-center gap-4 mb-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Finance & Banking Apps</p>
          <p className='flex items-center gap-4 mb-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Travel & Navigation Apps</p>
          <p className='flex items-center gap-4 mb-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Utility Apps</p>
        </div>
      </div>

      <div className='w-[90%] lg:w-[30%]'>
        <img src={mobapp} alt="" />
      </div>

    </div>
  )
}

export default AppDev