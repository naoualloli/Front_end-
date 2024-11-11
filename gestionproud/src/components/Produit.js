// src/components/Produit.js
import React from 'react';

function Produit({ products }) {
    return (
        <div>
            <h2>Liste des Produits</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}€</li>
                ))}
            </ul>
        </div>
    );
}

export default Produit;