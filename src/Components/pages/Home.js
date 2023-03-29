import React from 'react'
import HomeBrief from '../Home/HomeBrief/HomeBrief'
import HomeCounting from '../Home/HomeCounting/HomeCounting'
import HomeHeader from '../Home/HomeHeader/HomeHeader'
import HomeWhatWeDo from '../Home/HomeWhatWeDo/HomeWhatWeDo'

const Home = () => {
  return (
    <>
    <HomeHeader />
    <HomeBrief />
    <HomeWhatWeDo />
    <HomeCounting />
    </>
  )
}

export default Home