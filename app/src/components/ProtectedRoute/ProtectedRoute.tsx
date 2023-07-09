import React from 'react';
import {Navigate} from 'react-router-dom';
import {routes} from "../../constants/routes";
import {useSelector} from "react-redux";

// @ts-ignore
const ProtectedRoute = ({children}) => {
  const { userInfo } = useSelector(
    // @ts-ignore
    (state) => state.auth
  )

  if (!userInfo || !userInfo.username) {
    return <Navigate to={routes.login} replace />
  }
  return children
};

export default ProtectedRoute;
