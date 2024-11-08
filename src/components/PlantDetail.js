import React from 'react';
import './PlantDetail.css';

const PlantDetail = ({ plant, addToCart, goBack }) => (
  <div className="plant-detail">
    <button onClick={goBack}>Retour</button>
    <img src={plant.image} alt={plant.name} />
    <h2>{plant.name}</h2>
    <p>{plant.description}</p>
    <p>Prix : {plant.price}€</p>
    <div className="ratings">

      <Rating level={plant.water} iconClass="fas fa-tint" />
      <br />
      <Rating level={plant.sun} iconClass="fas fa-sun" />
    </div>
    <button onClick={() => addToCart(plant)}>Ajouter au panier</button>
  </div>
);

const Rating = ({ level, iconClass }) => (
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <i key={i} className={`${iconClass} ${i < level ? 'filled' : ''}`} style={{ fontSize: '24px', marginRight: '5px' }}></i>
    ))}
  </div>
);

export default PlantDetail;
