import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "../constants/routes";
import {LoginScreen} from "./LoginScreen";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import {DashboardScreen} from "./DashboardScreen";
import {ItemDetailsScreen} from "./ItemDetailsScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.dashboard} element={<ProtectedRoute><DashboardScreen /></ProtectedRoute>} />
        <Route path={routes.login} element={<LoginScreen />} />
        <Route path={routes.peopleDetails} element={<ProtectedRoute><ItemDetailsScreen category='people' /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
