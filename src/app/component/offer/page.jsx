import React from "react";
import { SiAudioboom } from "react-icons/si";
import { SiContentful } from "react-icons/si";
import { BsPeopleFill } from "react-icons/bs";
import { GiPerspectiveDiceOne } from "react-icons/gi";

const Offer = () => {
  return (
    <section className="offer-wrapper mb-[8rem] top-0 overflow-x-hidden px-0 sm:px-2 ">
      <div className="offer-container  px-2 sm:px-10 flex justify-center align-middle flex-col">
        <div className="offer-top gap-2 translate-x-[18%]  sm:translate-x-[25%]  overflow-x-hidden  px-14 ">
          <h2 className="text-[--black] text-center text-[1.7rem] md:text-[2rem]  lg:text-[2.5rem] w-[50%]">
            We're Offer The Best For You
          </h2>
          <p className="text-[--blackgrey] p-1 flex justify-center w-[57%] font-[50] lg:text-[0.8rem] text-[0.7rem]">
            lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            sapiente tempora, minima molestiae quibusdam, exercitationem quae
            fuga ipsum labore doloremque, reiciendis repudiandae vero.
          </p>
        </div>
        <div className="offer-bottom  px-2 sm:px-24 translate-x-[25%] sm:translate-x-[15%]  lg:translate-x-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-2  gap-2 justify-center align-middle mt-[3rem] ">
          <div className="bottom-container  flex align-middle justify-center flex-col gap-3">
            <span className="bg-[--green] text-center w-[3.8rem] ml-12 h-[4rem] p-5 px-5 rounded-[1rem]">
              <SiAudioboom className="text-[--white] text-[1.6rem]  text-center" />
            </span>
            <h4 className="text-[1.2rem] text-[--black] font-bold">
              High Quality audio
            </h4>
            <p className=" ml-2 mb-1 text-[--blackgrey] w-[60%] text-[0.8rem] font-[500]">
              {" "}
              Slorem ipsum dolor sit amet consectetur adipisicing elit lorem
              ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>

          <div className="bottom-container  flex align-middle justify-center flex-col gap-3">
            <span className="bg-[--green] text-center w-[3.8rem] ml-12 h-[4rem] p-5 px-5 rounded-[1rem]">
              <SiContentful className="text-[--white] text-[1.6rem]  text-center" />
            </span>
            <h4 className="text-[1.2rem] text-[--black] font-bold">
              Intersting Content
            </h4>
            <p className=" ml-2 mb-1 text-[--blackgrey] w-[60%] text-[0.8rem] font-[500]">
              {" "}
              Slorem ipsum dolor sit amet consectetur adipisicing elit lorem
              ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>

          <div className="bottom-container  flex align-middle justify-center flex-col gap-3">
            <span className="bg-[--green] text-center w-[3.8rem] ml-12 h-[4rem] p-5 px-5 rounded-[1rem]">
              <BsPeopleFill className="text-[--white] text-[1.6rem]  text-center" />
            </span>
            <h4 className="text-[1.2rem] text-[--black] font-bold">
              Exeperianced Guests
            </h4>
            <p className=" mb-1 ml-2 text-[--blackgrey] w-[60%] text-[0.8rem] font-[500]">
              {" "}
              Slorem ipsum dolor sit amet consectetur adipisicing elit lorem
              ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>

          <div className="bottom-container  flex align-middle justify-center flex-col gap-3">
            <span className="bg-[--green] text-center w-[3.8rem] ml-12 h-[4rem] p-5 px-5 rounded-[1rem]">
              <GiPerspectiveDiceOne className="text-[--white] text-[1.6rem]  text-center" />
            </span>
            <h4 className="text-[1.2rem] text-[--black] font-bold">
              New Perspective
            </h4>
            <p className=" mb-1 ml-2 text-[--blackgrey] w-[60%] text-[0.8rem] font-[500]">
              {" "}
              Slorem ipsum dolor sit amet consectetur adipisicing elit lorem
              ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
