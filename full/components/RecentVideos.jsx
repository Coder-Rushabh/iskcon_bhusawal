import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecentVideos = ({ channelId }) => {
  const [videos, setVideos] = useState([]);
  const API_KEY = 'AIzaSyAaBfT_IL7w1uJ5QGIMO_AZC7J_fhIhnTY'; 

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            channelId,
            part: 'snippet',
            order: 'date',
            maxResults: 3,
            type: 'video'
          }
        });

        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [channelId]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Recent Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full h-52 object-cover"
              />
            </a>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">{video.snippet.title}</h2>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">{video.snippet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentVideos;