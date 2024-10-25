import React, { useState } from 'react';
import Amigurumis from '../../components/amigurumiComponent';
import Pinturas from '../../components/pinturaComponent'; // Asegúrate de importar el componente correspondiente
import CustomModal from '../../components/CustomModalComponent'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('amigurumis'); // Estado para controlar la pestaña activa

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
            className={`nav-link ${activeTab === 'amigurumis' ? 'active' : ''}`} 
            onClick={() => handleTabClick('amigurumis')} // Cambia la pestaña activa
            href="#"
          >
            Amigurumis
          </a>
        </li>
        
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'pinturas' ? 'active' : ''}`} 
            onClick={() => handleTabClick('pinturas')} // Cambia la pestaña activa
            href="#"
          >
            Pinturas
          </a>
        </li>
      </ul>
      
      {/* Renderiza el componente correspondiente basado en la pestaña activa */}
      {activeTab === 'amigurumis' && <Amigurumis />}
      {activeTab === 'pinturas' && <Pinturas />}
    </div>
  );
};

export default AdminDashboard;
