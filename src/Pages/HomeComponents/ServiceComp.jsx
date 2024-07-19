import React from 'react'
import playgoogle from "../../assets/playstore-goole.png"
import playapple from "../../assets/playstore-apple.png"
import mobile from "../../assets/mobile.png"
import os from "../../assets/os.png"
import bg8 from "../../assets/bg8.png"

function ServiceComp() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-evenly text-white min-h-auto md:p-10 w-[100%]  mt-4 rounded-xl mb-10 bg-opacity-20 backdrop-blur-lg shadow-lg py-10 "
        style={{
          background: `url(${bg8})`
        }}
        data-aos="fade-up" data-aos-delay="300"
      >
        <div className="w-[100%] flex flex-col md:flex-row md:p-8 gap-5 md:gap-0 ">

          <div className="w-[100%] md:w-[50%]  flex flex-col justify-center items-center mb-4 gap-2" data-aos="fade-right" data-aos-delay="300">

            <div className='mb-4 text-center w-full '>
              <h2 className="w-full text-2xl sm:text-3xl md:text-5xl font-bold text-center md:mb-8 text-[#73D1FF] tracking-wider">Try our App from..</h2>
            </div>
            <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row justify-center items-center gap-3'>
              <a href="https://play.google.com/store/apps/details?id=com.aegiiz.NammaPalaniApp&pcampaignid=web_share" target='blank'>
                <img src={playgoogle} alt="" className='w-[200px] border-[2px] border-gray-400 rounded-lg' />
              </a>
              <img src={playapple} alt="" className='w-[200px] ' />

            </div>

            <div className='flex flex-col'>
              <img src={os} alt="" className='w-[200px] sm:w-[250px] animate-bounceSlow' />

              <div className='flex justify-center items-center'>
                <button className="relative inline-flex items-center justify-center p-4 px-20 py-3 overflow-hidden font-medium text-[#73D1FF] transition duration-300 ease-out border-[1px] border-[#73D1FF] rounded-md shadow-md group animate-pulse" style={{ boxShadow: '0 0 24px #4D6B9C' }}>

                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-[#73D1FF] to-purple-500 group-hover:translate-x-0 ease font-bold">
                    Try Now
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-[#73D1FF] transition-all duration-300 transform group-hover:translate-x-full ease">Try Now</span>
                  <span className="relative invisible">Try Now</span>

                </button>
              </div>
            </div>
          </div>

          <div className='w-[100%] md:w-[50%] flex justify-center items-center' data-aos="fade-left" data-aos-delay="300">
            <img src={mobile} alt="" className='w-[350px] ' />
          </div>

        </div>
        {/*  */}

      </div>
    </>
  )
}

export default ServiceComp