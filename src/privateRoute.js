import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = false;

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props =>(
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute;