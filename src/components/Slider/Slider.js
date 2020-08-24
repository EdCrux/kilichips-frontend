import React, { useState } from 'react';
import { useStyles } from './Styles';
import { useTheme } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slider = ({heroImages}) => {
  const classes = useStyles();
  const theme  = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step)
  }
  


return (
  <div className={classes.root}>
      <div className={classes.frame}></div>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {heroImages.images.map((step, index)  => (
          <div key={index}>
            <img src={`http://localhost:3000${step}`} className={classes.img} alt={step.substring(0,2)} />
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default Slider;
