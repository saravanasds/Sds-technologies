import React from 'react'
import ProjComp from './ProjectComponent/ProjComp'
import OurProjects from './ProjectComponent/OurProjects'
import NammaPalani from './HomeComponents/NammaPalani'
import ServiceComp from './HomeComponents/ServiceComp'

import { Helmet } from "react-helmet";

function Projects() {
  return (
    <>
          <div className='bg-black overflow-hidden'>
      <ProjComp />
      
      <OurProjects />

      <div>
        <h1 className=' w-full text-2xl sm:text-4xl text-center font-bold text-[#73D1FF] text-border-bottom p-2 pt-5 mb-3'
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Experience our Own Business Application
        </h1>
        <div className='px-10'>
          <NammaPalani />
        </div>
        <ServiceComp />
      </div>

    </div>
    </>
  )
}

export default Projects