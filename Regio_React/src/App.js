
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [stagiaires, setStagiaires] = useState([
    { id: 1, matricule: 1454, nom: 'Alaoui', codepostal: 20400, ville: 'casa', moyenne: 12.56 },
    { id: 2, matricule: 1455, nom: 'Mansouri', codepostal: 20400, ville: 'casa', moyenne: 14.67 },
    { id: 3, matricule: 3454, nom: 'Randani', codepostal: 10400, ville: 'rabat', moyenne: 11.45 },
  ]);

  const [newStagiaire, setNewStagiaire] = useState({
    matricule: '', nom: '', ville: '', codepostal: '', moyenne: ''
  });
  const [filteredStagiaires, setFilteredStagiaires] = useState([]);
  const [filter, setFilter] = useState({ ville: '', nom: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (stagiaires.length === 0) {
      setMessage("Tableau des stagiaires vide");
    } else {
      setMessage("");
    }
  }, [stagiaires]);

  const handleChange = (e) => {
    setNewStagiaire({ ...newStagiaire, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const addStagiaire = () => {
    const { matricule, nom, codepostal, ville, moyenne } = newStagiaire;

    if (!matricule || !nom || !codepostal || !ville || !moyenne) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    if (stagiaires.some(stagiaire => stagiaire.matricule === parseInt(matricule))) {
      setError("Le matricule doit être unique.");
      return;
    }

    if (codepostal < 0 || codepostal > 99999) {
      setError("Le code postal doit être entre 0 et 99999.");
      return;
    }

    if (moyenne < 0 || moyenne > 20) {
      setError("La moyenne doit être comprise entre 0 et 20.");
      return;
    }

    const id = stagiaires.length ? Math.max(...stagiaires.map(s => s.id)) + 1 : 1;
    const newEntry = {
      id,
      matricule: parseInt(matricule),
      nom,
      codepostal: parseInt(codepostal),
      ville,
      moyenne: parseFloat(moyenne)
    };

    setStagiaires([...stagiaires, newEntry]);
    setNewStagiaire({ matricule: '', nom: '', ville: '', codepostal: '', moyenne: '' });
    setError('');
  };

  const deleteStagiaire = (id) => {
    setStagiaires(stagiaires.filter(stagiaire => stagiaire.id !== id));
  };

  const filterStagiaires = () => {
    const result = stagiaires.filter(stagiaire =>
      stagiaire.ville.includes(filter.ville) && stagiaire.nom.includes(filter.nom)
    );
    setFilteredStagiaires(result);
    setMessage(result.length === 0 ? "Tableau de recherche vide" : "");
  };

  const resetFilter = () => {
    setFilteredStagiaires([]);
    setFilter({ ville: '', nom: '' });
  };

  return (
    <div className="App">
      <h2>Liste des Stagiaires</h2>
      {message && <p className="error">{message}</p>}
      
      {stagiaires.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Matricule</th>
              <th>Nom</th>
              <th>Ville</th>
              <th>Code Postal</th>
              <th>Moyenne</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stagiaires.map(stagiaire => (
              <tr key={stagiaire.id}>
                <td>{stagiaire.id}</td>
                <td>{stagiaire.matricule}</td>
                <td>{stagiaire.nom}</td>
                <td>{stagiaire.ville}</td>
                <td>{stagiaire.codepostal}</td>
                <td>{stagiaire.moyenne}</td>
                <td>
                  <button onClick={() => deleteStagiaire(stagiaire.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>Ajouter un Stagiaire</h3>
      {error && <p className="error">{error}</p>}
      <input type="text" name="matricule" placeholder="Matricule" value={newStagiaire.matricule} onChange={handleChange} /><br/>
      <input type="text" name="nom" placeholder="Nom" value={newStagiaire.nom} onChange={handleChange} /><br/>
      <input type="text" name="ville" placeholder="Ville" value={newStagiaire.ville} onChange={handleChange} /><br/>
      <input type="number" name="codepostal" placeholder="Code Postal" value={newStagiaire.codepostal} onChange={handleChange} /><br/>
      <input type="number" name="moyenne" placeholder="Moyenne" value={newStagiaire.moyenne} onChange={handleChange} /><br/>
      <button onClick={addStagiaire}>Ajouter</button>

      <h3>Filtrer ville et nom</h3>
      <input type="text" name="ville" placeholder="Ville" value={filter.ville} onChange={handleFilterChange} />
      <input type="text" name="nom" placeholder="Nom" value={filter.nom} onChange={handleFilterChange} />
      <button onClick={filterStagiaires}>Filtrer</button>
      <button onClick={resetFilter}>Réinitialiser recherche</button>

      {filteredStagiaires.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Matricule</th>
              <th>Nom</th>
              <th>Ville</th>
              <th>Code Postal</th>
              <th>Moyenne</th>
            </tr>
          </thead>
          <tbody>
            {filteredStagiaires.map(stagiaire => (
              <tr key={stagiaire.id}>
                <td>{stagiaire.id}</td>
                <td>{stagiaire.matricule}</td>
                <td>{stagiaire.nom}</td>
                <td>{stagiaire.ville}</td>
                <td>{stagiaire.codepostal}</td>
                <td>{stagiaire.moyenne}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;

