// "use client";

import React from "react";
import { FaHeadphonesSimple } from "react-icons/fa6";

// `${Youtube_PlayList_Items_Api}?part=snippet&playlistId=hIqOrKmrL3o&list=PLoAjlnctw2_E-w-VmrUq9fX2Wb334P2oP${REACT_APP_YOUTUBE_API_KEY}`

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
const YOUTUBE_API_KEY= "AIzaSyDBxPt5RbGh_zkBlXxLnbX3r9RuNAuRRCE"
async function fetchVideo() {
  const video = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLEuzQPv3uhPWyXhlt9DohwrngKM0stJKV&maxResults=8&key=${YOUTUBE_API_KEY}`, {
    cache: "no-store"
  })

  return video.json()

}

export default async function EXPLORE () {
  const videoList = await  fetchVideo()
    console.log(videoList)
  
  return (
    <section className="explorer-wrapper py-0 px-12">
      <div className="explore-container flex-col  p-10">
        <h2 className="text-[var(--black)] text-center  px-8 text-[2.2rem] font-[600]">
          Explore Episodes
        </h2>
        <div className=" overflow-x-hidden  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-16  gap-x-10  p-8  h-[90%] align-middle">
          {videoList.items.slice(0, 6).map((item) => {
            const {id, snippet = {}} = item
            const {title, thumbnails = {}, resourceId} = snippet
            const {medium = {} } = thumbnails
           return(
        
           <div key={id} className="flex-col   p-8 border-[1px]  border-solid  bg-[var(--white)] w-[100%] flex h-auto">
                <a className='' href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
            <img className="w-[100%]  " src={medium.url} alt="" />
            </a>
             <div className=" flex p-4 py-6 justify-between gap-12 relative" >
              <span className="w-[2.8rem] h-[2.8rem] rounded-full flex justify-center bg-[var(--green)]  absolute"> <FaHeadphonesSimple className="text-center mt-3.5" size={15}  /></span>
               <span className="ml-14 mt-1 text-[var(--green)]">podcast</span>
             </div>
            <h3 className="text-[1.5rem] p-4  h-[100%]">{title}</h3>
            <a className='' href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
             <h3 className="p-4">View Episode</h3>
             </a>
           </div>
             

           )

          })}
        </div>
{/* 
        <div className="flex gap-6 p-8 align-middle">
          {videoList.items.slice(3, 6).map((item) => {
            const {id, snippet = {}} = item
            const {title, thumbnails = {}, resourceId} = snippet
            const {medium = {} } = thumbnails
           return(
      
            <div key={id} className="flex-col  p-8 border-[1px] border-solid  bg-[var(--white)] w-[100%]  flex h-auto">
            <a className='' href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
        <img className="w-[100%]  " src={medium.url} alt="" />
        </a>
         <div className=" flex p-4 py-6 justify-between gap-12 relative" >
          <span className="w-[2.8rem] h-[2.8rem] rounded-full flex justify-center bg-[var(--green)]  absolute"> <FaHeadphonesSimple className="text-center mt-3.5" size={15}  /></span>
           <span className="ml-14 mt-1 text-[var(--green)]">podcast</span>
         </div>
        <h3 className="text-[1.5rem] p-4  h-[100%]">{title}</h3>
        <a className='' href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
         <h3 className="p-4">View Episode</h3>
         </a>
       </div>


           )

          })}
        </div> */}
       
       </div>
      
    </section>
  );
};


