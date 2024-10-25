// components/WhatsappButton.js
import React from 'react';
import '../css/whtas.css';

const WhatsappButton = () => {
  const phoneNumber = "3218900801"; // Cambia por el número de WhatsApp de la empresa (código de país incluido)

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp Chat" 
      />
    </div>
  );
};

export default WhatsappButton;
