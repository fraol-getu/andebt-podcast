"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
// `${Youtube_PlayList_Items_Api}?part=snippet&playlistId=hIqOrKmrL3o&list=PLoAjlnctw2_E-w-VmrUq9fX2Wb334P2oP${REACT_APP_YOUTUBE_API_KEY}`

const Youtube_PlayList_Items_Api  = "https://www.googleapis.com/youtube/v3/playlistItems";
const REACT_APP_YOUTUBE_API_KEY ='AIzaSyAGniBKBcyVc07rehG8dvR0noCfCmqVL-s'

 

const EXPLORE = () => {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios.get(`${Youtube_PlayList_Items_Api}?part=snippet&playlistId=4mW90KQohSM&list=PLa0qTufrhvfNAq_lNLqHYblnzQjPWOP2K&key=${REACT_APP_YOUTUBE_API_KEY}`)
      .then((res) => {setData(res.data);})
        .catch((err) => console.log(err, "error"));
    };
    fetchData();
    console.log(data)
  }, []);
  
  return (
    <section className="explorer-wrapper">
      <div className="explore-container flex-col p-30">
        <h2 className="text-[var(--green)] text-[2rem] font-[600]">
          Find Episodes
        </h2>
        
       
       </div>
      
    </section>
  );
};

export default EXPLORE;
