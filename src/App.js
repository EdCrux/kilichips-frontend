import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// containers
import Header from './containers/Header/Header'
import Home from './containers/Home';
import Footer from './containers/Footer/Footer';
import Store from './containers/Store';
import StoresMap from './containers/StoresMap';

// material UI
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';



function App() {
  
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Header />
          <Switch>
            <Route exact path="/" render={()=> (
              <Home/>
            )}/>
            <Route exact path="/store" render={() => (
              <Store />
            )}/>
            <Route exact path="/salesPoints" render={()=>(
              <StoresMap />
            )}/>
          </Switch>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
