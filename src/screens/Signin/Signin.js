import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../Theme';
import { responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import 
  { 
    Container, 
    Typography, 
    Grid,
    Paper,
    Button,
    TextField
  } from '@material-ui/core';

import OauthButton from '../../components/OauthButton';
import { useStyles } from './Styles';



let customTheme = theme;
customTheme = responsiveFontSizes(customTheme);

const SigninScreen = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return <Container maxWidth="md" className={classes.root}>
    <ThemeProvider theme={customTheme}>
      <Typography variant="h2" gutterBottom className={classes.title} >
        Iniciar Sesión
      </Typography>
    </ThemeProvider>
    <Grid container spacing={3} justify="center">
      <Grid item xs={10} sm={6} md={5}>
        <Paper variant="outlined" className={classes.container}>
          <h2>Todavia no tengo una cuenta</h2>
          <Typography>
            Al crear una cuenta en nuestra tienda, podrá desplazarse más rápidamente por el proceso de pago,
            almacenar varias direcciones de envío, ver y realizar un seguimiento de sus pedidos en su cuenta y mucho más.
          </Typography>
          <br/>
            <Link to="/registration" className={classes.resetLink}>
              <Button variant="contained" size="large" color="secondary">
                Crear una cuenta
              </Button>
            </Link>
        </Paper>
      </Grid>
      <Grid item xs={10} sm={8} md={5}>
        <Paper variant="outlined" className={classes.container}>
          <h2><b>Ya tengo una cuenta</b></h2>
          <p>Si tienes una cuenta con nosotros, inicia sesión</p>
          <form validate>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <TextField
                  type="email"
                  id="email" 
                  color="secondary" 
                  variant="outlined" 
                  onChange={(e)=> setEmail(e.target.value)} 
                  autoComplete="on"
                  label="Email"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField 
                  type="password"
                  id="password" 
                  color="secondary" 
                  variant="outlined" 
                  onChange={(e)=> setPassword(e.target.value)} 
                  autoComplete="off"
                  label="Contraseña"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Button type="submit" size="large" className={classes.signinButton} variant="contained">
                  Iniciar Sesión
                </Button>
              </Grid>
              <Grid item>
                <OauthButton />
              </Grid>
              <Grid item>
                <Link to="/resetPassword">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  </Container>
}
export default SigninScreen;