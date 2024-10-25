import React, { useEffect, useState } from 'react';
import productoService from '../services/productoService';

const CustomModal = ({ title, edit, product }) => {
  const [formData, setFormData] = useState({
    id:'',
    nombre: '',
    descripcion: '',
    precio: '',
    tipo: 'amigurumi', // Valor por defecto
    imagen_url: '', // No se debe editar
    stock: '',
  });

  const [isOpen, setIsOpen] = useState(false); // Estado para manejar la apertura del modal

  // Efecto para establecer los datos del formulario cuando se edita un producto
  useEffect(() => {
    if (edit == "true" && product) {
      setFormData({
        id:product.id,
        nombre: product.nombre,
        descripcion: product.descripcion,
        precio: product.precio,
        tipo: product.tipo,
        imagen_url: '', // No mostrar imagen_url en el formulario
        stock: product.stock,
      });
    }
  }, [edit, product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (edit === "false") {
        await productoService.register(formData);
      } else {
        await productoService.update(product.id, formData); // Suponiendo que existe el método update
      }
      setIsOpen(false); // Cerrar el modal después de enviar
    } catch (err) {
      console.error('Error en el envío de datos', err);
    }
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={() => setIsOpen(true)}>
        {title}
      </button>

      {isOpen && (
        <div className="modal fade show" style={{ display: 'block' }} onClick={() => setIsOpen(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">{title}</h1>
                <button type="button" className="btn-close" onClick={() => setIsOpen(false)}></button>
              </div>
              <div className="modal-body">
                <h1>Formulario de Producto</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <textarea
                      className="form-control"
                      id="descripcion"
                      name="descripcion"
                      value={formData.descripcion}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input
                      type="number"
                      className="form-control"
                      id="precio"
                      name="precio"
                      value={formData.precio}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="tipo" className="form-label">Tipo</label>
                    <select
                      className="form-select"
                      id="tipo"
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                    >
                      <option value="amigurumi">Amigurumi</option>
                      <option value="pintura">Pintura</option>
                    </select>
                  </div>

                  {/* No mostrar el campo de imagen_url en edición */}
                  {edit === "false" && (
                    <div className="mb-3">
                      <label htmlFor="imagen_url" className="form-label">URL de Imagen</label>
                      <input
                        type="file"
                        className="form-control"
                        id="imagen_url"
                        name="imagen_url"
                        onChange={(e) => handleChange(e.target.files[0])} // Asegúrate de manejar la carga de imágenes correctamente
                        required
                      />
                    </div>
                  )}

                  <div className="mb-3">
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input
                      type="number"
                      className="form-control"
                      id="stock"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setIsOpen(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomModal;
