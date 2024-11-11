import Presentation from "./Presentation";
// import Compteur from "./Compteur"



function App(){
    let nom='Naoual';
    let article ={id:1 , nom:"sac" , prix:120 }
                
    return(
        <>
            <Presentation nom={nom} /> 
            <Presentation article={article} />
            {/* <Compteur /> */}


        </>
    )
}
export default App;