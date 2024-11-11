import {useState} from "react"
function Event(){
    //userState
    const [nombre , setNombre] = useState(0);
    function click(){
        setNombre (nombre + 1);
    }
    return (
        <>
            <h1>This is number : {nombre}</h1>
            <button onClick={click} style={{padding:'10px',background:'red',color:'white',borderRadius:'5px'}}>Click!</button>
        </>
    )
}

export default Event;