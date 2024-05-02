import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
    const userData = localStorage.getItem("UserData");

    if (userData) {
        return props.children;
    } else {
        return <Navigate to="/login" />;
    }
}