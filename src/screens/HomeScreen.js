import React from 'react';
import Slider from '../components/Slider/Slider';
import BuyCard from '../components/BuyCard';
import Hero from '../components/Hero';
import About from '../components/About/About';
import SalesPoints from '../components/SalesPoints';
import ProductsList from './ProductsList';



const HomeScreen = () => {
  return (
    <React.Fragment>
      <Hero>
        <Slider /> 
        <BuyCard />
      </Hero>
      <ProductsList /> 
      <About/>
      <SalesPoints />
    </React.Fragment>
   );
}
 
export default HomeScreen;