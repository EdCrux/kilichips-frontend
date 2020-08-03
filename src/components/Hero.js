import React from 'react';


const Hero = (props) => {
  return ( 
    <div style={{position: 'relative'}}>
      {props.children}
    </div>
   );
}
 
export default Hero;