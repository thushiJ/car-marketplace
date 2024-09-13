import React from 'react'

import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';



function Home () {
  return (
    <div>
      
      <Header/>  
      <Hero/>
      {/*Category*/}
      <Category/>
      <MostSearchedCar/>
      <InfoSection/>
      <Footer/>
      
    </div>
  )
}

export default Home;