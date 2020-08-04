import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import image from '../images/jicama-chile1@2x.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    '@media (max-width: 768px)' : {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    },
  },
  title: {
    color: '#ff5000',
  },
  container: {
    position: 'relative',
    width: '100%',
    height: '450px',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right bottom',
    backgroundSize: '45%', 
    '@media (max-width: 768px)' : {
      backgroundSize: '45%', 
    }

  },
  containerForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subscribe: {
    backgroundColor: 'white'
  },
  subscribeButton: {
    fontWeight: '900',
    fontSize: '1.1rem',
    color: '#8F8B88',
    textTransform: 'capitalize',
    width: '150px',
    height:'55.8px',
    backgroundColor: 'white',
  },
  socialmedia: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  socialIcon: {
    color:'#8F8B8878',
    fontSize: '2.2rem' 
  },
  infoContainer: {
    position: 'absolute',
    bottom: '0',
    width: '60%',
    padding: '2rem'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.containerForm}>
      <h2 className={classes.title}>Se el primero en conocer noticias!</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
          id="outlined-basic" 
          label="Tú dirección de email"
          variant="outlined" 
          color="secondary" 
          className={ classes.subscribe }
          />
        <Button  className={classes.subscribeButton} variant="outlined">
          Subscríbete
        </Button>
      </form>

    </div>
      <div className={classes.socialmedia}>
      <Button>
        <FacebookIcon className={classes.socialIcon} />
      </Button>
      <Button>
        <InstagramIcon className={classes.socialIcon}/>
      </Button>
      <Button>
        <EmailIcon className={classes.socialIcon}/>
      </Button>
    </div>
      <div className={classes.infoContainer}>
      <Typography variant="h6">
          Copyright © 2020 Kilichips
      </Typography>
      <Divider />
      <Typography variant="body2">
          Contacto
      </Typography>
      <Typography variant="body2">
          Terminos y Condiciones
      </Typography>
      <Typography variant="body2">
          Pago seguro
      </Typography>
      <Typography variant="body2">
          Preguntas frecuentes
      </Typography>
      <Typography variant="body2">
          Tiempos de entrega
      </Typography>
    </div>
    </div>
   );
}
 
export default Footer;