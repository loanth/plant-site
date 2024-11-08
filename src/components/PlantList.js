// src/PlantList.js
import React from 'react';
import PlantCard from './PlantCard';
import '../App.css';

const PlantList = ({ plants, onSelectPlant }) => (
  <div className="plant-list">
    {plants.map(plant => (
      <PlantCard key={plant.id} plant={plant} onSelect={() => onSelectPlant(plant)} />
    ))}
  </div>
);

export default PlantList;
