import React from "react";
import app1 from "../../assets/computer2.png";
import { VscActivateBreakpoints } from "react-icons/vsc";


const App1 = () => {
  return (
    <>
      <div className="w-[100%] h-auto bg-black">
        {/* //part1 */}

        <div>

          <div className="web w-[100%] min-h-screen flex flex-col justify-center items-center gap-3 tracking-wider">
            <h2 className="lg:text-[80px] md:text-5xl text-3xl font-semibold text-[#73D1FF] lg:mb-10">
              App Development
            </h2>
            <p className="lg:text-[20px] md:text-xl text-md font-semibold  text-center lg:mb-5 text-white p-6">
              Mobile apps are becoming the main vehicle for brands to engage
              with their customers
            </p>
          </div>

        </div>

        {/* //part2 */}

        <div className='w-[100%] max-h-auto h-auto flex flex-col lg:flex-row p-4 sm:p-10 md:p-10 gap-10 md:gap-0 bg-gradient-to-l from-[#73d0ff2b]  to-black py-10 sm:py-20'>
          <div className='lg:w-[50%] w-[100%] flex justify-center items-center'>
            <img src={app1} className='w-[70%] animate-bounceSlow' />
          </div>
          <div className='lg:w-[50%]  lg:p-10 text-white flex flex-col justify-center items-center '>
            <h2 className='lg:text-4xl md:text-3xl text-2xl lg:leading-tight leading-tight font-semibold mb-5 md:mb-0 tracking-wider text-center'>Get the best <span className=' text-[#30CB91] '> App Development </span >course from SDS..</h2>
            <div className='py-4 sm:py-10 p-6'>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4 '><VscActivateBreakpoints className=' text-red-500 mt-2 text-2xl'/><p>Fundamentals of Android development</p></div>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-green-500 mt-2 ' /><p>Introduction to iOS app</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-blue-500 mt-2' /><p>Swift</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-pink-500 mt-2' /><p>Introduce Java </p></div>
              <div className='flex justify-left items-start  md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-yellow-500 mt-2' /><p>Advanced topics in App Dev</p></div>
              <div className='flex  justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-violet-500 mt-2' /><p>React Native</p></div>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-gray-500 mt-2' /><p>Teaches Kotlin</p></div>
              <div className='flex justify-left items-start md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-orange-500 mt-2' /><p>Using web technologies</p></div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default App1;
