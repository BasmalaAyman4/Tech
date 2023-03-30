import React from 'react'
import HomeBrief from '../Home/HomeBrief/HomeBrief'
import HomeCounting from '../Home/HomeCounting/HomeCounting'
import HomeWhatWeDo from '../Home/HomeWhatWeDo/HomeWhatWeDo'
import HomeHeader from '../Home/HomeHeader/HomeHeader'

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