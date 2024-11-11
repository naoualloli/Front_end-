import { useState } from "react";

function EtudiantForm() {
  const [id, setId] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [etudiants, setEtudiants] = useState([]);
  const [selectedID, setSelectedID] = useState();
  const [selectedItem, setSelectedItem] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: "",
  });

  function handleSave(e) {
    e.preventDefault();
    setEtudiants([...etudiants, { id, firstName, lastName, age }]);
  }

  function handleDelete(item) {
    let newEtudiants = etudiants.filter(
      (element) => element.id !== item.id
    );
    setEtudiants([...newEtudiants]);
  }

  function handleUpdate(){
    let newEtudiants = etudiants.map(function(item){
      if(item.id === id){
        item.firstName = firstName;
        item.lastName = lastName;
        item.age = age;
      }
      return item
      
    })
    setEtudiants(newEtudiants)
  }



  return (
    <>
      <div className="form-container">
        <h1 className="form-title">ADD A STUDENT</h1>
        <div className="form">
          <input
            type="text"
            name="id"
            required
            placeholder="Enter the ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="text"
            name="fname"
            required
            placeholder="Enter the first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="lname"
            required
            placeholder="Enter the last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="number"
            name="age"
            required
            placeholder="Enter the age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button onClick={handleSave} className="btn save-btn">
            SAVE
          </button>
          <button
            type="button"
            className="btn display-btn"
            onClick={(e) => {
              e.preventDefault();
              console.log(etudiants);
            }}
          >
            AFFICHER
          </button>
          <button
          onClick={handleUpdate}
          >
            MODIFIER
          </button>
        </div>
      </div>

      <div className="table-container">
        {/* <h1 className="table-title">STUDENT LIST</h1> */}
        <table className="student-table">
          <thead>
            <tr>
              <th>Check</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {etudiants.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    onClick={(e) => {
                      if (e.target.checked) {
                        setSelectedID(item.id);
                        setSelectedItem({ ...item });
                        setId(item.id);
                        setFirstName(item.firstName);
                        setLastName(item.lastName);
                        setAge(item.age);
                      }
                    }}
                  />
                </td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  <button className="btn modify-btn"
                      onClick={() =>{
                        setId(item.id);
                        setFirstName(item.firstName);
                        setLastName(item.lastName);
                        setAge(item.age);
                      }}
                  >Modify</button>
                  <button
                    className="btn delete-btn"
                    onClick={() => handleDelete(item)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EtudiantForm;




