import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

import ai from '../../assets/ai3d.png'
import { VscActivateBreakpoints } from "react-icons/vsc";


const Ai = () => {
  return (
    <>
    <div className='w-[100%] h-auto bg-black'>

      {/* //part1 */}
      
      <div className='web1 w-[100%] '  >
          <div className='web w-[100%] min-h-screen flex flex-col justify-center items-center gap-3 tracking-wider'>
            <h2 className='lg:text-[80px] md:text-5xl text-3xl font-semibold text-[#73D1FF] md:mb-10 p-4 text-center'>Artificial Intelligence</h2>
            <p className='lg:text-2xl md:text-2xl text-md p-6 font-semibold mb-5 text-center text-white'>Artificial intelligence is the future, and the future is here..</p>
            </div>
          </div>

      {/* //part2 */}

        <div className='w-[100%] max-h-auto h-auto flex flex-col lg:flex-row p-4 sm:p-10 md:p-10 gap-10 md:gap-0 bg-gradient-to-l from-[#73d0ff2b]  to-black py-10 sm:py-20'>
          <div className='lg:w-[50%] w-[100%] flex justify-center items-center'>
            <img src={ai} className='w-[70%] animate-bounceSlow' />
          </div>
          <div className='lg:w-[50%]  lg:p-10 text-white flex flex-col justify-center items-center '>
            <h2 className='lg:text-4xl md:text-3xl text-2xl lg:leading-tight leading-tight font-semibold mb-5 md:mb-0 tracking-wider text-center'>Get the best <span className=' text-[#30CB91] '> Artificial Intelligence </span >course from SDS..</h2>
            <div className='py-4 sm:py-10 p-6'>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4 '><VscActivateBreakpoints className=' text-red-500 mt-2 '/><p>Python Course</p></div>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-green-500 mt-2 ' /><p>AI Programming with Python</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-blue-500 mt-2' /><p>Deep Learning Specialization</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-pink-500 mt-2' /><p>Chatbot AI </p></div>
              <div className='flex justify-left items-start  md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-yellow-500 mt-2' /><p>AI concepts</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-violet-500 mt-2' /><p>Including machine learning</p></div>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-gray-500 mt-2' /><p>Robotics</p></div>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-orange-500 mt-2' /><p>AI algorithms and techniques</p></div>
            </div>
          </div>
        </div>

     {/* //part3 */}
{/* 
     <marquee behavior="smooth" direction="left" scrollamount="15" >
       <div className='w-[100%] h-[500px] p-20 md:p-10 mt-20'>
          <div className='flex justify-center items-center  px-10'>
          <div className='flex w-[400px] rotate-45 gap-10 '>
          <div className='w-[350px] h-[200px] border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]  hover:bg-gray-200 bg-blue-300 rounded-full p-2'></p>
              </div>
              <div className='w-[350px] h-[200px] border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]  hover:bg-gray-200 bg-orange-300 rounded-full text-xl font-semibold px-5'>Choose Your Path</p>
              </div>
           </div>
           
           <div className='flex w-[400px] rotate-45  gap-10'>
           <div className='w-[350px] h-[200px] b border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]   hover:bg-gray-200 bg-green-300 rounded-full text-xl font-semibold px-2'>Learning Resourses</p>
              </div>
              <div className='w-[350px] h-[200px] border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]   hover:bg-gray-200 bg-yellow-300 rounded-full text-xl font-semibold px-2'>Hands on Practice</p>
              </div>
           </div>

           <div className='flex w-[400px] rotate-45  gap-10'>
           <div className='w-[350px] h-[200px] border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]   hover:bg-gray-200 bg-red-400 rounded-full text-xl font-semibold px-2'>Real World Project</p>
              </div>
              <div className='w-[350px] h-[200px] border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]   hover:bg-gray-200 bg-pink-400 rounded-full text-xl font-semibold px-7'>Stay Updated</p>
              </div>
           </div>

           <div className='flex w-[400px] rotate-45  gap-10'>
           <div className='w-[350px] h-[200px] border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]   hover:bg-gray-200 bg-indigo-400 rounded-full text-xl font-semibold px-20'>Launch</p>
              </div>
              <div className='w-[350px] h-[200px border-blue-500  border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]  hover:bg-gray-200 bg-blue-300 rounded-full p-2'></p>
              </div>
           </div>

          </div>
        </div>
       </marquee> */}
        

    </div>
    </>
  )
}

export default Ai