import React, { useState, useEffect } from 'react';

function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsActive(true); // Activate the mouse follower on mouse move
      clearTimeout(timeoutId); // Clear previous timeout
      timeoutId = setTimeout(() => setIsActive(false), 1000); // Deactivate after 3 seconds of no movement
    };

    // Add the event listener to the home section instead of the whole window
    const homeSection = document.querySelector('.home-section');
    homeSection.addEventListener('mousemove', handleMouseMove);

    return () => {
      homeSection.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId); // Clean up timeout on component unmount
    };
  }, []);

  const circleStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    width: isActive ? '30px' : '10px', // Adjust size based on isActive state
    height: isActive ? '30px' : '10px', // Adjust size based on isActive state
    backgroundColor: 'rgba(139, 92, 246, 0.7)', // Tailwind's purple-500 with opacity
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.3s ease, height 0.3s ease', // Smooth transition for size change
    zIndex: '9999',
  };

  return <div style={circleStyle}></div>;
}

export default MouseFollower;
