
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/productos'; // Cambia la URL según tu backend

// Función para iniciar sesión y guardar el token en localStorage
const register = async ( nombre,descripcion,precio,tipo,imagen_url,stock) => {
  try {
    const response = await axios.post(`${API_URL}`, 
        {nombre,descripcion,precio,tipo,imagen_url,stock});

        console.log(response)

    return response.data; 
  } catch (error) {
    throw new Error('Error en el registro de usuario');
  }
};
const consultAmigurumis = async (tipo) => {
    try {
      // Realiza la solicitud GET, pasando el parámetro 'tipo' en la URL
      const response = await axios.get(`${API_URL}?tipo=amigurumi`);
  
      // Muestra la respuesta en la consola
      console.log(response);
  
      // Devuelve los datos obtenidos
      return response.data;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      throw new Error('Error al obtener los productos');
    }
  };
  const consultprinturas = async (tipo) => {
    try {
      // Realiza la solicitud GET, pasando el parámetro 'tipo' en la URL
      const response = await axios.get(`${API_URL}?tipo=pintura`);
  
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
    consultAmigurumis,
    consultprinturas

};
