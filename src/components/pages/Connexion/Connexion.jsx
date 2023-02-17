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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérifier que les champs sont remplis correctement
    const emailVerif = formData.email;
    const passwordVerif = formData.password;
    const errors = {};
    if (!emailVerif.test(formData.email)) {
      errors.email = 'Veuillez entrer une adresse e-mail valide.';
    }
    if (!passwordVerif.test(formData.password)) {
      errors.password = 'Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre et un chiffre.';
    }
    setFormErrors(errors);

    // Si des erreurs sont détectées, ne pas envoyer le formulaire
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Vérifier si l'adresse e-mail et le mot de passe existent dans la base de données
    axios.get("http://localhost:8000/api/users", {
      params: {
        email: formData.email,
        password: formData.password,
      }
    })
      .then(response => {
        if (response.data.length > 0) {
          // Si l'utilisateur existe, rediriger vers la page de profil
          navigate("/profil");
        } else {
          // Sinon, afficher un message d'erreur
          setFormErrors({ server: 'L\'adresse e-mail ou le mot de passe est incorrect.' });
        }
      })
      .catch(error => {
        console.log(error);
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