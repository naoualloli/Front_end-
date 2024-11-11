import { Route, Routes } from "react-router-dom";
import Produits from "./produits/Produits";
import Ventes from "./ventes/Ventes";
import { useState } from "react";
import NouveauProduit from "./produits/NouveauProduit";


function App(){

    const [categories,setCategories] = useState([
        {id:1,libelle:"médicale"},
        {id:2,libelle:"bureautique"},
        {id:3,libelle:"papier"},
        {id:4,libelle:"électro"}
    ])

    const [produits,setProduits] = useState([{
        id:1,
        libelle:"ordinateur portable",
        categorie:{id:4,libelle:"matériel"},
        quantiteStockee:15,
        prix:5000
    }]);

    return(
        <>
            
            <Routes>
                <Route path="/" element={<Produits produits={produits} setProduits={setProduits}/>}/>
                <Route path="/produits/nouveau" element={<NouveauProduit categories={categories} setProduits={setProduits} produits={produits}/>}/>
                <Route path="/ventes" element={<Ventes/>}/>
            </Routes>
        </>
    )
}
export default App;