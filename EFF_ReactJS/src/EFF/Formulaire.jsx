import {useState, useEffect } from "react";


function Formulaire(){

    const [evenement,setEvenement] = useState({
        théme:"",
        date_debut:"",
        date_fin:"",
        cout_journalier:"",
    })
    const [evenements,setEvenements] = useState([])

    function ajouter(){
        setEvenements([...evenements,...evenement]);
        console.log(evenements);
        
    }


    return(
        <>
            <div className="form-container">
        <h1 className="form-title">ADD A STUDENT2</h1>
        <div className="form">
          <input
            type="text"
            name="thème"
            required
            placeholder="thème" onChange={(e)=>setEvenement({...evenement,théme:e.target.value})}/>
          <input
            type="date"
            name="date_debut"
            required
            placeholder="date_debut" onChange={(e)=>setEvenement({...evenement,date_debut:e.target.value})}/>

          <input
            type="date"
            name="date_fin"
            required
            placeholder="date_fin" onChange={(e)=>setEvenement({...evenement,date_fin:e.target.value})}/>
          <input
            type="text"
            name="cout_journalier"
            required
            placeholder="cout_journalier" onChange={(e)=>setEvenement({...evenement,cout_journalier:e.target.value})}/>

          <button className="btn save-btn" onClick={ajouter}>
            SAVE
          </button>
        </div>
      </div>
      {/* {evenements.map(function(item,index){
        return(
            <h3 key={index}>{`l'expert : assurera le théme : ${item.théme} un cout journalier : ${item.cout_journalier} pour le duréé de 4 jour `}</h3>
        )
      })} */}
        </>
    )
}
export default Formulaire;