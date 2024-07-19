import React from 'react'
import mobapp from "../../../assets/mobapp.png"
import { IoCheckmarkDoneSharp } from "react-icons/io5";

function AppDev() {
  return (
    <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-20'>
      <div className='w-[90%] lg:w-[40%]'>
        <img src={mobapp} alt="" />
      </div>
      <div className='w-[90%] lg:w-[40%] flex flex-col lg:justify-start justify-center items-center lg:items-start'>
        <h2 className='text-2xl sm:text-4xl mb-8 text-cyan-400 font-semibold lg:text-left text-center'>Based on Functionality and Purpose</h2>
        <div className='text-md sm:text-xl tracking-wider leading-loose'>
          <p className='flex items-center gap-4'><IoCheckmarkDoneSharp className='text-cyan-400'/> Social Media Apps</p>
          <p className='flex items-center gap-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Gaming Apps</p>
          <p className='flex items-center gap-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Productivity Apps</p>
          <p className='flex items-center gap-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Entertainment Apps</p>
          <p className='flex items-center gap-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>E-commerce Apps</p>
          <p className='flex items-center gap-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Health & Fitness Apps</p>
          <p className='flex items-center gap-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Education & Learning Apps</p>
          <p className='flex items-center gap-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Finance & Banking Apps</p>
          <p className='flex items-center gap-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Travel & Navigation Apps</p>
          <p className='flex items-center gap-4'><IoCheckmarkDoneSharp className='text-cyan-400'/>Utility Apps</p>
        </div>
      </div>
    </div>
  )
}

export default AppDev