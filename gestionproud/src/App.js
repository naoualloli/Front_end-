// src/App.js
import React, { useState } from 'react';
import Menu from './components/Menu';
import Produit from './components/Produit';
import NouveauProduit from './components/NouveauProduit';
import Ventes from './components/Ventes';
import "./style.css"

function App() {
    const [activeTab, setActiveTab] = useState('produit');
    const [products, setProducts] = useState([]);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <div className="App">
            <Menu setActiveTab={setActiveTab} />
            {activeTab === 'produit' && <Produit products={products} />}
            {activeTab === 'nouveauProduit' && <NouveauProduit onAddProduct={handleAddProduct} />}
            {activeTab === 'ventes' && <Ventes />}
        </div>
    );
}

export default App;