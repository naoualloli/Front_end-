// src/components/Menu.js
import React from 'react';

function Menu({ setProduit }) {
    return (
        <nav>
            <button onClick={() => setProduit('produit')}>Produits</button>
            <button onClick={() => setProduit('nouveauProduit')}>Nouveau Produit</button>
            <button onClick={() => setProduit('ventes')}>Ventes</button>
        </nav>
    );
}

export default Menu;


