import React from"react";

class Presentation extends React.Component{
    render(){
        return(
            <>
                <h1>wellcom {this.props.nom} 😊</h1>
                <h1> {this.props.article.nom}</h1>
            </>
        )
    }
}
export default Presentation ;
