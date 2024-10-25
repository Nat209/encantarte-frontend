import React from 'react';
import '../css/Home.css';

const Home = () => {
     // Define los productos en formato JSON
  const products = [
    {
      title: 'Amigurumis',
      description: 'Tejidos a mano con dedicación y mucho amor.',
      imagen:"https://i.pinimg.com/474x/27/94/77/279477e514c1d1d862f81d798109f2c0.jpg",
      route:"amigurumis"
    },
    {
      title: 'Cuadros Personalizados',
      description: 'Arte único para decorar tu espacio favorito.',
      imagen:"https://i.pinimg.com/564x/88/37/22/883722f0d6f6db900e29650bc62df2c9.jpg",
      route:"/cuadros"
    },
    {
      title: 'Combos Especiales',
      description: 'Combina amigurumis con pinturas y encanta quien más quieres.',
      imagen:"https://i.pinimg.com/564x/d6/8f/93/d68f93756f83408b364c77f800d51a52.jpg",
      route:"/todo"
    },

  ];

  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="overlay">
          <img src='/img/home.png'></img>
          <h1 className="hero-title">Bienvenido a EncantARTE</h1>
          <p className="hero-subtitle">Descubre amigurumis y cuadros personalizados llenos de magia y ternura</p>
          
          <a href="#features" className="cta-button">Explorar</a>
        </div>
      </header>

      <section id="features" className="features-section">
        <h2>Nuestros productos</h2>
        <div className="features">
          {products.map((product, index) => (
            <div className="feature-item" key={index}>
              <h3><a href={product.route}>{product.title}</a></h3>
              <p>{product.description}</p>
              <img src={product.imagen} width="300" height="350"></img>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Home;
