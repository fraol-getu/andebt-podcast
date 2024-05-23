// "use client";

import React from "react";
import { FaHeadphonesSimple } from "react-icons/fa6";

// `${Youtube_PlayList_Items_Api}?part=snippet&playlistId=hIqOrKmrL3o&list=PLoAjlnctw2_E-w-VmrUq9fX2Wb334P2oP${REACT_APP_YOUTUBE_API_KEY}`

const YOUTUBE_PLAYLIST_ITEMS_API ="https://www.googleapis.com/youtube/v3/search";

const YOUTUBE_API_KEY = "AIzaSyAGniBKBcyVc07rehG8dvR0noCfCmqVL-s";
async function fetchVideo() {
  const video = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&channelId=UC44I_bEc19ZnOxOHtP-hV6w&maxResults=6&order=viewCount&type=video&key=${YOUTUBE_API_KEY}`,
    {
      cache: "no-store",
    }
  );

  return video.json();
}

export default async function EXPLORE() {
  const videoList = await fetchVideo();
  

  return (
    <section className="explorer-wrapper mt-8 py-4  px-7 sm:px-12">
      <div className="explore-container flex-col   p-5 sm:p-10">
        <h2 className="text-[var(--black)] text-center  px-4 sm:px-8  text-[2.2rem] font-[600]">
          Featured Episodes
        </h2>
        <div className=" list-container overflow-x-hidden mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-16  gap-x-10  p-4  h-[90%] align-middle">
          {videoList.items.map((item) => {
            const { id, snippet = {} } = item;
            const { title, thumbnails = {} } = snippet; // Use default empty object
            const { medium = {} } = thumbnails;
            return (
              <div
                key={id}
                className="flex-col   p-4 border-[1px]  border-solid  bg-[var(--white)] w-[100%] flex h-auto"
              >
                <a
                  className=""
                  href={`https://www.youtube.com/watch?v=${id.videoId}`}
                >
                  <img className="w-[100%]  " src={medium.url} alt="" />
                </a>
                <div className=" flex p-4 py-6 justify-between gap-12 relative">
                  <span className="w-[2.8rem] h-[2.8rem] rounded-full flex justify-center bg-[var(--green)]  absolute">
                    {" "}
                    <FaHeadphonesSimple
                      className="text-center mt-3.5"
                      size={15}
                    />
                  </span>
                  <span className="ml-14 mt-1 text-[var(--green)]">
                    podcast
                  </span>
                </div>
                <h3 className="text-[1.5rem] p-4  h-[100%]">{title}</h3>
                <a
                  className=""
                  href={`https://www.youtube.com/watch?v=${id.videoId}`}
                >
                  <h3 className="p-4">View Episode</h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
