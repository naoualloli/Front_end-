import { Link,useNavigate } from "react-router-dom"

function Produits({produits,setProduits}){
    const navigate = useNavigate();

    function supprimerHandler(id){
        setProduits(produits.filter(function(item){
            return item.id !== id
        }))  
    }
   
    
    return(
        <>
            <h1 className="text-4xl font-bold text-pink-300 my-4 text-center" >liste des produits</h1>
            


            <div className="overflow-hidden ">
                <Link to="/produits/nouveau">
                <button className="border border-pink-500 bg-pink-300 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-pink-500 focus:outline-none focus:shadow-outline">
                    Ajouter
                </button>	
				</Link>
                <table className=" min-w-full rounded-xl">
                    <thead>
                        <tr className="bg-gray-50">
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"> Id </th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Libelle</th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Categorie</th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Prix</th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Quantité</th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">Total</th>
                            <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300 ">

                    {produits.map(function(item,index){
                        return (
                            <tr className="bg-white transition-all duration-500 hover:bg-gray-50" key={index}>
                            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">{item.id}</td>
                            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.libelle} </td>
                            {/* <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.categorie.libelle}</td> */}
                            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.prix}</td>
                            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.quantiteStockee}</td>
                            <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.quantiteStockee * item.prix}</td>
                            <td className=" p-5 ">
                                <div className="flex items-center gap-1">
                                <button onClick={() => supprimerHandler(item.id)} className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                 >
                                    Supprimer
                                </button>
                                <p>
                                    <Link to="/produits/nouveau"> 
                                    <button onClick={() => modifierHandler(item.id)}  className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-700 focus:outline-none focus:shadow-outline">
                                    Modifier
                                    </button>
                                    </Link>
                                </p>
                                
                                </div>
                            </td>
                        </tr>
                        )
                    })}

                        
                        
                    </tbody>
                </table>
            </div>
            
        </>
    )
 
}
export default Produits