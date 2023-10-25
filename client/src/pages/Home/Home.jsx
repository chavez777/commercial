import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'


const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Categories/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home