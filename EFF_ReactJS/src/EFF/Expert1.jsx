import Expert from "./Expert";
import Formulaire from "./Formulaire";
import expertsData from './Data.js';
import Evenements from './Evenements';

function Expert1(){
    return(
        <>
            <Formulaire />
            {expertsData.map(function(item,index){
                return (
                    <>
                    <ul key={index}>
                        <Expert data = {item}/>
                        <Evenements data = {item}/>
                    </ul>
                    </>
                    
                )
            })}
            
        </>
    )
}
export default Expert1;