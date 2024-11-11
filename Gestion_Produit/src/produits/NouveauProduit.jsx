import { useState } from "react"
import { useNavigate } from "react-router-dom";

function NouveauProduit({categories,setProduits,produits}){
    const navigate = useNavigate()
    const [produit,setProduit] = useState({id:"",
                                            libelle:"",
                                            categorie:{},
                                            quantiteStockee:"",
                                            prix:""
                                          });

    function inputChange(e){
        let name = e.target.name;
        let val = e.target.value;
        let _produit = {...produit};
        _produit[name] = val;

        setProduit(_produit);
    }

    function categorieChange(e){
        let _categorie = categories.find(function(item,index){
            return item.id == e.target.value;
        })
        setProduit({...produit,categorie:_categorie})
    }

    function saveHandler(e){
        e.preventDefault();
        setProduits([...produits,produit])
        navigate('/')
    }
    
    return(
        <>
            <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="text-2xl py-4 px-6 bg-pink-300 text-white text-center font-bold uppercase">
          Ajouter un Produit
        </div>
        <form class="py-4 px-6"  >
          <div class="mb-4">
            <label class="block text-pink-300 font-bold mb-2" for="name">
              ID
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="id"
              type="number"
              placeholder="Auto incremented"
              onChange={inputChange}
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-pink-300 font-bold mb-2" for="email">
              Nom produit
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="libelle"
              type="text"
              placeholder="Nom du produit"
              onChange={inputChange}
            ></input>
          </div>
          
          <div class="mb-4">
            <label class="block text-pink-300 font-bold mb-2" for="service">
              Categorie
            </label>

            <select
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="categorie"
              onChange={categorieChange}
            >
                {categories.map(function(item,index){
                    return(
                        <option value={item.id} key={index}>{item.libelle}</option>
                    )
                })}
              
            </select>
          </div>
          
          <div class="mb-4">
            
          </div>
          <div class="mb-4">
            <label class="block text-pink-300 font-bold mb-2" for="email">
              Quantite
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="quantiteStockee"
              type="number"
              placeholder="Qte"
              onChange={inputChange}
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-pink-300 font-bold mb-2" for="email">
              Prix
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="prix"
              type="number"
              placeholder="Prix"
              onChange={inputChange}
            ></input>
          </div>
          
          <div class="flex items-center justify-center mb-4">
            <button
              class="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-300 focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={saveHandler}
            >
              Valider
            </button>
          </div>
        </form>
      </div>
        </>
    )
}
export default NouveauProduit