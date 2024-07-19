import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrolled > windowHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const progress = (scrolled / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-10 right-10 z-[99] bg-[#73D1FF] hover:shadow-lg hover:shadow-black p-[2px] rounded-full shadow-md transition duration-300 cursor-pointer"
          onClick={scrollToTop}
        >
          <div className="relative w-12 h-12">
            <FaArrowUp className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black hover:text-gray-400 text-2xl hover:scale-125 transition-all 300ms" />
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                stroke="black"
                strokeWidth="3"
                strokeDasharray={`${scrollProgress}, 100`}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />



            </svg>
          </div>
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;