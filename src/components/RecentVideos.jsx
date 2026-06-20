import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaYoutube } from "react-icons/fa";

const API_KEY = "AIzaSyAaBfT_IL7w1uJ5QGIMO_AZC7J_fhIhnTY";

function PlayIcon() {
  return (
    <div className="w-12 h-12 bg-saffron-500 flex items-center justify-center">
      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z" />
      </svg>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white animate-pulse">
      <div className="h-48 bg-stone-100" />
      <div className="p-6 space-y-3">
        <div className="h-3 bg-stone-100 rounded w-1/3" />
        <div className="h-4 bg-stone-100 rounded w-3/4" />
        <div className="h-4 bg-stone-100 rounded w-1/2" />
      </div>
    </div>
  );
}

const RecentVideos = ({ channelId }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const fetchVideos = async () => {
      try {
        const { data } = await axios.get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            channelId,
            part: "snippet",
            order: "date",
            maxResults: 3,
            type: "video",
          },
        });
        if (!cancelled) setVideos(data.items);
      } catch (err) {
        console.error("YouTube fetch error:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchVideos();
    return () => { cancelled = true; };
  }, [channelId]);

  return (
    <section className="py-24 bg-saffron-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-end mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-saffron-500 mb-3">
              Watch &amp; Learn
            </p>
            <h2 className="font-serif text-4xl text-stone-900 leading-tight">Recent Videos</h2>
          </div>
          <a
            href="https://www.youtube.com/@iskconbhusawal"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-sm text-stone-500 hover:text-saffron-600 transition-colors"
          >
            <FaYoutube size={16} className="text-red-500" />
            View YouTube Channel
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-saffron-200">
          {loading
            ? [1, 2, 3].map((i) => <SkeletonCard key={i} />)
            : videos.map((video) => (
                <a
                  key={video.id.videoId}
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white group block"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                      loading="lazy"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <PlayIcon />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-stone-400 mb-2">
                      {new Date(video.snippet.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="text-stone-800 text-sm font-medium leading-relaxed group-hover:text-saffron-600 transition-colors">
                      {video.snippet.title.length > 70
                        ? video.snippet.title.slice(0, 70) + "…"
                        : video.snippet.title}
                    </h3>
                  </div>
                </a>
              ))}
        </div>
      </div>
    </section>
  );
};

export default RecentVideos;
