import React from 'react';
import { Link } from 'react-router-dom';
// import templeImage from '../assets/iskcon-bhusawal-temple.jpg';
import srilaPrabhupadaImage from '../assets/2.jpg';
import kirtanImage from '../assets/iskcon-kirtan.jpg';
import YouTubePlayer from '../components/YoutubePlayer';

const IskconBhusawal = () => {
    const VIDEO_ID = 'hGc-HlFonvo'; // Replace with the desired YouTube video ID

  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {/* <img src={templeImage} alt="ISKCON Bhusawal" className="w-full h-full object-cover brightness-75" /> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl font-bold">ISKCON Bhusawal</h1>
          <p className="text-lg mt-2 max-w-2xl">A center for spirituality, devotion, and spreading the message of Lord Krishna.</p>
        </div>
      </div>
      
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
        <h2 className="text-3xl font-semibold text-center">About ISKCON Bhusawal</h2>
        <p className="mt-4 text-lg text-center">
          ISKCON Bhusawal is dedicated to propagating the teachings of Lord Krishna and Srila Prabhupada.
          We conduct daily prayers, bhajan-kirtan, spiritual discourses, and community service programs.
        </p>
      </section>
      
      {/* Activities Section */}
      <section className="bg-[#f3d4a5] py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={srilaPrabhupadaImage} alt="Srila Prabhupada" className="rounded-lg shadow-lg" />
          <div>
            <h3 className="text-2xl font-semibold">Our Teachings & Spiritual Mission</h3>
            <p className="mt-4 text-lg">
              Guided by the philosophy of the Bhagavad Gita and Srimad Bhagavatam, ISKCON Bhusawal is a spiritual hub where 
              devotees immerse themselves in Krishna consciousness through chanting, meditation, and scriptural studies.
            </p>
          </div>
        </div>
      </section>
      
      {/* Events and Programs */}
      <section className="py-12 px-6 bg-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold">Regular Programs & Events</h3>
          <p className="mt-4 text-lg">
            Participate in daily aarti, kirtan, Bhagavad Gita lectures, and Sunday feasts.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold">Morning & Evening Aarti</h4>
              <p className="mt-2">Start your day with devotional prayers and bhajans.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold">Bhagavad Gita Classes</h4>
              <p className="mt-2">Learn the essence of the Gita and its applications in daily life.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold">Sunday Love Feast</h4>
              <p className="mt-2">Enjoy prasadam and association with devotees every Sunday.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold">Kirtan and Bhajans</h4>
              <p className="mt-2">Chant the holy names in blissful congregational kirtans.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 text-center bg-[#d1a664] text-white">
        <h3 className="text-3xl font-semibold">Join Us in the Journey of Bhakti</h3>
        <p className="mt-4 text-lg">Experience spiritual bliss by visiting ISKCON Bhusawal and connecting with Lord Krishna.</p>
        <Link to="/contact" className="mt-6 inline-block bg-white text-[#d1a664] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">Contact Us</Link>
      </section>
    </div>
          <YouTubePlayer videoId={VIDEO_ID} />
</>
  );
};

export default IskconBhusawal;