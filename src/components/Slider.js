import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import hero from '../images/kili.JPG';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  frame: {
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '89%',
    zIndex: '-500',
  },
  img: {
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    height: '80%',
    '@media (max-width:768px)' :{
      filter: 'brightness(0.60)',
      clipPath: 'circle(75% at 50% 0%)',
    },
    '@media (min-width:769px)' : {
      clipPath: 'circle(75% at 70% 0%)',
    }
  },
}));

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
