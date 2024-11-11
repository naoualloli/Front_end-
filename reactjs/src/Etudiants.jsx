import Etudiant from './Etudiant.jsx';
function Etudiants (){
    let etudiants =[
        {id:1 , nom:'ELADNANI' , prenom:'Naoual' , group:'DD206', couleur:'red'},
        {id:1 , nom:'MRIBEH' , prenom:'Hiba' , group:'DD206', couleur:'blue'},
        {id:1 , nom:'loli' , prenom:'Nada' , group:'DD209', couleur:'yellow'}
    ]
    return (
        <>         
           
                {/* {etudiants.map(function(item, index){
                    return <Etudiant key={index} nom={item.nom} prenom={item.prenom} couleur={item.couleur}/>
                })} */}

                {etudiants.map(function(item, index){
                    return <Etudiant key={index} etudiants={item}/>
                })}

 
        </>
    )
}
export default Etudiants;