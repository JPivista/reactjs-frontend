import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import ManiLayout from '../layouts/ManiLayout'; // Main Layout
import Signup from '../pages/Signup/Signup'; // Signup Page
import NotFound from '../pages/NotFound/NotFound'; // Not Found Page
import Login from '../pages/Login/Login'; // Login Page
import Home from '../pages/Home/Home'; // Home Page
import DashboardApp from '../pages/Dashboard/DashboardPage'; // Dashboard Route

const AppRoutes = () => {
    const isAuthenticated = localStorage.getItem('token'); // Check if user is authenticated by token

    // Define your routes with authentication checks
    let routes = useRoutes([
        {
            path: "/",
            element: <ManiLayout />,
            children: [
                // Public Routes
                { path: '/home', element: <Home /> },
                { path: '/register', element: <Signup /> },
                { path: '/login', element: !isAuthenticated ? <Login /> : <Navigate to="/dashboard" /> },
                // Protect Dashboard route
                { path: '/dashboard/*', element: isAuthenticated ? <DashboardApp /> : <Navigate to="/login" /> },
                // Default Route - Redirect to Dashboard if logged in or Login if not
                { path: '/', element: isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" /> },
                // Catch-all Route for 404 page
                { path: "*", element: <NotFound /> }
            ]
        }
    ]);

    return routes;
};

export default AppRoutes;
