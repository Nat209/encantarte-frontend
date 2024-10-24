import React, { createContext, useState } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(authService.getCurrentUser());

  const login = async (email, password) => {
    try {
      const userData = await authService.login(email, password);
      setUser(userData);  // Guarda la información del usuario autenticado
    } catch (error) {
      console.error('Error en el inicio de sesión', error);
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);  // Limpia el estado al cerrar sesión
  };

  const isAdmin = user?.rol === 'admin';  // Comprueba si el rol es 'admin'

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
