import React from 'react';
import authService from '../services/authService';

const HeaderGeneral = () => {
  const handleLogout = async (e) => {
    e.preventDefault();
    // Llama al servicio para cerrar sesión
    await authService.logout();
    // Aquí puedes redirigir al usuario o limpiar el estado
    window.location.href = '/login'; // Redirige al login después de cerrar sesión
  };

  return (
    <header>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/about">About</a></li>
          <li>
            <button onClick={handleLogout} type="button">
              Cerrar sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderGeneral;
