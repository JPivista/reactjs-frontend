import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('token'); // Check authentication status

    if (!isAuthenticated) {
        // If not authenticated, redirect to login
        navigate('/login');
        return null; // Return null to prevent rendering if user is not authenticated
    }

    // Logout function to remove the token and redirect to login page
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div>
            <h2>Welcome to the Dashboard</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default DashboardPage;
