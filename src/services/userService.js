import axios from 'axios';

const API_URL = 'http://localhost:5000/api/usuarios'; // Cambia la URL según tu backend

// Función para iniciar sesión y guardar el token en localStorage
const register = async ( nombre,
    email,
    password,
    rol) => {
    console.log(nombre,email, password,rol)
  try {
    const response = await axios.post(`${API_URL}/registro`, 
        { email,
            password,
            rol });

        console.log(response)

    return response.data; 
  } catch (error) {
    throw new Error('Error en el registro de usuario');
  }
};


export default {
    register,
};
