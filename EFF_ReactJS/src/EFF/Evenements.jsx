import './style.css';
import Expert from './Expert.jsx';
import Formulaire from './Formulaire.jsx';
import Expert1 from './Expert1.jsx';

function Evenements({data}){
  let sommeTotal = 0;

    console.log(data)
    return(
        <>  
          
          
          <div>
            <div className="table-container">
                    {/* <h1 className="table-title">STUDENT LIST</h1> */}
                    <table className="student-table">
                      <thead>
                        <tr>
                          <th>thème</th>
                          <th>date_debut</th>
                          <th>date_fin</th>
                          <th>description</th>
                          <th>cout_journalier</th>
                          <th>durée</th>
                          <th>cout Totale</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.evenements.map(function(item,index){
                          let coutTotal = item.durée * item.cout_journalier

                          sommeTotal =+ coutTotal;

                            return(
                                <tr key={index}>
                                    <td>{item.thème}</td>
                                    <td>{item.date_debut}</td>
                                    <td>{item.date_fin}</td>
                                    <td>{item.description}</td>
                                    <td>{item.cout_journalier}</td>
                                    <td>{item.durée}</td>
                                    <td>{coutTotal}</td>
                                </tr>
                            )
                            
                        })}
                            
                        
                          
                        
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colSpan="2" id="best">Somme</th>
                          <td id="best-note" colSpan="3">{sommeTotal}</td>
                        </tr>
                      </tfoot>
                    </table>

                  </div>


          </div>

           
      
        </>
    )
}
export default Evenements