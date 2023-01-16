import React from 'react';
import { Route, Navigate } from 'react-router-dom';

import { useAuth } from '../contexts/Auth';

export function PrivateRoute({ children, ...rest }) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        // Renders the page only if `user` is present (user is authenticated)
        // Otherwise, Navigate to the login page
        return user ? <Component {...props} /> : <Navigate to="/login" />;
      }}
    ></Route>
  );
}
