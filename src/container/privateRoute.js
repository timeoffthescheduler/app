import React from 'react';  
import { Redirect, Route } from 'react-router-dom';
//import { checkCookie } from '../utils/cookies';

const PrivateRoute = ({ component: Component, ...rest }) => (  
  <Route { ...rest } render={props => (
    localStorage.getItem('user') ? (
      <Component { ...props } />
    ) : (
      <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}
      />
    )
  )} />
);

export default PrivateRoute; 
