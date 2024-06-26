import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuth = false;

  return isAuth ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;