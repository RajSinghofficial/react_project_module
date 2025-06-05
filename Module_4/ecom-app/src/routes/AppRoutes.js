// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Feedback from '../pages/Feedback';

const AppRoutes = () => {
  //  const isAuthenticated = true; Replace with real auth logic

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/contact" element={<Feedback />} />
      {/* <Route
        path="/dashboard"
        element={<PrivateRoute isAuthenticated={isAuthenticated}><Dashboard /></PrivateRoute>}
      /> */}
    </Routes>
  );
};

export default AppRoutes;