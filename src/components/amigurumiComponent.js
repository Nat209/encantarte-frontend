import React, { useState, useEffect } from 'react';
import productoService from '../services/productoService';
import CustomModal from './CustomModalComponent';
import '../css/Products.css'; // Estilos personalizados

const Amigurumis = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const data = await productoService.consultAmigurumis();
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
              <th scope="col">Imagen</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
              <th scope="col">Tipo</th>
              <th scope="col">Stock</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((producto) => (
              <tr key={producto.id}>
                <td><img src={producto.imagen_url} alt={producto.imagen_url} width={50}></img></td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td>{producto.tipo}</td>
                <td>{producto.stock > 0 ? `Disponible ${producto.stock}` : 'Agotado'}</td>
                <td>
                
     
                <CustomModal
                title="Editar Producto"
                edit="true"
                product={producto}
                key={producto.id} // Asegúrate de que cada modal tenga una key única
                />
      
                </td>
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
