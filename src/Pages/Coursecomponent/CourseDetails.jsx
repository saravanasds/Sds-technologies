import React from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
import coursebg from "../../assets/coursebg.png"

const CourseDeatils = () => {

  const getWavingText = (text) => text.split("").map((char, index) => (
    <span key={index} style={{ "--i": index }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  const courseTitleWaving = getWavingText("Courses");

  return (
    <>

      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 mx-auto opacity-40 bg-cover bg-center animate-bg-image backdrop-blur-sm" style={{ backgroundImage: `url(${coursebg})`, backgroundPosition: 'center', backgroundSize: "fit", backgroundRepeat: "no-repeat", backgroundBlendMode: "hard-light" }}></div>

        <div className='w-[100%] flex flex-col justify-center items-center sm:overflow-hidden'>
          <h2 className='w-[650px] font-bold text-[#73D1FF] mt-20 bg-gradient-to-r(rgb(43,21,93),rgb(117,65,191)) text-center mb-5 text-5xl md:text-6xl lg:text-7xl waving2 tracking-wider' data-aos="zoom-in">{courseTitleWaving}</h2>
          <div className='font-bold text-3xl sm:text-4xl lg:text-6xl py-10 text-white bounceMedium flex justify-center items-center'>
            <FaAngleDoubleDown />
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDeatils