import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider/Slider';
import BuyCard from '../components/BuyCard';
import Hero from '../components/Hero';
import About from '../components/About/About';
import SalesPoints from '../components/SalesPoints';
import ProductsList from './ProductsList';

const HomeScreen = () => {
  const [heroImages, setHeroImages] = useState({
    name: '',
    images: []
  });

  const getHeroBanners =  () => {
    fetch("http://192.168.1.69:3000/api/v1/banners")
      .then(resp => resp.json())
      .then(data => {
        data.map(banner => {
          return setHeroImages({name: banner.name, images: banner.images })
        })
      })
      .catch(console.log('something went wrong'))
  }
  useEffect( () => {
    getHeroBanners();
  }, []);

  return (
    <React.Fragment>
      <Hero>
        <Slider heroImages={heroImages} /> 
        <BuyCard />
      </Hero>
      <ProductsList /> 
      <About/>
      <SalesPoints />
    </React.Fragment>
   );
}
 
export default HomeScreen;