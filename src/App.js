import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './containers/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#fafafa',
    },
    secondary: {
      // This is green.A700 as hex.
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
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
