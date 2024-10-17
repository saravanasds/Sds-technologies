// Aboutcomponent/AboutcomIframe.jsx

import React from 'react';

function AboutcomIframe() {
  return (
    <div className="w-full flex justify-center items-center my-10 mb-20" data-aos="fade-up" data-aos-delay="300">
      <div className="w-[70%] bg-white p-10 aspect-w-16 aspect-h-9  rounded-xl overflow-hidden border-[1px] border-gray-800 transition-all duration-300 hover:shadow-[0px_0px_20px_4px_rgba(77,107,156,0.6),_0px_0px_30px_8px_rgba(0,0,0,0.8)]">
        <iframe 
          src="https://www.youtube.com/embed/muiPEtfSOuY?si=oZxwzgUy_MYJpxXK" 
          title="YouTube video player"
          className="w-full h-[50vh] md:h-[80vh] "
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default AboutcomIframe;
