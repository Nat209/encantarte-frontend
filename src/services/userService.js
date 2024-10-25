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
const consultAdmin = async () => {
  try {
    // Realiza la solicitud GET, pasando el parámetro 'tipo' en la URL
    const response = await axios.get(`${API_URL}/consult/?rol=admin`);

    // Muestra la respuesta en la consola
    console.log(response);

    // Devuelve los datos obtenidos
    return response.data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw new Error('Error al obtener los productos');
  }
};

const consultUsers = async () => {
  try {
    // Realiza la solicitud GET, pasando el parámetro 'tipo' en la URL
    const response = await axios.get(`${API_URL}/consult?rol=cliente`);

    // Muestra la respuesta en la consola
    console.log(response);

    // Devuelve los datos obtenidos
    return response.data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw new Error('Error al obtener los productos');
  }
};


export default {
    register,
    consultUsers,
    consultAdmin
};
