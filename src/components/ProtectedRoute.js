import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token || !user || (requiredRole && user.rol !== requiredRole)) {
        // Si el usuario no está autenticado o no tiene el rol adecuado, redirigir al login
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
