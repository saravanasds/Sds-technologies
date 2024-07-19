import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import coa from '../../assets/coa.png'
import { VscActivateBreakpoints } from "react-icons/vsc";


const COA = () => {
  return (
    <>
    
    <div className='w-[100%] h-auto bg-black' >

      {/* //part1 */}

          <div className='web1 w-[100%] '>
          <div className='web w-[100%] min-h-screen flex flex-col justify-center items-center gap-3'>
            <h2 className='lg:text-[70px]  text-3xl font-semibold text-[#73D1FF] md:mb-10 text-center leading-normal p-6'>Certificate in Office Application</h2>
            <p className='lg:text-2xl text-md p-6 font-semibold mb-5 text-center md:py-5 text-white'>The computer was born to solve problems that did not exist before</p>
            </div>
          </div>

        {/* //part2 */}

        <div className='w-[100%] max-h-auto h-auto flex flex-col lg:flex-row p-4 sm:p-10 md:p-10 gap-10 md:gap-0 bg-gradient-to-l from-[#73d0ff2b]  to-black py-10 sm:py-20'>
          <div className='lg:w-[50%] w-[100%] flex justify-center items-center'>
            <img src={coa} className='w-[70%] animate-bounceSlow' />
          </div>
          <div className='lg:w-[50%]  lg:p-10 text-white flex flex-col justify-center items-center '>
            <h2 className='lg:text-4xl md:text-3xl text-2xl lg:leading-tight leading-tight font-semibold mb-5 md:mb-0 tracking-wider text-center'>Get the best <span className=' text-[#30CB91] '> Certificate in Office Application </span >course from SDS..</h2>
            <div className='py-4 sm:py-10 p-6'>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4 '><VscActivateBreakpoints className=' text-red-500 mt-2 '/><p>Computer Fundamentals & OS</p></div>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-green-500 mt-2 ' /><p>Notepad,Word Pad,Paint</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-blue-500 mt-2' /><p>Browsing and Mailing</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-pink-500 mt-2' /><p>Word,Excel </p></div>
              <div className='flex justify-left items-start  md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-yellow-500 mt-2' /><p>MS Powerpoint and Access</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-violet-500 mt-2' /><p>Typing-English and Tamil</p></div>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-gray-500 mt-2' /><p>Practical and Project</p></div>
            </div>
          </div>
        </div>
        
    </div>
 
    </>
  )
}

export default COA