import React from 'react';
//import { useNavigate } from 'react-router-dom';

const ClienteDashboard = () => {
    //const navigate = useNavigate(); // Hook para redireccionar

    const handleLogout = (e) => {
        e.preventDefault(); 
        // Previene el comportamiento por defecto
        localStorage.removeItem('token');
        localStorage.removeItem('user');
         window.location.href = '/'

        // Redirigir al usuario a la página de inicio o de login
        //navigate('/dashboard'); // Cambia la ruta según lo necesites
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand logo mx-2" href="/">
                        <img src="/img/logo.png" alt="Encantarte" /> EncantARTE
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/amigurumis">Usuarios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/pinturas">Pinturas</a>
                            </li>
                            
                            <li className="nav-item itembutton">
                                <button className="btn btn-login mx-2" onClick={handleLogout}>Cerrar sesión</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default ClienteDashboard;
