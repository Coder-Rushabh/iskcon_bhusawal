import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YouTubeVideo = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState(null);
  const API_KEY = 'AIzaSyAaBfT_IL7w1uJ5QGIMO_AZC7J_fhIhnTY'; // Replace with your YouTube API key

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            key: API_KEY,
            part: 'snippet,contentDetails,statistics',
            id: videoId
          }
        });

        setVideoDetails(response.data.items[0]);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  if (!videoDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
     <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    </div>
  );
};

export default YouTubeVideo;