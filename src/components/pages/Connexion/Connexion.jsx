import React, { useState } from "react";
import './style/Connexion.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Connexion() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  

  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  // Vérifier si l'adresse e-mail et le mot de passe existent dans la base de données
  
    let response = await axios("http://localhost:8000/api/users");
    let users= response.data;
   
    users.forEach(users => { 
      if (users.email === formData.email && users.password === formData.password) 
      {
        navigate("/Profil")
      }
        setFormErrors({ server: 'L\'adresse e-mail ou le mot de passe est incorrect.' });
        console.log("pas de connexion")
    });

    // Faire quelque chose avec les données
    console.log(formData);
  };


  return (
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email :</label>
        <input
          className={formErrors.email ? 'saisie error' : 'saisie'}
          type="email"
          placeholder="ex: email@gmail.com"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        {formErrors.email && <span className="error-message">{formErrors.email}</span>}

        <label htmlFor="password">Mot de passe :</label>
        <input
          className={formErrors.password ? 'saisie error' : 'saisie'}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        {formErrors.password && <span className="error-message">{formErrors.password}</span>}

        <label className="saveConnexion">
          <input type="checkbox" name="saveConnexion" aria-label="saveConnexion" />
          Se souvenir de moi
        </label>

        {formErrors.server && <span className="error-message">{formErrors.server}</span>}

        <input className="connexion" type="submit" value="connexion" onSubmit={handleSubmit}/>
      
    </form>
    </>
        
    )
}