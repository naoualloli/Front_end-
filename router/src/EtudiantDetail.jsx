import { useParams } from "react-router-dom";
function EtudiantDetail (){
    const {id,groupe}=useParams();
    
    return(
        <>
            <h1>Detail : {id} {groupe}</h1>
        </>
    )
}
export default EtudiantDetail ;