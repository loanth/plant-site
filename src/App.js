// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PlantCatalog from './components/PlantCatalog';
import PlantDetail from './components/PlantDetail';
import Cart from './components/Cart';


const App = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [cart, setCart] = useState([]);

  const plants = [
    { id: 1, name: "Monstera", price: 25, water: 3, sun: 4, image: "/images/monstera.webp", description: "Grande plante tropicale." },
  { id: 2, name: "Ficus Lyrata", price: 30, water: 2, sun: 5, image: "/images/ficus.jpg", description: "Plante élégante aux feuilles de violon." },
  { id: 3, name: "Aloe Vera", price: 15, water: 1, sun: 3, image: "/images/aloe.webp", description: "Succulente médicinale." },
  { id: 4, name: "Pothos", price: 20, water: 2, sun: 3, image: "/images/pothos.webp", description: "Plante grimpante facile à entretenir." },
  { id: 5, name: "Cactus", price: 10, water: 1, sun: 5, image: "/images/cactus.webp", description: "Plante succulente résistante à la chaleur." },
  { id: 6, name: "Sansevieria", price: 18, water: 1, sun: 2, image: "/images/Sansevieria.webp", description: "Plante résistante et purificatrice d'air." },
  { id: 7, name: "Calathea", price: 22, water: 3, sun: 2, image: "/images/Calathea.webp", description: "Plante d'intérieur à feuilles colorées." },
  { id: 8, name: "Pilea", price: 28, water: 2, sun: 4, image: "/images/Pilea.webp", description: "Plante ronde et populaire, facile à cultiver." },
  { id: 9, name: "Philodendron", price: 24, water: 2, sun: 3, image: "/images/Philodendron.webp", description: "Plante grimpante ou traînante décorative." },
  { id: 10, name: "ZZ Plant", price: 16, water: 1, sun: 3, image: "/images/ZZPlant.webp", description: "Plante résistante à la sécheresse." },
  { id: 11, name: "Spider Plant", price: 14, water: 2, sun: 4, image: "/images/Spider.webp", description: "Plante facile à cultiver et purificatrice." },
  { id: 12, name: "Lavender", price: 12, water: 1, sun: 5, image: "/images/Lavender.webp", description: "Plante aromatique avec un parfum relaxant." },
  { id: 13, name: "Orchidée", price: 35, water: 3, sun: 4, image: "/images/Orchidee.webp", description: "Plante élégante aux fleurs colorées." },
  { id: 14, name: "Bamboo", price: 18, water: 3, sun: 5, image: "/images/Bamboo.webp", description: "Plante de croissance rapide et zen." },
  { id: 15, name: "Begonia", price: 20, water: 3, sun: 2, image: "/images/Begonia.webp", description: "Plante à fleurs décoratives et feuillage." },
  { id: 16, name: "Geranium", price: 10, water: 2, sun: 5, image: "/images/Geranium.webp", description: "Plante à fleurs vibrantes et parfumées." },
  { id: 17, name: "Cresson", price: 5, water: 2, sun: 4, image: "/images/Cresson.webp", description: "Plante rapide à cultiver, idéale pour les salades." },
  { id: 18, name: "Basilic", price: 8, water: 2, sun: 5, image: "/images/Basilic.webp", description: "Herbe aromatique utilisée en cuisine." },
  { id: 19, name: "Mint", price: 7, water: 2, sun: 4, image: "/images/Mint.webp", description: "Plante aromatique rafraîchissante." },
  { id: 20, name: "Kalanchoé", price: 15, water: 1, sun: 3, image: "/images/Kalanchoe.webp", description: "Succulente à fleurs colorées." },
  { id: 21, name: "Tigernut Plant", price: 13, water: 2, sun: 4, image: "/images/Tigernut.webp", description: "Plante à tubercules nutritifs." },
  { id: 22, name: "Ivy", price: 17, water: 2, sun: 4, image: "/images/Ivy.webp", description: "Plante grimpante et rustique." },
  { id: 23, name: "Ferns", price: 20, water: 3, sun: 2, image: "/images/Ferns.webp", description: "Plante classique pour intérieur ombragé." }
    
  ];

  const addToCart = (plant) => setCart([...cart, plant]);
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const getTotalPrice = () => {
    return cart.reduce((total, plant) => total + plant.price, 0);
  };

  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {selectedPlant ? (
          <PlantDetail plant={selectedPlant} addToCart={addToCart} goBack={() => setSelectedPlant(null)} />
        ) : (
          <PlantCatalog plants={plants} onSelectPlant={setSelectedPlant} addToCart={addToCart}/>
        )}
        <Cart cart={cart} removeFromCart={removeFromCart} totalPrice={getTotalPrice()} />
        
      </div>
      
    </div>
  );
};

export default App;
