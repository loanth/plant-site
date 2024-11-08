// src/components/PlantCatalog.js
import React from 'react';
import PlantCard from './PlantCard';
import './PlantCatalog.css';

const PlantCatalog = ({ plants, onSelectPlant, addToCart }) => (
  <div className="plant-catalog">
    {plants.map(plant => (
      <div key={plant.id} className="plant-item">
        <PlantCard plant={plant} onSelect={() => onSelectPlant(plant)} />
        <button className="add-to-cart-button" onClick={() => addToCart(plant)}>Ajouter au panier</button>
      </div>
    ))}
  </div>
);

export default PlantCatalog;
