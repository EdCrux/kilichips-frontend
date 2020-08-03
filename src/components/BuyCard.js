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
    left: '10%',
    transform: 'translate(-10%, -50%)',
  },
  title:{
    color: grey[50],
    textTransform: 'capitalize',
    fontSize: '6rem',
    '@media (max-width:425px)' : {
      fontSize: '1rem',
    },
    
    '@media (min-width:426px)' : {
      fontSize: '4rem',
    },
  },

  extendedIcon: {
    width: '100px',
    marginRight: theme.spacing(1),
  },
}));

const BuyCard = () => {

  const classes = useStyles();
  return ( 
  <div className={classes.root}>
    <Typography variant="h1"  className={classes.title}>
      Saludable
    </Typography>
    <Typography variant="h2" className={classes.title}>
      tentación!
    </Typography>
    <Button variant="contained" size="large" className={classes.width}>
      Comprar 
    </Button>
  </div>
  );
}
 
export default BuyCard;