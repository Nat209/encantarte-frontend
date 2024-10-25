import React, { useState, useEffect } from 'react';
import userService from '../services/userService';
import CustomModal from './CustomModalComponent';
import '../css/Products.css'; // Estilos personalizados

const Amigurumis = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const data = await userService.consultUsers();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError('Error al cargar los productos');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);



  if (loading) {
    return <div className="loading">Cargando productos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container amigurumis-container">
      <h1 className="title">Nuestros Amigurumis</h1>
      <p className="product-description">No olvides que podemos hacer el diseño que quieras... O crea el tuyo para hacer tu experiencia única</p>

      {products.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              
            </tr>
          </thead>
          <tbody>
            {products.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.email}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-products">No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default Amigurumis;
