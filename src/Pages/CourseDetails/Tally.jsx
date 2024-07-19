import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import tally from '../../assets/tally.png'
import { VscActivateBreakpoints } from "react-icons/vsc";

const Tally = () => {
  return (
    <>
    
    <div className='w-[100%] h-auto bg-black' >

      {/* //part1 */}

          <div className='web1 w-[100%] ' >
          <div className='web w-[100%] min-h-screen flex flex-col justify-center items-center gap-3'>
            <h2 className='md:text-[80px] text-3xl font-semibold text-[#73D1FF] md:mb-10 text-center leading-normal p-6'>Tally</h2>
            <p className='md:text-3xl text-md p-6 font-semibold mb-5 text-white text-center'>Precision and clarity in every financial report</p>
            {/* <button className='md:w-[20%] md:h-[50px] p-2 md:p-0 text-black  border-[rgb(225,115,62)] border-[1px] hover:bg-[rgb(225,115,62)] hover:text-white rounded-lg text-base md:text-xl font-semibold'>Contact Us</button> */}
            {/* <button><IoIosArrowBack /></button> */}
            </div>
          </div>
        {/* //part2 */}

        <div className='w-[100%] max-h-auto h-auto flex flex-col lg:flex-row p-4 sm:p-10 md:p-10 gap-10 md:gap-0 bg-gradient-to-l from-[#73d0ff2b]  to-black py-10 sm:py-20'>
          <div className='lg:w-[50%] w-[100%] flex justify-center items-center'>
            <img src={tally} className='w-[70%] animate-bounceSlow' />
          </div>
          <div className='lg:w-[50%]  lg:p-10 text-white flex flex-col justify-center items-center '>
            <h2 className='lg:text-4xl md:text-3xl text-2xl lg:leading-tight leading-tight font-semibold mb-5 md:mb-0 tracking-wider text-center'>Get the best <span className=' text-[#30CB91] '> Tally </span >course from SDS..</h2>
            <div className='py-4 sm:py-10 p-6'>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4 '><VscActivateBreakpoints className=' text-red-500 mt-2 '/><p>Basics of Accounting</p></div>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-green-500 mt-2 ' /><p>Voucher Entry and Types</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-blue-500 mt-2' /><p>Financial Planning and Analysis</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-pink-500 mt-2' /><p>Practical Case Studies</p></div>
              <div className='flex justify-left items-start  md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-yellow-500 mt-2' /><p>New Features of Tally</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-violet-500 mt-2' /><p>Decision Making using Tally Reports</p></div>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-gray-500 mt-2' /><p>Tally Certification</p></div>
            </div>
          </div>
        </div>
        
    </div>
 
    </>
  )
}

export default Tally