import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


// Screens
import Home from './screens/HomeScreen';
import Shop from './screens/ShopScreen';
import StoresMap from './screens/StoresMap';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import RegistrationScreen from './screens/Registration/RegistrationScreen';
import Shipping from './screens/Shipping';
import SigninScreen from './screens/Signin/Signin';

//Static
import Header from './screens/Header/Header'
import Footer from './screens/Footer/Footer';

// material UI
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import PrivateRoute from './privateRoute';



function App() {
  
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Header />
          <Switch>
            <Route path="/registration" component={RegistrationScreen}/>
            <Route path="/cart/:id" component={CartScreen} />
            <Route exact path="/" component={Home}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/category/:category" component={Shop}/>
            <Route exact path="/salesPoints" component={StoresMap}/>
            <Route exact path="/products/:id" component={ProductScreen} />
            <Route exact path="/signin" component={SigninScreen} />
            <PrivateRoute path="/shipping" component={Shipping}/>
          </Switch>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
