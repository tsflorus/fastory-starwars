import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import {routes} from "../../constants/routes";
import {useSelector} from "react-redux";

type Props = {
  path: string,
  component: any,
};

// @ts-ignore
const ProtectedRoute = ({children}) => {
  const { userInfo } = useSelector(
    // @ts-ignore
    (state) => state.auth
  )

  console.log(userInfo);

  if (!userInfo || !userInfo.username) {
    return <Navigate to={routes.login} replace />
  }
  return children
};

export default ProtectedRoute;
