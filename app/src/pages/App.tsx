import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "../constants/routes";
import {LoginScreen} from "./LoginScreen";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import {ItemDetailsScreen} from "./ItemDetailsScreen";
import {SearchScreen} from "./SearchScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.search} element={<ProtectedRoute><SearchScreen /></ProtectedRoute>} />
        <Route path={routes.login} element={<LoginScreen />} />

        {/*Details routes*/}
        <Route path={routes.peopleDetails} element={<ProtectedRoute><ItemDetailsScreen category='people' /></ProtectedRoute>} />
        <Route path={routes.planetDetails} element={<ProtectedRoute><ItemDetailsScreen category='planets' /></ProtectedRoute>} />
        <Route path={routes.filmDetails} element={<ProtectedRoute><ItemDetailsScreen category='films' /></ProtectedRoute>} />
        <Route path={routes.speciesDetails} element={<ProtectedRoute><ItemDetailsScreen category='species' /></ProtectedRoute>} />
        <Route path={routes.vehicleDetails} element={<ProtectedRoute><ItemDetailsScreen category='vehicles' /></ProtectedRoute>} />
        <Route path={routes.starshipDetails} element={<ProtectedRoute><ItemDetailsScreen category='starships' /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
