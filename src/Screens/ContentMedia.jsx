import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaYoutube, FaPlay, FaBookOpen } from "react-icons/fa";
import { usePageMeta } from "../hooks/usePageMeta";

const API_KEY = "AIzaSyAaBfT_IL7w1uJ5QGIMO_AZC7J_fhIhnTY";
const CHANNEL_ID = "UCJagYE271S8A54O8vRQlOug";

// Playlist IDs from ISKCON Bhusawal YouTube channel (update with real playlist IDs)
const VIDEO_CATEGORIES = [
  { id: "all",       label: "All Videos",        playlistId: null },
  { id: "gita",      label: "Bhagavad Gita",     playlistId: "PLgita" },
  { id: "kirtan",    label: "Kirtan",             playlistId: "PLkirtan" },
  { id: "festival",  label: "Festivals",          playlistId: "PLfest" },
  { id: "lecture",   label: "Lectures",           playlistId: "PLlecture" },
  { id: "youth",     label: "Youth Programs",     playlistId: "PLyouth" },
];

const ARTICLES = [
  {
    tag: "Philosophy",
    title: "What is Bhakti Yoga?",
    excerpt:
      "Bhakti Yoga is the path of devotion — a direct, joyful way to connect with the Supreme. Unlike paths requiring rigorous austerity, bhakti works through love, service, and remembrance of Krishna.",
    readTime: "4 min read",
  },
  {
    tag: "Festival",
    title: "Janmashtami — The Appearance Day of Lord Krishna",
    excerpt:
      "Janmashtami celebrates the birth of Lord Sri Krishna, the Supreme Personality of Godhead. Observed on the eighth day of the dark fortnight of Bhadrapada month, it is one of ISKCON's most joyful celebrations.",
    readTime: "5 min read",
  },
  {
    tag: "Scripture",
    title: "The Essence of Bhagavad Gita in Seven Verses",
    excerpt:
      "Srila Prabhupada often highlighted seven key verses — the Gita-sāra — that encapsulate the complete philosophy of the Bhagavad Gita. Understanding these verses is the foundation of Krishna consciousness.",
    readTime: "6 min read",
  },
  {
    tag: "Practice",
    title: "Why Chant the Hare Krishna Maha-Mantra?",
    excerpt:
      "The Hare Krishna maha-mantra — Hare Krishna Hare Krishna, Krishna Krishna Hare Hare / Hare Rama Hare Rama, Rama Rama Hare Hare — is the most powerful spiritual sound vibration for this age of Kali.",
    readTime: "4 min read",
  },
  {
    tag: "Lifestyle",
    title: "The Four Principles of Bhakti Life",
    excerpt:
      "ISKCON devotees follow four regulative principles: no meat-eating, no illicit sex, no intoxication, and no gambling. These principles purify the senses and enable steady progress in spiritual life.",
    readTime: "5 min read",
  },
  {
    tag: "History",
    title: "ISKCON — 58 Years of Spreading Krishna Consciousness",
    excerpt:
      "Founded in 1966 by Srila Prabhupada in New York City, ISKCON has grown into one of the world's most recognisable spiritual organisations with over 850 temples, restaurants, and communities worldwide.",
    readTime: "7 min read",
  },
];

function VideoCard({ video }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white group block border border-stone-100 hover:border-saffron-200 transition-colors"
    >
      <div className="relative overflow-hidden">
        <img
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          loading="lazy"
          className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <div className="w-11 h-11 bg-saffron-500 flex items-center justify-center">
            <FaPlay size={14} className="text-white ml-0.5" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5">
          {new Date(video.snippet.publishedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
          })}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-stone-800 text-sm font-medium leading-snug group-hover:text-saffron-600 transition-colors line-clamp-2">
          {video.snippet.title}
        </h3>
      </div>
    </a>
  );
}

function ArticleCard({ article }) {
  return (
    <div className="bg-white border border-stone-100 p-7 flex flex-col hover:border-saffron-200 transition-colors">
      <span className="section-label mb-3">{article.tag}</span>
      <h3 className="font-serif text-xl text-stone-900 leading-snug mb-3">
        {article.title}
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed flex-1 mb-5">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-stone-400">{article.readTime}</span>
        <span className="text-xs font-medium text-saffron-500 flex items-center gap-1">
          <FaBookOpen size={11} /> Read article
        </span>
      </div>
    </div>
  );
}

function ContentMedia() {
  usePageMeta({
    title: "Content & Media",
    description:
      "Watch ISKCON Bhusawal lectures, kirtans, and festival videos. Read articles on Bhagavad Gita, Bhakti Yoga, and Krishna consciousness.",
  });

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("videos");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    const fetchVideos = async () => {
      try {
        const { data } = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              key: API_KEY,
              channelId: CHANNEL_ID,
              part: "snippet",
              order: "date",
              maxResults: 12,
              type: "video",
            },
          }
        );
        if (!cancelled) setVideos(data.items || []);
      } catch (err) {
        console.error("YouTube fetch error:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchVideos();
    return () => { cancelled = true; };
  }, []);

  const filteredVideos = videos.filter((v) =>
    v.snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArticles = ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Page header */}
      <div className="page-header">
        <p className="page-header-label">Wisdom &amp; Inspiration</p>
        <h1 className="page-header-title mb-4">Content &amp; Media</h1>
        <p className="text-stone-400 text-sm max-w-xl mx-auto leading-relaxed">
          Lectures, kirtans, festival recordings, and articles on Krishna
          consciousness — all in one place.
        </p>
      </div>

      {/* Search + Tabs */}
      <div className="bg-white border-b border-stone-100 sticky top-[88px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search videos or articles…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-stone-200 focus:outline-none focus:border-saffron-400 text-stone-800 text-sm bg-stone-50"
            />
          </div>

          {/* Tab switcher */}
          <div className="flex border border-stone-200 overflow-hidden shrink-0">
            {[
              { id: "videos",   label: "Videos" },
              { id: "articles", label: "Articles" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-saffron-500 text-white"
                    : "text-stone-600 hover:bg-stone-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <>
            {/* YouTube channel link */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-stone-900">
                Latest from ISKCON Bhusawal
              </h2>
              <a
                href="https://www.youtube.com/@iskconbhusawal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-saffron-600 transition-colors"
              >
                <FaYoutube size={16} className="text-red-500" />
                View all on YouTube
              </a>
            </div>

            {/* Embedded latest video */}
            {!loading && videos.length > 0 && (
              <div className="mb-10">
                <p className="section-label mb-4">Featured — Latest Video</p>
                <div className="aspect-video w-full bg-stone-100">
                  <iframe
                    src={`https://www.youtube.com/embed/${videos[0]?.id?.videoId}?rel=0`}
                    title={videos[0]?.snippet?.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="mt-3 font-serif text-lg text-stone-800">
                  {videos[0]?.snippet?.title}
                </p>
              </div>
            )}

            {/* Video grid */}
            <div className="mb-6">
              <p className="section-label mb-6">More Videos</p>
              {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-stone-200">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="bg-white animate-pulse">
                      <div className="h-44 bg-stone-100" />
                      <div className="p-4 space-y-2">
                        <div className="h-3 bg-stone-100 rounded w-3/4" />
                        <div className="h-3 bg-stone-100 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredVideos.length === 0 ? (
                <p className="text-stone-500 text-center py-16">
                  No videos found for &ldquo;{searchQuery}&rdquo;.
                </p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-stone-200">
                  {filteredVideos.slice(1).map((v) => (
                    <VideoCard key={v.id.videoId} video={v} />
                  ))}
                </div>
              )}
            </div>

            {/* Playlist categories */}
            <div className="mt-14">
              <p className="section-label mb-6">Browse by Category</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { label: "Bhagavad Gita Classes", icon: "01" },
                  { label: "Kirtans & Bhajans",      icon: "02" },
                  { label: "Festival Celebrations",   icon: "03" },
                  { label: "Youth Programs",           icon: "04" },
                  { label: "Sunday Feast Lectures",   icon: "05" },
                ].map((cat) => (
                  <a
                    key={cat.label}
                    href={`https://www.youtube.com/@iskconbhusawal/videos`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-stone-100 p-5 text-center hover:border-saffron-300 hover:bg-saffron-50 transition-colors group"
                  >
                    <span className="block font-serif text-2xl text-saffron-400 mb-2 group-hover:text-saffron-500">
                      {cat.icon}
                    </span>
                    <span className="text-xs font-medium text-stone-700 group-hover:text-stone-900 leading-snug">
                      {cat.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ARTICLES TAB */}
        {activeTab === "articles" && (
          <>
            <div className="mb-8">
              <h2 className="font-serif text-2xl text-stone-900">
                Articles on Krishna Consciousness
              </h2>
              <p className="text-stone-500 text-sm mt-2">
                Explore the philosophy, festivals, and way of life at the heart of
                Bhakti tradition.
              </p>
            </div>

            {filteredArticles.length === 0 ? (
              <p className="text-stone-500 text-center py-16">
                No articles found for &ldquo;{searchQuery}&rdquo;.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
                {filteredArticles.map((article, i) => (
                  <ArticleCard key={i} article={article} />
                ))}
              </div>
            )}

            {/* Vedabase link */}
            <div className="mt-14 bg-saffron-50 border border-saffron-200 p-8 text-center">
              <p className="section-label mb-3">Go Deeper</p>
              <h3 className="font-serif text-2xl text-stone-900 mb-4">
                Explore Srila Prabhupada&rsquo;s Books
              </h3>
              <p className="text-stone-600 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
                Dive into the complete works of Srila Prabhupada — Bhagavad Gita As It
                Is, Srimad Bhagavatam, Chaitanya Charitamrita, and more — freely
                available on Vedabase.
              </p>
              <a
                href="https://vedabase.io/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Vedabase.io
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ContentMedia;
