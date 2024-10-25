import React from 'react';

const HeaderGeneral = () => {

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid d-flex justify-content-between">
    <a className="navbar-brand logo mx-2" href="/">
    <img src="/img/logo.png" alt="Encantarte"></img> EncantARTE</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/amigurumis">Amigurumis</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/pinturas">Pinturas</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link pedido " >Pide tu productos</a>
        </li> */}
        <li className="nav-item itembutton">
          <a className="btn btn-login mx-2" href="/login" type="submit">Iniciar sesión</a>
        </li>
        <li className="nav-item itembutton">
          <a className="btn btn-register mx-2" href="/create" type="submit">Registrarme</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



    </header>
  );
};

export default HeaderGeneral;
