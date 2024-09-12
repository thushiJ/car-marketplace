import React from 'react'
import { Button } from '../src/components/ui/button'
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar';


function Home () {
  return (
    <div>
      <Header/>  
      <Hero/>
      {/*Category*/}
      <Category/>
      <MostSearchedCar/>
      
    </div>
  )
}

export default Home;