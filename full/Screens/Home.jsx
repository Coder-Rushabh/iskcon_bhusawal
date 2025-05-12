import React from 'react'
import Carousel from "../components/Carousel"
import TempleIntro from "../components/TempleIntro"
import CTA from '../components/CTA'
import NewsLetter from '../components/NewsLetter'
import FAQ from '../components/FAQ'
import Blog from '../components/Blog'
import Founder from '../components/Founder'
import RecentVideos from '../components/RecentVideos'
function Home() {
  const CHANNEL_ID = 'UCJagYE271S8A54O8vRQlOug'; // Replace with the desired YouTube channel ID

  return (
    <div className='bg-[#f3d4a5]'>
      <Carousel />
      <TempleIntro />
      <Founder />
      <RecentVideos channelId={CHANNEL_ID} />
      {/* <FAQ /> */}
      {/* <CTA /> */}
      {/* <Blog /> */}
      {/* <NewsLetter /> */}
    </div>
  )
}

export default Home