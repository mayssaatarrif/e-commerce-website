import React from 'react'
import Hero from '../../components/organism/Hero'
import LatestCollection from '../../components/organism/LatestCollection'
import BestSeller from '../../components/organism/BestSeller'
import OurPolicy from '../../components/organism/OurPolicy'
import NewsLetterBox from '../../components/organism/NewsLetterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home