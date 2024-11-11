function Header(){
    let isLogged = true ;
    let nom = 'Naoual loli';
    // return(<>
    //     {isLogged === true ?
    //     <h1> Welcome {nom}!! </h1>
    //     : <h1> Please Logged in </h1>
    //     }
    //     <h1>This is our first composent using function</h1>
    //     <p>paragraphe 1</p>
    // </>)
    return(<>
        {isLogged &&
        <h1> Welcome {nom}!!!! </h1>
        }
        <h1>This is our first composent using function</h1>
        <p>paragraphe 1</p>
    </>)
    
}

export default Header