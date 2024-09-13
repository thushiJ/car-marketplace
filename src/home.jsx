import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import { SignInButton } from '@clerk/clerk-react';


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