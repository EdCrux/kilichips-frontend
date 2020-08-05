import React from 'react';
import './App.css';
import Header from './containers/Header/Header'
import Home from './containers/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Footer from './containers/Footer/Footer';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
  palette: {
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#ff5000',
    },
  },
});

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Home />
        <Footer/>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
