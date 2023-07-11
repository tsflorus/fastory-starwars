import React from 'react';
import {Navigate} from 'react-router-dom';
import {routes} from "../../constants/routes";

// @ts-ignore
const ProtectedRoute = ({children}) => {
  const username = localStorage.getItem('username');

  if (!username) {
    return <Navigate to={routes.login} replace />
  }
  return children
};

export default ProtectedRoute;
