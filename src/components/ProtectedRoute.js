import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: EmailForm, ...rest }) => {
  // Retrieve token from localStorage
  const token = localStorage.getItem('token');

  // Check if token exists and is not expired
  const isAuthenticated = token ? true : false;

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <EmailForm /> : <Navigate to="/"/>}
    />
  );
};

export default ProtectedRoute;

