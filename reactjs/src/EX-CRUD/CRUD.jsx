import { useState } from "react";
import Etudiants from "../Etudiants";
function CRUD(){
    const [id, setId] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [etudiant, setEtudiant] = useState([ ]);
    const [selectedItem , setSelectedItem ] = useState({
      id : '' ,
      nom : '',
      prenom : '',
      email : ''
    })

    function Sauvgarder(e){  
      e.preventDefault()
      setEtudiant([...etudiant, {id,nom,prenom,email}])
      console.log(etudiant)
             
    }
    function handeleUpdate(){
      let newEtudiant = Etudiants.map(function(item){
        if (item.id === id){
          item.nom = nom ;
          item.prenom = prenom ;
          item.email = email ;
        }
        return item 
      })
      setEtudiant(newEtudiant)
    }
    

    return(
        <>
              <form
            className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
            
        >
            <h2 className="text-2xl font-semibold mb-6 text-pink-500">Gestion Des Etudiants</h2>
            <label  className="block text-sm font-medium text-pink-500 mb-1">ID</label>
        <input
          type="id"
          onChange={(e)=>setId(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
          value={id}
          placeholder="..."
        />
       
           
        <div className="mb-4">
        <label  className="block text-sm font-medium text-pink-500 mb-1">Nom</label>
        <input
          
          onChange={(e)=>setNom(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
          value={nom}
          placeholder="..."
        />
      </div>
     
      <div className="mb-4">
        <label  className="block text-sm font-medium text-pink-500 mb-1">Prenom</label>
        <input
          
          onChange={(e)=>setPrenom(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
          value={prenom}
          placeholder="..."
        />
      </div>
      <div className="mb-4">
      <label  className="block text-sm font-medium text-pink-5` `00 mb-1">Email</label>
        <input
          
          onChange={(e)=>setEmail(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
          value={email}
          placeholder="..."
        />
       </div>
     <br />
            <button
                type="submit"
                onClick={Sauvgarder}
                className="w-full bg-pink-600 text-white py-2 rounded-md "
            >
                Sauvgarder
            </button>
            <br />
            <br />
            <button
                onClick={handeleUpdate}
                className="w-full bg-pink-600 text-white py-2 rounded-md "
            >
                update
            </button>
           
            <p></p>
          
        </form>

        <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-pink-500 text-left">Id</th>
            <th className="py-3 px-6 text-pink-500 text-left ">Non</th>
           
            <th className="py-3 px-6 text-pink-500 text-center">Prenom</th>
            <th className="py-3 px-6 text-pink-500 text-center">Email</th>
            <th className="py-3 px-6 text-pink-500 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          { etudiant.map(function(item,index){
                        return ( <>
            <tr  className="border-b border-gray-200 hover:bg-gray-100" key={index}>     
              <td className="py-3 px-6 text-left" >{item.id}</td>
              <td className="py-3 px-6 text-left" >{item.nom}</td>
              <td className="py-3 px-6 text-center" >{item.prenom}</td>
              <td className="py-3 px-6 text-center">{item.email}</td>
              <td className="py-3 px-6 text-center">
                <button 
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                onClick={()=>{
                    let newEtudiant = etudiant.filter(
                        function(element){
                            return element.id !== item.id
                        }
                    )
                    setEtudiant([...newEtudiant])
                }}>
                Delete
              </button>
           
              <p></p>
              <button
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                onClick={()=>{
                  setId(item.id);
                  setNom(item.nom);
                  setPrenom(item.prenom);
                  setEmail(item.email);
                }}>
                update
              </button>
              </td>
              
              
            </tr>
            </>
              )
                        
            })
          }
        
        </tbody>
      </table>
    </div>

           
        </>
    )
}
export default CRUD ;















// import React from 'react';
// import {useState} from "react"
// import './style.css';

// function CRUD (){
//     let list =[
//         {id:1 , nom:'ELADNANI' , prenom:'Naoual' , group:'DD206'},
//         {id:2 , nom:'MRIBEH' , prenom:'Hiba' , group:'DD206'},
//         {id:3 , nom:'lOLI' , prenom:'Nada' , group:'DD209'}
//     ]
//     const [lists, setList] =useState(list)
//     return (       
//            <div className='crud'>
//             <div>
//                 <AddList setList={setList}/>
//                 <table>
//                    {lists.map((current)=>( 
//                           <tr>
//                              <td>{current.nom}</td>
//                              <td>{current.prenom}</td>
//                              <td>{current.group}</td>
//                              <td>
//                                 <button className='edit'>Edit</button>
//                                 <button className='delete'>Delete</button>
//                              </td>
//                           </tr>
//                         ))
//                     }
//                 </table>
//                 </div>
//            </div>
//     )
// }

// function AddList({setList}){
//     function handleSumit(event){
//         event.preventDefault();
//         const nom = event.target.elements.nom.value;
//         const prenom = event.target.elements.prenom.value;
//         const group = event.target.elements.group.value;
//         const newlist ={
//             nom ,prenom,group
//         }
//         setList((prevList)=>{
//             return prevList.concat(newlist)
//         })
//     }
//     return(
//         <form className='addForm' onSubmit={handleSumit}>
//             <input type="text" name='nom' placeholder='Nom' />
//             <input type="text" name='prenom' placeholder='Prenom' />
//             <input type="text" name='prenom' placeholder='Group' />
//             <button type='submit'>+</button>
//         </form>
//     )
// }
// export default CRUD;