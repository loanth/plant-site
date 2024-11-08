import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  // Calcul du total du panier
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Regroupement des articles par nom et comptabilisation de leur quantité
  const groupItems = () => {
    const grouped = {};
    cart.forEach((item) => {
      if (grouped[item.name]) {
        grouped[item.name].quantity += 1;
      } else {
        grouped[item.name] = { ...item, quantity: 1 };
      }
    });
    return grouped;
  };

  const groupedItems = groupItems();

  return (
    <div className="cart">
      <h3>Panier</h3>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul>
            {Object.values(groupedItems).map((item, index) => (
              <li key={index}>
                {item.name} x{item.quantity} - {item.price}€ 
                <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
              </li>
            ))}
          </ul>
          <div className="total">
            <h4>Total : {getTotalPrice()}€</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
