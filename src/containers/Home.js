import React from 'react';
import Slider from '../components/Slider'
import BuyCard from '../components/BuyCard'
import Hero from '../components/Hero'



const Home = () => {
  

  return (
    <React.Fragment>
      <Hero>
        <Slider /> 
        <BuyCard />
      </Hero>
    </React.Fragment>
   );
}
 
export default Home;