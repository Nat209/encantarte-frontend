
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/productos'; // Cambia la URL según tu backend

// Función para iniciar sesión y guardar el token en localStorage
const register = async (formData) => {
    console.log(formData)
    try {
      
  
      // Realizar la solicitud POST a la API
      const response = await axios({
        url: `${API_URL}`, // Asegúrate de que esta sea la URL correcta
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data', // Importante para la carga de archivos
        },
        data: {
        nombre: formData.nombre,
        descripcion: formData.descripcion,
        precio: formData.precio,
        tipo: formData.tipo,
        imagen_url: formData.imagen_url, 
        stock: formData.stock
            },
      });
  
      console.log(response.data); // Para verificar la respuesta del servidor
      return response.data; 
    } catch (error) {
      console.error('Error en el registro de usuario:', error.response?.data || error.message);
      throw new Error('Error en el registro de usuario');
    }
  };
  
  
  
const consultAmigurumis = async () => {
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
  const consultprinturas = async () => {
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

  const update = async (id ,formData) => {
    console.log(formData)
    try {
      
  
      // Realizar la solicitud POST a la API
      const response = await axios({
        url: `${API_URL}/${id}`, // Asegúrate de que esta sea la URL correcta
        method: 'PUT',
      
        data: {
        nombre: formData.nombre,
        descripcion: formData.descripcion,
        precio: formData.precio,
        tipo: formData.tipo,
        stock: formData.stock
            },
      });
  
      console.log(response.data); // Para verificar la respuesta del servidor
      return response.data; 
    } catch (error) {
      console.error('Error en el registro de usuario:', error.response?.data || error.message);
      throw new Error('Error en el registro de usuario');
    }
  };
  

  
  
  
  


export default {
    register,
    consultAmigurumis,
    consultprinturas,
    update

};
