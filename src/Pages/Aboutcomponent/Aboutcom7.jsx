import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

const Aboutcom7 = () => {
  return (
    <>
    <div className='w-[100%] h-auto flex justify-center items-center'data-aos="zoom-in">
        <div className='w-[50%] flex justify-center items-center gap-10 p-10'>
            <div className='font-semibold text-3xl bg-gray-400  rounded-full p-3 hover:bg-blue-600 hover:text-white'>< FaFacebookF/></div>
            <div  className='font-semibold text-3xl bg-gray-400 rounded-full p-3  hover:bg-green-600 hover:text-white'><BsWhatsapp/></div>
            <div  className='font-semibold text-3xl bg-gray-400 rounded-full p-3  hover:bg-pink-400 hover:text-white'><SiInstagram/></div>
        </div>
    </div>
    </>
  )
}

export default Aboutcom7