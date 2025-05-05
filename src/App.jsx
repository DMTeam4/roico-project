// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

// --- Component Imports ---
import Navbar from "./Components/Navbar/Navbar.jsx";
// No ProtectedRoute import needed

// --- Page Imports ---
import Settings from "./Pages/Settings/Settings.jsx";
import Controls from "./Pages/Controls/Controls.jsx";
import AdminPanel from "./Pages/AdminPanel/AdminPanel.jsx";
import Diagnostics from "./Pages/Diagnostics/Diagnostics.jsx";
import Login from "./Pages/Login/Login.jsx";

// --- Styles & JS ---
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State and effect to track authentication based on localStorage token
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const location = useLocation();

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
      // In a real app, add token validation (expiry check) here
    };
    checkAuthStatus();
  }, [location]); // Re-check on navigation

  // --- Logout Handler (needs to be triggered from Navbar/Button) ---
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    // Navigation to /login will happen automatically due to route checks
  };

  return (
    <>
      {/* Conditionally render Navbar based on authentication state */}
      {isAuthenticated && <Navbar onLogout={handleLogout} />}

      <div className="container-fluid mt-3">
        <Routes>
          {/* --- Login Route --- */}
          <Route
            path="/login"
            element={
              // If already authenticated, redirect from login to controls
              isAuthenticated ? <Navigate to="/controls" replace /> : <Login />
            }
          />

          {/* --- Root Path Route --- */}
          <Route
            path="/"
            element={
              // If authenticated, go to controls, otherwise go to login
              isAuthenticated ? <Navigate to="/controls" replace /> : <Navigate to="/login" replace />
            }
          />

          {/* --- Routes Requiring Authentication (Protection logic inline) --- */}
          <Route
            path="/controls"
            element={
              isAuthenticated ? <Controls /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/diagnostics"
            element={
              isAuthenticated ? <Diagnostics /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/adminPanel"
            element={
              isAuthenticated ? <AdminPanel /> : <Navigate to="/login" replace />
              // Note: Role-based access still needs logic within AdminPanel or more complex checks here
            }
          />
          <Route
            path="/settings"
            element={
              isAuthenticated ? <Settings /> : <Navigate to="/login" replace />
            }
          />

          {/* --- Optional: Catch-all route --- */}
          <Route path="*" element={<Navigate to={isAuthenticated ? "/controls" : "/login"} replace />} />

        </Routes>
      </div>
    </>
  );
}

export default App;