"use client";
import React, { useState } from "react";
import "../../styles/Header.css";
import { BsSoundwave } from "react-icons/bs";
import { IoIosPlayCircle } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import useMenuState from "@/app/menu";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../../asset/image/logo.png";
import Link from "next/link";
const Header = () => {
  const [menuOpen, setMenOpen] = useState(false);
  const GetMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
// /

  return (
    <section
      className={twMerge(
        "header-wrapper overflow-x-hidden  overflow-y-hidden bg- relative"
      )}
    >
      <div className="overflow-x-hidden header-top align-middle  flex justify-between p-12 md:p-20 px-4">
        <div>
          <img src={Logo.src} className="" width={160} height={150} alt="mm" />
        </div>
        <div
          style={GetMenuStyle(menuOpen)}
          className={twMerge(
            " z-10 text-[var(--black)] md:mt-2 md:text-[var(--white)] hover:cursor-pointer header-menu md:right-[40%]  right-0   md:bg-transparent md:p-0 md:flex-row text-[1rem] md:flex gap-8 lg:text-[1.1rem] font-500 bg-[var(--grey)] p-[7rem] ml-[5rem] absolute px-[9rem] flex flex-col  justify-center g-[8rem] transtion-all 300ms ease-in"
          )}
        >
          <a href="/">
            <h5>Home</h5>
          </a>
          <a href="#popular">
            <h5>Popular</h5>
          </a>
          <a href="#latest">
            <h5>Latest</h5>
          </a>
          <a href="#guest">
            <h5>Suggest</h5>
          </a>
        </div>

        <div className="header-right md:flex gap-4 hidden z-[-1px]">
          <button className="w-[6.3rem] h-[2.6rem] rounded-[1.6rem] bg-black text-[var(--white)] ">
            LogIn
          </button>
          <a href="https://www.youtube.com/@Andebetpodcast" target="_blank">
            <button className="w-[6.5rem] h-[2.6rem] rounded-[1.6rem] border-[var(--white)] border-solid border-[1px] bg-none text-[var(--white)]">
              Subscribe
            </button>
          </a>
        </div>
        <button
          className="flex md:hidden z-50 right-5 text-[var(--black)] absolute"
          onClick={() => setMenOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <IoCloseOutline size={35} className=" " />
          ) : (
            <MdMenu
              size={35}
              className=" 
          "
            />
          )}
        </button>
      </div>

      <div className="hero-container flex-col mt-[.8rem] absolute px-20 sm:px-40  sm:mt-0  md:px-60 md:mt-4 ">
        <h1 className="text-[var(--green)] font-bold   text-[3.3rem]  md:text-[4.5rem]">
          WE Talk,
          <br /> YOU LISTEN
        </h1>
        <h4 className="text-[var(--white)] text-[1rem] md:text-[1.1rem]">
          The most interactive show on the internet
        </h4>
        <button className=" p-5 flex gap-2 justify-start  align-middle w-[15.3rem] h-[3.9rem]  mt-8 rounded-[2rem] font-[550] bg-[var(--green)] text-[var(--black]">
          Start listening
          <div className="flex">
            <BsSoundwave />
            <BsSoundwave />
            <BsSoundwave />
            <BsSoundwave />
          </div>{" "}
          <IoIosPlayCircle />
        </button>
      </div>
    </section>
  );
};

export default Header;
