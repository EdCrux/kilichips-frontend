import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: '600',
    position: 'absolute',
    top: '50%',
    left: '10%',
    transform: 'translate(-10%, -50%)',
    '@media (max-width: 425px)' : {
      left: '50%',
      transform: 'translate(-50%, -30%)'
    }
  },
  title:{
    color: grey[50],
    textShadow: `2px 2px 5px ${grey[900]}`,
    textTransform: 'uppercase',
    fontSize: '2rem',
    '@media (max-width:425px)' : {
      fontSize: '1rem',
    },
    
    '@media (min-width:426px)' : {
      fontSize: '3rem',
    },
  },
  subtitle: {
    textShadow: `2px 2px 5px ${grey[900]}`,
    color: grey[50],
    textTransform: 'uppercase',
    '@media (max-width:425px)' : {
      fontSize: '1.5rem',
    },
  },

  extendedIcon: {
    width: '100px',
    marginRight: theme.spacing(1),
  },

  buttonBuy: {
    width: 400,
    '@media (max-width: 768px)' : {
      marginTop: '20px',
      width: 200
    },
    fontWeight: 600,
    fontSize: 15,
    backgroundColor: '#ff5000',
    border: '4px solid #fafafa',
    color: '#fafafa',
  }
}));

const BuyCard = () => {

  const classes = useStyles();
  return ( 
  <div className={classes.root}>
    <Typography variant="h1"  className={classes.title}>
      Saludable
    </Typography>
    <Typography variant="h2" className={classes.subtitle}>
      Tentación
    </Typography>
    <Link to="/shop">
      <Button variant="contained" size="large" className={classes.buttonBuy}>
        Comprar 
      </Button>
    </Link>
  </div>
  );
}
 
export default BuyCard;