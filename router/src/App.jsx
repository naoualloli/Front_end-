import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import EtudiantDetail from "./EtudiantDetail"
function App(){
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/etudiants/:id/:groupe" element={<EtudiantDetail/>}/>
            </Routes>
        </>
    )
}
export default App;