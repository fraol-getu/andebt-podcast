import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../../styles/Footer.css'
const date = new Date()
const year = date.getFullYear()
const Footer = () => {
  return (
    <section className="footer-wrapper  bg-[var(--black)] p-12   mt-16">
        <div className="footer-container py-8  sm:px-12 flex-col ">
         <div className="footer-top relative  flex flex-col justify-center gap-9 flex-wrap p-16 px-20 sm:flex-row sm:justify-between align-middle">
             
             <div className="footer-left flex-col flex gap-6 ">
                <h3 className='text-[1.3rem] text-[var(--white)]'>Links</h3>
                <p className='  text-[var(--secondary)] text-[1rem]'>Follow us on Social media <br/> for exclusive content  and<br/> community hilights connect below</p>
                <div className="footer-icons flex gap-2 text-[var(--white)]">
                <a href="https://www.instagram.com/andebetpodcast/" target="_blank">
                <FaXTwitter />
                </a>
                <a href="https://www.instagram.com/andebetpodcast/" target="_blank">
                <FaInstagram />
                </a>
                <a href="https://www.tiktok.com/@andebetpodcast" target="_blank">
                <FaTiktok />
                </a>
                <a href="https://www.youtube.com/@Andebetpodcast" target="_blank">
                <FaYoutube />
                </a>
                </div>
             </div>

             <div className="footer-middle flex-col flex gap-6">
             <h3 className='text-[1.3rem] text-[var(--white)]'>Explore</h3>
              <h6 className='text-[var(--secondary)] font-thin'>About Us</h6>
              <h6 className='text-[var(--secondary)] font-thin '>Contact</h6>
              <h6 className='text-[var(--secondary)] font-thin'>Faq</h6>
             </div>
             
             <div className='flex-col flex gap-6'>
             <h3 className='text-[1.3rem] text-[var(--white)]'>Adress</h3>
             <h6 className=' text-[var(--secondary)]'>Addisababa, Ethiopa</h6>
             </div>
             
             <div className='flex-col flex gap-6'>
             <h3 className='text-[1.3rem] text-[var(--white)]'>Contact</h3>
             <h6 className=' text-[var(--secondary)]'>+2519047473</h6>
             <h6 className=' text-[var(--secondary)]'>frraol@gmail.com</h6>
             </div>
            
            </div> 
            <div className=' footer-bottom flex justify-between p-10 px-0 sm:px-15  '>
            <h6 className='text-[var(--secondary)]'>© All Rights Reserved {year} | Andebt podcast </h6>
             <a href="https://portfolio-opal-ten-98.vercel.app/" target='_blank'>
            <h6 className='text-[var(--secondary)]'>Devloped by Fraol Getu</h6>
            </a>
            </div>
            </div>
    </section>
  )
}

export default Footer