import React from 'react';
import { motion } from 'framer-motion';

const ServiceHead = () => {
  return (
    <div className='p-10 mt-10'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="sm:max-w-screen-xl mx-auto"
      >
        <h2 className='text-3xl md:text-5xl text-center font-bold text-white tracking-wider mb-10' data-aos="slide-right" data-aos-delay="500">Why <span className='text-[#73D1FF]'>Choose Us?</span></h2>
        <p className='text-md sm:text-xl text-center mb-16 text-white bg-gradient-to-r from-transparent via-gray-900 to-transparent sm:p-8 tracking-wider text-border-bottom ' data-aos="slide-left" data-aos-delay="500">
          Our commitment to excellence and innovation ensures that you receive top-notch services tailored to your specific needs.
          We pride ourselves on our expertise, customer service, and ability to deliver outstanding results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 place-items-center">

          <div className="relative flex items-center w-[250px] h-[250px]  justify-center p-12 rounded-full " data-aos="zoom-in" data-aos-delay="500">
            <motion.div
              className="absolute inset-0 border-b-[4px] border-r-[4px]  border-red-500 rounded-full animate-spinBorder"
            ></motion.div>
            <motion.div
              className="relative flex items-center justify-center text-white  shadow-lg"
             
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 },
              }}
            >
              <p className="text-xl font-semibold text-center">Expertise in the latest technologies</p>
            </motion.div>
          </div>

          <div className="relative flex items-center w-[250px] h-[250px]  justify-center p-12 rounded-full" data-aos="zoom-in" data-aos-delay="500">
            <motion.div
              className="absolute inset-0 border-b-[4px] border-r-[4px]  border-green-500 rounded-full animate-spinBorder"
            ></motion.div>
            <motion.div
              className="relative flex items-center justify-center text-white  shadow-lg"
             
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 },
              }}
            >
              <p className="text-xl font-semibold text-center">Custom solutions tailored to your needs</p>
            </motion.div>
          </div>

          <div className="relative flex items-center w-[250px] h-[250px]  justify-center p-12 rounded-full" data-aos="zoom-in" data-aos-delay="500">
            <motion.div
              className="absolute inset-0 border-b-[4px] border-r-[4px]  border-orange-500 rounded-full animate-spinBorder"
            ></motion.div>
            <motion.div
              className="relative flex items-center justify-center text-white  shadow-lg"
             
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 },
              }}
            >
              <p className="text-xl font-semibold text-center">Proven track record of successful projects</p>
            </motion.div>
          </div>

          <div className="relative flex items-center w-[250px] h-[250px]  justify-center p-12 rounded-full" data-aos="zoom-in" data-aos-delay="500">
            <motion.div
              className="absolute inset-0 border-b-[4px] border-r-[4px]  border-yellow-500 rounded-full animate-spinBorder"
            ></motion.div>
            <motion.div
              className="relative flex items-center justify-center text-white  shadow-lg"
             
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 },
              }}
            >
              <p className="text-xl font-semibold text-center">Dedicated support and maintenance</p>
            </motion.div>
          </div>

          <div className="relative flex items-center w-[250px] h-[250px]  justify-center p-12 rounded-full" data-aos="zoom-in" data-aos-delay="500">
            <motion.div
              className="absolute inset-0 border-b-[4px] border-r-[4px]  border-pink-500 rounded-full animate-spinBorder"
            ></motion.div>
            <motion.div
              className="relative flex items-center justify-center text-white  shadow-lg"
             
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 },
              }}
            >
              <p className="text-xl font-semibold text-center">Commitment to customer satisfaction</p>
            </motion.div>
          </div>

          <div className="relative flex items-center w-[250px] h-[250px]  justify-center p-12 rounded-full" data-aos="zoom-in" data-aos-delay="500">
            <motion.div
              className="absolute inset-0 border-b-[4px] border-r-[4px]  border-lime-500 rounded-full animate-spinBorder"
            ></motion.div>
            <motion.div
              className="relative flex items-center justify-center text-white  shadow-lg"
             
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 },
              }}
            >
              <p className="text-xl font-semibold text-center">Innovative and creative approach</p>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default ServiceHead;
