import { useState,useEffect } from "react";

import "./App.css";
function App(){
    const emptyStagiaire ={ 
                            matricule :"" ,
                            nom:"",
                            prenom:"",
                            ville:"",
                            codPostal:null,
                            moyenne:null 
                          }
    const [stagiaire ,setStagiaire]=useState(emptyStagiaire)
    const [stagiaires ,setStagiaires]=useState([])
    const [stagiaire2 ,setStagiaire2]=useState([])

    
    function onInputChange(e){
        let name = e.target.name
        let val = e.target.value
        let _stagiaire ={...stagiaire}
        _stagiaire[name]=val
        setStagiaire(_stagiaire)
    }

    useEffect (()=>{
        stagiaires.length >0 ? 
        setStagiaire({...stagiaire,id:stagiaires[stagiaires.length - 1].id+1}):
        setStagiaire({...stagiaire,id:1})
    },[stagiaires.length])

    const listSt=[{ id :1 ,
                    matricule :"BA1947" ,
                    nom:"ELADNANI",
                    prenom:"Naoual",
                    ville:"CASA",
                    codPostal:19,
                    moyenne:17 
                }]
    useEffect(()=>{
        setStagiaires(listSt)
    },[])

    function ajouterHandler(){
        //conditions
        let stFound = stagiaires.find(function(st){
            return st.matricule === stagiaire.matricule
        })
        if (!stFound){
            if (stagiaire.moyenne >= 0 && stagiaire.moyenne <=20 && stagiaire.codPostal >= 0 && stagiaire.codPostal <=20){
               if(stagiaire.nom != "" && stagiaire.prenom != "" && stagiaire.ville != "" && stagiaire.codPostal != "" && stagiaire.moyenne != "" ) {
                 setStagiaires([...stagiaires,stagiaire])
                }else{
                  alert("tous les champs sont obligatoires")
                }   
            }else{
              alert("la moyenne et code postal doit etre 0 et 20")
            }
        }else{
            alert("matricule doit etre unique")
        }
       
    }
__
    function suprimerHandler(id){
        setStagiaires(stagiaires.filter(function(st){
            return st.id !== id
        }))
    }

    function modifierHandler(id){
        let _stagiaire = stagiaires.find(function(st){
            return st,id === id
        })
        setStagiaire(_stagiaire)
    }

    function viderHandler(){
        setStagiaire(emptyStagiaire)
    }

    function filterHandler(){
        let listSt2 =[]
        if (stagiaire.ville != "" && stagiaire.nom != ""){
            listSt2 = stagiaires.filter(function(item){
              return item.ville === stagiaire.ville && item.nom === stagiaire.nom
            })
        }else if (stagiaire.ville != "" ){
            listSt2 = stagiaires.filter(function(item){
                return item.ville === stagiaire.ville 
            })
        }else if (stagiaire.nom != ""){
            listSt2 = stagiaires.filter(function(item){
                return  item.nom === stagiaire.nom
              })
        }
        setStagiaire2(listSt2)
    }
    function iniRechHandler(){
        setStagiaire2([])
    }
    return(
        <>
        <h4>EVALUATION DE FIN DE MODULE REACTJS ✏</h4>
        <div>
            <p>
                id         :
                <input name="id" 
                value={stagiaire.id} 
                readOnly 
                onChange={onInputChange}>
                </input><br/>

                matricule  :
                <input name="matricule" 
                value={stagiaire.matricule} 
                onChange={onInputChange} >
                </input><br/>

                nom        :
                <input name="nom" 
                value={stagiaire.nom} 
                onChange={onInputChange}>
                </input><br/>

                prenom     :
                <input name="prenom" 
                value={stagiaire.prenom} 
                onChange={onInputChange}>
                </input><br/>

                ville      :
                <input name="ville" 
                value={stagiaire.ville} 
                onChange={onInputChange} >
                </input><br/>
                code postal:
                <input name="codPostal" 
                value={stagiaire.codPostal} 
                onChange={onInputChange}>
                </input><br/>

                moyenne    :
                <input name="moyenne" 
                value={stagiaire.moyenne} 
                onChange={onInputChange} >
                </input><br/>
            </p>
        </div>
        <div>
            <button  onClick={ajouterHandler}>Ajouter</button>
            <button onClick={filterHandler}>Filter ville et nom 🔎</button>
            <button  onClick={viderHandler}>Vider</button>
            <button onClick={iniRechHandler}>initialiser recherche</button>
        </div>
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>MATRICULE</th>
                        <th>NOM</th>
                        <th>PRENOM</th>
                        <th>VILLE</th>
                        <th>CODE POSTAL</th>
                        <th>MOYENNE</th>
                        <th>SUPRISSION</th>
                        <th>MODIFICATION</th>
                    </tr>
                </thead>
                <tbody>
                    {stagiaires.map(function(st){
                        return(
                            <tr key={st.id}>
                                <td>{st.id}</td>
                                <td>{st.matricule}</td>
                                <td>{st.nom}</td>
                                <td>{st.prenom}</td>
                                <td>{st.ville}</td>
                                <td>{st.codPostal}</td>
                                <td>{st.moyenne}</td>
                                <td><button className="suprimer" onClick={()=>suprimerHandler(st.id)}>Suprimer 🪣</button></td>
                                <td><button className="modifier"  onClick={()=>modifierHandler(st.id)}>Modifier 🖊</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {stagiaires.length === 0 && <h2>le tableau de stagiaires est vide</h2>}
        </div>
        <div>
            <ul>
                {stagiaire2.map(function(st){
                return <li key={st.id}>{st.matricule}{st.nom}{st.prenom}</li>
            })}
            </ul>
            {stagiaire2.length === 0 && <h2>le tableau de stagiaires filter est vide</h2>}
        </div>
        <div>
            <ul>
                <li>la moyenne generale la plus elevee :
                    {Math.max(...stagiaires.map(function(item){
                        return item.moyenne
                    }))}
                </li>
                <li>la moyenne generale la moins elevee :
                    {Math.min(...stagiaires.map(function(item){
                        return item.moyenne
                    }))}
                </li>
                <li>la moyenne generale de la classe :
                    {stagiaires.reduce((somme,currentItem)=>
                        somme += parseInt(currentItem.moyenne)/stagiaires.length,0)}
                </li>
            </ul>
        </div>
        </>
    )
}
export default App;