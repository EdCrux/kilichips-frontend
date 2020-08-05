import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { banners } from './Banners';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    minWidth: '400px',
    padding: 40,
    '@media (max-width: 768px)' : {
      padding: 10
    },
    height: 'auto',
    width: '23.3%',
  },

}));

const BannersAbout = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
    <Grid item xs={12}>
      <Grid container justify="center">
        {
          banners.map(banner => ( 
          <img src={banner.image} alt={banner.alt} className={classes.image}/>
          ))
        }
      </Grid>
    </Grid>
    </Grid>
  );
}

export default BannersAbout;