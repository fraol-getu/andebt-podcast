import React from 'react'

const Guest = () => {
  return (
    <section id='guest' className='suggest-wrapper p-10 sm:p-28 py-20'>
        <div className="suggest-container mr-6 px-0 sm:p-10 flex flex-col md:flex-row gap-2 align-middle justify-around">
         <h1  className="text-[var(--black)] font-bold mr-[3rem]  text-[2.5rem] sm:text-[3rem] md:text-[3.5rem]">Suggest us your <br/> favorite guest</h1>
         <div className="suggest-right  md:mr-[5rem] gap-8 flex-col flex align-middle">
          <input type='text'  className='w-[100%]  sm:w-[100%] md:w-[200%] p-2 h-[3rem] bg-[--grey]' placeholder='Guest Name' />
           <input type="text"  className='w-[100%] sm:w-[100%] md:w-[200%] p-2 h-[3rem] bg-[--grey] border-[--black]' placeholder='Linkdin Profile' />
           <input type="text" className='w-[100%] sm:w-[100%] md:w-[200%]  px-2  h-[8rem] bg-[--grey]' placeholder='Why did you suggest the guest' />
           <button className="bg-[--green]  w-[7rem] bottom-0  text-[.8rem] h-[2.7rem] rounded-[2.5rem]">Suggest</button>

         </div>
        </div>
    </section>
  )
}

export default Guest