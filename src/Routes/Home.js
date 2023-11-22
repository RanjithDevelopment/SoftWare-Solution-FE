import React from 'react'
import {SliderData} from '../Components/SliderData'
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider'
import Navbar from '../Components/Navbar'
import Table from '../Components/Table'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <ImageSlider slides={SliderData}/>
      <Table/>
      <Footer/>
    </div>
  )
}

export default Home
