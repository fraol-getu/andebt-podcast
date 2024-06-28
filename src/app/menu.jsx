"use client"
import { useState, useEffect } from 'react';
import { MdVisibility } from 'react-icons/md';

const useMenuState = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [clientWidth, setClientWidth] = useState(typeof document !== 'undefined' ? document.documentElement.clientWidth : 0)

  // Close menu on window resize if client width is less than 800px
  useEffect(() => {
    const handleResize = () => {
      if (clientWidth < 800) {
      setIsOpen(false)
      } else{
        setIsOpen(true)
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