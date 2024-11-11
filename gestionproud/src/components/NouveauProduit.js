// src/components/NouveauProduit.js
import React, { useState } from 'react';

function NouveauProduit({ onAddProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct({ name, price });
        setName('');
        setPrice('');
    };

    return (
        <div>
            <h2>Ajouter un Nouveau Produit</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Nom du produit" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Prix" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default NouveauProduit;