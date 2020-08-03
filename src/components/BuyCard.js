import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: '600',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-180%, -0%)',
    '@media (max-width:768px)' : {
      textAlign: 'center',
      transform: 'translate(-50%, -20%)',
    },
    '@media (min-width:1440px)' : {
      transform: 'translate(-190%, -20%)',
    }
  },
  title:{
    textTransform: 'capitalize',
    fontSize: '6rem',
    '@media (max-width:425px)' : {
      fontSize: '2rem',
      color: grey[50],
    },
    
    '@media (min-width:426px)' : {
      fontSize: '4rem',
      color: grey[50],  
    },
    '@media (min-width:1024px)' : {
      color: grey[900],
    }
  },

  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const BuyCard = () => {

  const classes = useStyles();
  return ( 
  <div className={classes.root}>
    <Typography variant="h5" component="h3" className={classes.title}>
      Saludable
    </Typography>
    <Typography variant="h1" component="h3" className={classes.title}>
      tentación
    </Typography>
    <Button variant="contained" size="large" color="secondary" className={classes.margin}>
      Comprar 
    </Button>
  </div>
  );
}
 
export default BuyCard;