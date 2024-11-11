
// import {useState} from 'react';
// function ArticleForm(){
//     const [article,setArticle]=useState({
//                                         id:'',
//                                         designatition:'',
//                                         quantite:'',
//                                         prix:''
//                                     })
//     const [articles,setArticles]=useState([]);
//     let sommeTotal =0;

//     function vider (){
//         setArticle({
//             id : '',
//             designatition:'',
//             quantite:'',
//             prix:''
//         })
//     }

//     function ajouter(){
//         setArticles([...articles,{id,designatition,quantite,prix}])
//     }


//     function supprimer(){
//         const newArticles = articles.filter(function(item){
//             return item.id !== article.id;
//         })
//         setArticles([...newArticles]);
//     }

//     function modify(){
//         const newArticles = articles.map(function(item){
//             if(item.id == article.id){
//                 item = {...article}
//             }
//             return item
//         })
//         setArticles(newArticles);
//     }


//     return(
//         <>
//             <form className="m-10">
//                 <label>id :</label>
//                 <input type="text" placeholder="id" className="border-solid border-2 border-cyan-500 m-4 rounded-md " value={article.id} onChange={(e)=>setArticle({...article,id:e.target.value})}/>
//                 <label>designatition :</label>
//                 <input type="text" placeholder="designatition" className="border-solid border-2 border-cyan-500 m-4 rounded-md" value={article.designatition} onChange={(e)=>setArticle({...article,designatition:e.target.value})}/><br />
//                 <label>quantite :</label>
//                 <input type="number" placeholder="quantite" className="border-solid border-2 border-cyan-500 m-4 rounded-md" value={article.quantite} onChange={(e)=>setArticle({...article,quantite:e.target.value})}/>
//                 <label>prix :</label>
//                 <input type="number" placeholder="prix" className="border-solid border-2 border-cyan-500 m-4 rounded-md" value={article.prix} onChange={(e)=>setArticle({...article,prix:e.target.value})}/><br /><br />
//                 <button className="btn-primary p-2 text-white bg-red-900 rounded-md" onClick={ajouter}>Ajouter</button>
//                 <button className="btn-primary p-2 text-white bg-green-900 rounded-md" onClick={modify}>Modify</button>
//             </form>

//             <table className="table-fixed border-solid border-2 ml-20">
//                 <thead>
//                     <tr className="border-solid border-2 p-2">
//                         <th className="border-solid border-2 p-2">ID</th>
//                         <th className="border-solid border-2 p-2">designatition</th>
//                         <th className="border-solid border-2 p-2">quantite</th>
//                         <th className="border-solid border-2 p-2">prix</th>
//                         <th className="border-solid border-2 p-2">les Taches</th>
//                     </tr>
//                 </thead>

//                 <tbody>
                    
//                 {articles.map((item,index)=>(
//                     let prixTotal = Number(item.quantite) * Number(item.prix);
//                     sommeTotal+= prixTotal;
//                     let couleurQuantite = 'black';
//                     // if (item.quantite < 5 ){
                        
//                     // }

//                     <tr className="border-solid border-2" key={index}>
//                         <td className="border-solid border-2 p-2">{item.id}</td>
//                         <td className="border-solid border-2 p-2">{item.designatition}</td>
//                         <td className="border-solid border-2 p-2" >{item.quantite}</td>
//                         <td className="border-solid border-2 p-2">{item.prix}</td>
//                         <td className="border-solid border-2 p-2">{prixTotal}</td>
//                         <td className="border-solid border-2 p-2">
//                         <button className="btn-primary p-2 text-white bg-red-900 rounded-md"  onClick={()=> supprimer(index)}>Supprimer</button>
//                         <button className="btn-primary p-2 text-white bg-green-900 rounded-md" onClick={()=>{
//                             setIndex(index);
//                             setNom(item.nom);
//                             setPrenom(item.prenom);
//                             setGroupe(item.groupe);
//                             setNote(item.note);
//                         }}  >Modify</button>
//                         </td>
//                     </tr>
//                 ))}
                    
                
//                 </tbody>
//                 <tfoot>
//                 <tr>
//                     <th colSpan="2" >Prix total</th>
//                     <td>{sommeTotal} </td>
//                 </tr>
//                 </tfoot>
                       
    
//             </table>

//         </>
//     )
// }
// export default ArticleForm ;