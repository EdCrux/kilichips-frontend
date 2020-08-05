import React from 'react';
import hero from '../../images/kili.png';
import { useStyles } from './Styles';


function Slider() {
const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.frame}></div>
      <img src={hero} className={classes.img} alt="title" />
    </div>
  );
}

export default Slider;
