import React from 'react'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider'
import Navbar from '../Components/Navbar'
import {SliderData} from '../Components/SliderData'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ImageSlider slides={SliderData}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact

