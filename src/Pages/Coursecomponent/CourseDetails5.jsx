import React from 'react'
import offigirl2 from '../../assets/offigirl2.jpg'

const CourseDetails5 = () => {
  return (
    <>

      <div className='w-[100%] min-h-screen flex flex-col lg:flex-row justify-center items-center '>

        <div className='lg:w-[50%] flex justify-center lg:justify-end items-center lg:items-end md:p-10 ' data-aos="slide-right" data-aos-delay="300">

          <div className='w-[80%] md:border-2 md:border-gray-900 '>
            <img src={offigirl2} className='' style={{ boxShadow: "2px 2px 12px #73D1FF" }} />
          </div>

        </div>

        <div className='lg:w-[50%] p-5 flex flex-col justify-center lg:justify-start items-center lg:items-start items-left  text-white ' data-aos="slide-left" data-aos-delay="300">
          <div className='w-[90%] sm:w-[80%]'>
            <h2 className=' md:text-4xl text-2xl lg:font-semibold font-medium  md:leading-relaxed leading-relaxed tracking-wider '>
              Take the next step toward your <span className='text-[#73D1FF]'>personal and professional </span>goals with SDS..</h2>
            <p className='md:text-lg py-6  text-border tracking-wider'>Join now to step into your dream job and achieve your goal with us.</p>
            <button className='px-5 py-2 text-xl text-white font-medium bg-gradient-to-l from-[#73D1FF] to-black rounded-lg animate-bounceMedium ' style={{ boxShadow: "2px 2px 4px #73D1FF" }}>Contact Us</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default CourseDetails5