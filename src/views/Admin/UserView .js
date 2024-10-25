import React, { useState } from 'react';
import Cliente from '../../components/clientComponent';
import AdminDashboard from '../../components/adminComponente'; // Asegúrate de importar el componente correspondiente
import CustomModal from '../../components/CustomModalComponent'

const Useradmin = () => {
  const [activeTab, setActiveTab] = useState('admin'); // Estado para controlar la pestaña activa

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Cambia la pestaña activa al hacer clic
  };

  return (
    <div className='container my-3'>
      <div className='text-end'>
      <CustomModal title="Registar Producto" edit="false"></CustomModal>
        
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'admin' ? 'active' : ''}`} 
            onClick={() => handleTabClick('admin')} // Cambia la pestaña activa
            href="#"
          >
            Adminitradores
          </a>
        </li>
        
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'clientes' ? 'active' : ''}`} 
            onClick={() => handleTabClick('clientes')} // Cambia la pestaña activa
            href="#"
          >
            Clientes
          </a>
        </li>
      </ul>
      
      {/* Renderiza el componente correspondiente basado en la pestaña activa */}
      {activeTab === 'admin' && <AdminDashboard />}
      {activeTab === 'clientes' && <Cliente />}
    </div>
  );
};

export default Useradmin;
