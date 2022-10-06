import React from 'react'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Content from '../components/Content/Content'
import { heroOne, heroTwo, heroThree } from '../data/HeroData'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Content {...heroOne}/>
      <Content {...heroTwo}/>
      <Content {...heroThree}/>
    </div>
  )
}

export default Home