import React from 'react'
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider'
import Navbar from '../Components/Navbar'
import {SliderData} from '../Components/SliderData'
const About = () => {
  return (
    <div>
      <Navbar/>
      <ImageSlider slides={SliderData}/>
      <Footer/>
    </div>
  )
}

export default About
