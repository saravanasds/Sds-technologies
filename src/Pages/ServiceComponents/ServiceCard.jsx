import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ServiceCard({ title, description, Icon, link, color }) {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className="p-3 sm:p-8 rounded-lg shadow-md shadow-black transition-shadow bg-cover bg-center"
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
        transition: { duration: 0.2 },
      }}
      data-aos="fade-up"
    >
      <div className="flex items-center mb-4">
        <motion.div
          whileHover={{
            scale: 1.1,
            x: [0, -5, 5, -5, 5, -5, 0],
            transition: { duration: 0.9, ease:'easeInOut' },
          }}
        >
          <Icon className="w-12 h-12 text-white animate-bounceMedium" style={{ color }}/>
        </motion.div>
        <motion.div
          className="p-2 inline rounded-lg transition-shadow"
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 5px 20px rgba(59, 130, 246, 0.5)',
            transition: { duration: 0.3 },
          }}
        >
          <h2 className="text-md md:text-xl font-bold text-white p-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent uppercase">{title}</h2>
        </motion.div>
      </div>
      <p className='text-white tracking-wider '>{description}</p>
      <motion.div
        whileHover={{
          backgroundColor: 'rgba(59,130, 246, 0.5)',
          color: '#000000',
          x: 10,
          transition: { duration: 0.3, ease: 'easeInOut'},
        }}
        className="mt-4 inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded"
      >
        <Link to={link} className="block text-white" onClick={scrollToTop}>
          Click for More
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default ServiceCard;
