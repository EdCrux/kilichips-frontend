import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './Styles';



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