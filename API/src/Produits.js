import { useEffect ,useState } from "react";
// import axios from "axios";

function Produits (){
    const [produits , setProduits]= useState([]);

    ////////fetch

    useEffect(function(){
        //API
        fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
            return response.json()
        }).then(function(data){
            setProduits(data)
        })
    },[])

    // useEffect(function(){
    //     async function getProduits() {
    //         const data = await fetch ("https://jsonplaceholder.typicode.com/users")
    //         const produitData = await data.json ()
    //         setProduits(produitData)
    //     }
    //     getProduits() 
    // })


    /////////////axios
    
    // useEffect(function(){
    //     //API
    //     axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
    //         setProduits(response.data)
    //     })
    // },[])

//     useEffect(function(){
//         async function getProduits(){
//             const ProduitData = await axios.get("https://jsonplaceholder.typicode.com/users")
//             setProduits(ProduitData.data)
//         }
//         getProduits();
//     },[])


    return(
        <>
        {produits.map(function(item,index){
            return(
                <ul key={index}>
                    <li>{item.name}</li>
                </ul>
            )
        })}
        </>
    )
}
export default Produits ;