"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

const Youtubeapi = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getVideos() {
  try {
    const response = await axios.get(`${Youtubeapi}?part=snippet&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`); // Example parameters

    if (response.status !== 200) {
      throw new Error(`Error fetching videos: Status code ${response.status}`);
    }

    const videos = response.data.items; // Extract video data from response

    return videos;
  } catch (error) {
    console.error('Error getting videos:', error);
    // Handle errors gracefully (e.g., display error message)
    return null; // Or return a specific error object
  }
}

const EXPLORE = () => {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedVideos = await getVideos();
        setVideos(fetchedVideos);
      } catch (err) {
        setError(err.message); // Or handle error differently
      }
    };

    fetchData();
    console.log(videos)
  }, []);

  // ... (render function based on videos and error states)

  return (
   
   <section className="expoloer-wrapper">
      <div className="explore-container flex-col p-30">
        <h2 className="text-[var(--green)] text-[2rem] font-[600]">
          Find Episodes
        </h2>
      </div>
      {error && <p className="error-message">Error: {error}</p>}
      {videos && (
        <ul className="video-list">
          {/* Render video data here */}
        </ul>
      )}
    </section>
  );
};

export default EXPLORE;
