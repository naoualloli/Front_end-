import './style.css';
import Logo from '../EX/Logo.jsx';
import Nav from '../EX/Nav.jsx';

function Header(){
    return(<>
        <div className="header">
            <Logo/>
            <Nav/>

        </div>
    </>)
    
}

export default Header;