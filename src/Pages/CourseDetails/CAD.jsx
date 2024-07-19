import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import cad from '../../assets/cad1.png'
import { VscActivateBreakpoints } from "react-icons/vsc";


const CAD = () => {
  return (
    <>
    
    <div className='w-[100%] h-auto bg-black' >

      {/* //part1 */}

          <div className='web1 w-[100%] '  >
          <div className='web w-[100%] min-h-screen flex flex-col justify-center items-center gap-3 tracking-wider'>
            <h2 className='md:text-[70px] text-3xl font-semibold text-[#73D1FF] md:mb-10 text-center leading-normal p-6'>Computer Aided Dafting</h2>
            <p className='md:text-3xl text-md font-semibold mb-5 text-center text-white p-6'>The precision of CAD makes the impossible possible</p>
            </div>
          </div>

        {/* //part2 */}

        <div className='w-[100%] max-h-auto h-auto flex flex-col lg:flex-row p-4 sm:p-10 md:p-10 gap-10 md:gap-0 bg-gradient-to-l from-[#73d0ff2b]  to-black py-10 sm:py-20'>
          <div className='lg:w-[50%] w-[100%] flex justify-center items-center'>
            <img src={cad} className='w-[70%] animate-bounceSlow' />
          </div>
          <div className='lg:w-[50%]  lg:p-10 text-white flex flex-col justify-center items-center '>
            <h2 className='lg:text-4xl md:text-3xl text-2xl lg:leading-tight leading-tight font-semibold mb-5 md:mb-0 tracking-wider text-center'>Get the best<span className=' text-[#30CB91] '>  Computer Aided Dafting </span >course from SDS..</h2>
            <div className='py-4 sm:py-10 p-6'>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4 '><VscActivateBreakpoints className=' text-red-500 mt-2 '/><p>Autocad</p></div>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-green-500 mt-2 ' /><p>Drafting Technical</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-blue-500 mt-2' /><p>Focuses on the techniques</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-pink-500 mt-2' /><p>Computer Fundamentals </p></div>
              <div className='flex justify-left items-start  md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-yellow-500 mt-2' /><p>Practical</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-violet-500 mt-2' /><p>Planning and Execution</p></div>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-gray-500 mt-2' /><p>Computer vision</p></div>
            </div>
          </div>
        </div>
        
    </div>
 
    </>
  )
}

export default CAD