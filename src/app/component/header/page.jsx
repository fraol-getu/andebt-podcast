"use client"
import React, { useState } from "react";
import '../../styles/Header.css'
import { BsSoundwave } from "react-icons/bs";
import { IoIosPlayCircle } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import useMenuState from "@/app/menu";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  
  const { isOpen, toggleMenu } = useMenuState();

  
  return (
    <section className={twMerge("header-wrapper bg- relative")}>
      <div className="overflow-x-hidden header-top align-middle  flex justify-between p-12 px-12" >
        
        <h2 className="text-[var(--white)] text-[1.7rem] flex">Andebt</h2>
        
        <div style={{  display: isOpen ? 'flex' : 'none'  }} className= {twMerge(" z-10 text-[var(--black)] md:text-[var(--white)] header-menu md:right-[40%] md:mt-3 right-0   md:bg-transparent md:p-0 md:flex-row md:flex gap-12 text-[1.1rem] font-500 bg-[var(--grey)] p-[7rem] ml-[5rem] absolute px-[9rem] flex flex-col  justify-center g-[8rem] transtion-all 300ms ease-in")}>
          <h5>Episode</h5>
          <h5>Review</h5>
          <h5>Blog</h5>
          <h5>Contact</h5>
        </div>
        
        <div className="header-right md:flex gap-4 hidden z-[-1px]">
          <button className="w-[6.3rem] h-[2.6rem] rounded-[1.6rem] bg-black text-[var(--white)] ">
            LogIn
          </button>
          <button className="w-[6.5rem] h-[2.6rem] rounded-[1.6rem] border-[var(--white)] border-solid border-[1px] bg-none text-[var(--white)]">
            Subscribe
          </button>
        </div>
        <button className="flex md:hidden z-50 right-5 text-[var(--black)] absolute" onClick={toggleMenu}>
        {isOpen ? <IoCloseOutline size={35} className=" "/>  : <MdMenu size={35} className=" 
          "  />}
        
          

          </button>
        

        
      </div>

      <div className="hero-container flex-col mt-[1.8rem] absolute px-40 md:px-60 md:mt-4 ">
       <h1 className="text-[var(--green)] font-bold   text-[3.5rem] sm:text-[4rem] md:text-[4.5rem]">WE Talk,<br/> YOU LISTEN</h1>
        <h4 className="text-[var(--white)] text-[1rem] md:text-[1.1rem]">The most interactive show on the internet</h4>
        <button className=" p-5 flex gap-2 justify-start  align-middle w-[15.3rem] h-[3.9rem]  mt-8 rounded-[2rem] font-[550] bg-[var(--green)] text-[var(--black]" >
          Start listening
          <div className="flex"><BsSoundwave /><BsSoundwave /><BsSoundwave />
          <BsSoundwave /></div> <IoIosPlayCircle />


</button>
      </div>
    </section>
  );
};

export default Header;
