import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/loginComponent';
import AdminView from './components/AdminView';
import ClienteView from './components/ClienteView';
import ProtectedRoute from './components/ProtectedRoute';
import CrearUsuario from './components/CrearUsuario';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={
                    <ProtectedRoute requiredRole="admin">
                        <AdminView />
                    </ProtectedRoute>
                } />
                <Route path="/cliente" element={
                    <ProtectedRoute requiredRole="cliente">
                        <ClienteView />
                    </ProtectedRoute>
                } />
                <Route path="/register" element={<CrearUsuario />} />
            </Routes>
        </Router>
    );
}

export default App;
