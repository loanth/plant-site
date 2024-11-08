// src/components/PlantCard.js
import React from 'react';
import './PlantCard.css';

const PlantCard = ({ plant, onSelect }) => (
  <div className="plant-card" onClick={onSelect}>
    <img src={plant.image} alt={plant.name} />
    <h3>{plant.name}</h3>
    <p>{plant.price}€</p>
  </div>
);

export default PlantCard;
