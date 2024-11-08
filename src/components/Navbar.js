import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Déclare un état pour gérer la visibilité des informations de contact
  const [showContactInfo, setShowContactInfo] = useState(false);

  // Fonction pour basculer l'état showContactInfo
  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/images/59917.jpg" alt="Plant Store Logo" className="logo" />
        <h2>Plant Store</h2>
      </div>
      <ul>
        <li onClick={toggleContactInfo} style={{ cursor: 'pointer' }}>
          Contact
        </li>
      </ul>
      {showContactInfo && (
        <div className="contact-info">
          <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
          <p><strong>Email :</strong> contact@plantstore.com</p>
          <p><strong>Adresse :</strong> 123 Rue des Plantes, Paris, France</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
