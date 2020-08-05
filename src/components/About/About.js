import React from 'react';
import whykili from './images/whykili.png';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BannersAbout from './BannersAbout';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1300px', 
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',

    '@media (max-width: 500px)' :{
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '0 auto'
    }
  },
  whykiliContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  whykili: {
    minWidth: '300px',
    width: '90%',
  },
  descriptionkili: {
    textAlign: 'center',
    fontSize: '1.3rem',
    '@media (max-width: 768px)' : {
      fontSize: '1rem'
    }
  },
  slogan: {
    textAlign: 'center', 
    '@media (max-width: 768px)' : {
      marginTop: '1rem',
    },
    color: '#64A72F',
    '@media (min-width: 1440px)' : {
        fontSize: '1.6rem'
    }

  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root} >
        <div className={classes.whykiliContainer}>
          <img src={whykili} alt="whyKili"  className={classes.whykili}/>
        </div>
        <Typography className={classes.descriptionkili}>
          "Kilichips es una alternativa de snack saludable, libre de gluten, conservadores artificiales,    lácteos,  azucares añadidos, con muy pocas calorias y 100% vegano. "
        </Typography>

      </div>
        <Typography className={classes.slogan}>
        ¡Haz más de eso que te hace feliz !
        </Typography>
      <div>
        <BannersAbout />
      </div>
      
      </React.Fragment>
   );
}
 
export default About;
