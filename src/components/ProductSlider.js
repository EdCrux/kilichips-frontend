import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    flexGrow: 1,
  },
  img: {
    height: 335,
    display: 'block',
    maxWidth: 500,
    overflow: 'hidden',
    widht: '100%',
    margin: '0 auto'
  }
}));

const ProductSlider = ({ images }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return <div className={classes.root}>
    <AutoPlaySwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {
        images  .map((step, index) => (
          <div key={step}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={`http://localhost:3000${step}`} alt={`productImage ${index}`} /> 
            ) : null }
          </div>
        ))
      }
    </AutoPlaySwipeableViews>
    <MobileStepper
      steps={maxSteps}
      position="static"
      variant="dots"
      activeStep={activeStep}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }


    />
  </div>;
}
 
export default ProductSlider;