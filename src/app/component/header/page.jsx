import React from "react";
import '../../styles/Header.css'
import { BsSoundwave } from "react-icons/bs";
import { IoIosPlayCircle } from "react-icons/io";

const Header = () => {
  return (
    <section className="header-wrapper bg- relative">
      <div className="header-top align-middle flex justify-between p-12 px-18">
        
        <h2 className="text-[var(--white)] text-[1.7rem] flex">Andebt</h2>

        <div className="header-menu flex gap-6 text-[var(--white)] text-[1.1rem] font-500">
          <h5>Episode</h5>
          <h5>Review</h5>
          <h5>Blog</h5>
          <h5>Contact</h5>
        </div>
        <div className="header-right flex gap-4">
          <button className="w-[6.3rem] h-[2.6rem] rounded-[1.6rem] bg-black text-[var(--white)]">
            LogIn
          </button>
          <button className="w-[6.5rem] h-[2.6rem] rounded-[1.6rem] border-[var(--white)] border-solid border-[1px] bg-none text-[var(--white)]">
            Subscribe
          </button>
        </div>
      </div>

      <div className="hero-container flex-col px-60 mt-19">
       <h1 className="text-[var(--green)] font-bold text-[5rem]">WE Talk,<br/> YOU LISTEN</h1>
        <h4 className="text-[var(--white)] text-[1.3rem]">The most interactive show on the internet</h4>
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
