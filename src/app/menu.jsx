"use client"
import { useState, useEffect } from 'react';

const useMenuState = (initialState = true) => {
  const [isOpen, setIsOpen] = useState(initialState);

  // Close menu on window resize if client width is less than 800px
  useEffect(() => {
    const handleResize = () => {
      if (document.documentElement.clientWidth <= 800 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return { isOpen, toggleMenu };
};

export default useMenuState;