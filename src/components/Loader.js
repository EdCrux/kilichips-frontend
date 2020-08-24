import React from 'react';
import {makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles ((theme) => ({
  loaderContainer: {
    position: 'absolute',
    zIndex: '1000',
    height: '100vh',
    width:'100%',
    backgroundColor: '#11111195',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center' 
  },
}))

const Loader = () => {
  const classes = useStyles();
  
  return <div className={classes.loaderContainer}>
    <CircularProgress color="secondary" /> :
 </div> 
}
 
export default Loader;