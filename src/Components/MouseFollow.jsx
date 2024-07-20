import React, { useState, useEffect, useRef } from 'react';

function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const targetPosition = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (event) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };
      setIsActive(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsActive(false), 1000);
    };

    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (mainContent) {
        mainContent.removeEventListener('mousemove', handleMouseMove);
      }
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      setPosition((prevPosition) => {
        const dx = targetPosition.current.x - prevPosition.x;
        const dy = targetPosition.current.y - prevPosition.y;
        return {
          x: prevPosition.x + dx * 0.1, // Adjust the factor for delay
          y: prevPosition.y + dy * 0.1, // Adjust the factor for delay
        };
      });
      rafId.current = requestAnimationFrame(followMouse);
    };

    rafId.current = requestAnimationFrame(followMouse);

    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const circleStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    width: isActive ? '20px' : '10px',
    height: isActive ? '20px' : '10px',
    backgroundColor: 'rgba(139, 92, 246, 0.7)',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.3s ease, height 0.3s ease',
    zIndex: 9999,
  };

  return <div style={circleStyle}></div>;
}

export default MouseFollower;
