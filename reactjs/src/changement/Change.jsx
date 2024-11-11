import {useState} from "react"
function Change(){
    const [id , setId] = useState('');
    const [nom , setNom] = useState('');
    const [prenom , setPrenom] = useState('');
    const [etudiants , setEtudiants] = useState([
        {id:1 , nom:'ELADNANI' , prenom:'Naoual'},
        {id:1 , nom:'MRIBEH' , prenom:'Hiba'},
        {id:1 , nom:'loli' , prenom:'Nada'}

    ]);
    function save(){
        setEtudiants ([...etudiants, {id:id , nom:nom , prenom:prenom}]);
    }
    return (
        <>
            <h1>{nom}</h1>
            <input onChange={(e)=>setId(e.target.value)} placeholder="ID"/>
            <input onChange={(e)=>setNom(e.target.value)} placeholder="Nom"/>
            <input onChange={(e)=>setPrenom(e.target.value)} placeholder="Prenom"/>

            <button onClick={save}>Save</button>

            <ul>
                {
                    etudiants.map(function(item,index){
                        return <li key={index}>{item.nom}</li>
                    })
                }
            </ul>

            
        </>
    )
}

export default Change;