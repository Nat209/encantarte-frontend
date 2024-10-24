import axios from 'axios';

const API_URL = 'http://localhost:5000/api/usuarios'; // Cambia la URL según tu backend

// Función para iniciar sesión y guardar el token en localStorage
const login = async (email, password) => {
    console.log(email, password)
  try {
    const response = await axios.post(`${API_URL}/login`, 
        { email, password });

        console.log(response)
    
    // Guardar el token en localStorage
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }

    return response.data; 
  } catch (error) {
    throw new Error('Error en el inicio de sesión');
  }
};

// Cerrar sesión, eliminando el token de localStorage
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Obtener el usuario actual a partir del token
const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  
  if (!token) return null;

  // Decodificar el token para extraer la información del usuario
  const user = JSON.parse(atob(token.split('.')[1]));
  return user;
};

export default {
  login,
  logout,
  getCurrentUser
};
