function Etudiant (props){
    console.log(props)
    return(
        <>
            {/* <div style={{color:props.couleur ,backroundColor:'pink', width:'100px' , height:'100px' }}>
                <label>Nom : {props.nom} </label>
                <label>prenom : {props.prenom} </label>
            </div> */}
            
            <div style={{color:props.etudiants.couleur ,backroundColor:'pink', width:'100px' , height:'100px' }}>
                <label>Nom : {props.etudiants.nom} </label>
                <label>prenom : {props.etudiants.prenom} </label>
            </div>
        </>
    )
}
export default Etudiant ;