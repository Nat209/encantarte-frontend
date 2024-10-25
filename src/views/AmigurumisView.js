import React, { useState, useEffect } from 'react';
import productoService from '../services/productoService';
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
      <p className="product-description">No olvides que podemos hacer el diseño que quieras... O crea el tuyo para hacer tu experiencia unica</p>

      {products.length > 0 ? (
        <div className="row">
          {products.map((producto) => (
            <div className="col-md-4 col-sm-6 mb-4" key={producto.id}>
              <div className="card product-card h-100">
                <img
                  src={producto.imagen_url}
                  alt={producto.nombre}
                  className="card-img-top product-image"
                />
                <div className="card-body">
                  <h2 className="card-title product-name">{producto.nombre}</h2>
                  <p className="card-text product-description">{producto.descripcion}</p>
                  <p className="product-price">Precio: $ {producto.precio}</p>
                  <p className="product-type">Tipo: {producto.tipo}</p>
                  <p className="product-stock">
                    {producto.stock > 0 ? `Disponible ${producto.stock}` : 'Agotado'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-products">No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default Amigurumis;
