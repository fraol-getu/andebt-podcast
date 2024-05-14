import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-wrapper bg-[var(--black)] mt-16">
        <div className="footer-container p-4 px-12 flex-col ">
         <div className="footer-top h-[40svh] flex p-16 px-20 justify-between align-middle">
             
             <div className="footer-left flex-col ">
                <h3 className='text-[1.3rem] text-[var(--white)]'>Links</h3>
                <p className=' py-4 text-[var(--secondary)] text-[1rem]'>Follow us on Social media <br/> for exclusive content  and<br/> community hilights connect below</p>
                <div className="footer-icons flex gap-2 text-[var(--white)]">
                <FaXTwitter />
                <FaInstagram />
                <FaTiktok />
                <FaYoutube />
                </div>
             </div>

             <div className="footer-middle flex-col">
             <h3 className='text-[1.3rem] text-[var(--white)]'>Explore</h3>
              <h6 className=' py-3 text-[var(--secondary)] font-thin'>About Us</h6>
              <h6 className='text-[var(--secondary)] font-thin '>Contact</h6>
              <h6 className=' py-3 text-[var(--secondary)] font-thin'>Faq</h6>
             </div>
             
             <div className='flex-col'>
             <h3 className='text-[1.3rem] text-[var(--white)]'>Adress</h3>
             <h6 className=' py-3 text-[var(--secondary)]'>Addisababa, Ethiopa</h6>
             </div>
             
             <div className='flex-col'>
             <h3 className='text-[1.3rem] text-[var(--white)]'>Contact</h3>
             <h6 className=' py-2 text-[var(--secondary)]'>+2519047473</h6>
             <h6 className=' py-2 text-[var(--secondary)]'>frraol@gmail.com</h6>
             </div>
            
            </div> 
            </div>
    </section>
  )
}

export default Footer