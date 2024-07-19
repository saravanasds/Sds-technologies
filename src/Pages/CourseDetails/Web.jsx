import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import web from '../../assets/web.png'
import { VscActivateBreakpoints } from "react-icons/vsc";


const Web = () => {
  return (
    <>

      <div className='w-[100%]  h-auto bg-black '>

        {/* //part1 */}

        <div className='web1 w-[100%]  '>
          <div className='web w-[100%] min-h-screen flex flex-col justify-center items-center gap-3 p-5'>
            <h2 className='md:text-[70px] text-3xl  font-semibold text-[#73D1FF]  md:mb-5'>Web Development</h2>
            <p className='lg:text-2xl md:text-2xl text-md p-4 font-semibold mb-5 text-center md:py-5 text-white'>Software is a great combination between artistry and engineering, To Make Stunning Websites</p>
            {/* <button className='md:w-[20%] md:h-[50px]  text-base  text-white border-red-500 border-[1px] hover:bg-red-500 hover:text-white rounded-lg lg:text-xl font-semibold p-2 md:p-0'>Contact Us</button> */}

          </div>
        </div>

        {/* //part2 */}


        <div className='w-[100%] max-h-auto h-auto flex flex-col lg:flex-row p-4 sm:p-10 md:p-10 gap-10 md:gap-0 bg-gradient-to-l from-[#73d0ff2b]  to-black '>
          <div className='lg:w-[50%] w-[100%] flex justify-center items-center'>
            <img src={web} className='w-[80%] ' />
          </div>
          <div className='lg:w-[50%]  lg:p-10 text-white flex flex-col justify-center items-center'>
            <h2 className='lg:text-4xl md:text-3xl  text-2xl lg:leading-tight leading-tight font-semibold mb-5 md:mb-0 tracking-wider text-center'>Get the best <span className=' text-[#30CB91] '> Web Development </span >course from SDS..</h2>
            <div className='py-4 sm:py-10'>
              <div className='flex justify-left items-center md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-red-500' /><p>Front-end development</p></div>
              <div className='flex justify-left items-center md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-green-500' /><p>Back-end development</p></div>
              <div className='flex  justify-left items-center md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-blue-500' /><p>Full-stack development</p></div>
              <div className='flex  justify-left items-center md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-pink-500' /><p>Web designing</p></div>
              <div className='flex justify-left items-center  md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-yellow-500' /><p>Responsive design</p></div>
              <div className='flex  justify-left items-center md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-violet-500' /><p>Frameworks and libraries</p></div>
              <div className='flex justify-left items-center md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-gray-500' /><p>Testing and debugging</p></div>
              <div className='flex justify-left items-center md:text-2xl text-md sm:text-xl gap-5 leading-loose mb-4'><VscActivateBreakpoints className=' text-orange-500' /><p>Deployment and maintenance</p></div>
            </div>
          </div>
        </div>

      </div>

      {/* part-3 */}

      {/* <div className='w-full h-auto p-20 md:p-10 bg-black'>
        <div className='flex justify-center items-center flex-wrap gap-10'>
          {[
            { color: 'bg-blue-800', text: '' },
            { color: 'bg-orange-300', text: 'Choose Your Path' },
            { color: 'bg-green-300', text: 'Learning Resources' },
            { color: 'bg-yellow-300', text: 'Hands-on Practice' },
            { color: 'bg-red-400', text: 'Real World Project' },
            { color: 'bg-pink-400', text: 'Stay Updated' },
            { color: 'bg-indigo-400', text: 'Launch' },
            { color: 'bg-blue-300', text: '' }
          ].map((item, index) => (
            <div key={index} className='relative w-[350px] h-[200px] border-4 border-transparent rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-transform duration-500 hover:scale-105'>
              <div className={`w-full h-full ${item.color} flex justify-center items-center transition-colors duration-500 hover:bg-opacity-90`}>
                <p className='text-center text-white text-2xl font-semibold px-5'>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}






    </>
  )
}

export default Web