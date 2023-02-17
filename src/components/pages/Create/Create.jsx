import React, { useState } from 'react';
import './style/Create.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    
    const passwordRegex = /^(?=.*\d)(?=.*[\W_])[a-zA-Z0-9\W_]{5,}$/;
    const errors = {};
    if (!formData.name) {
      errors.name = 'Veuillez entrer un pseudo.';
    }
    if (!passwordRegex.test(formData.password)) {
      errors.password = 'Le mot de passe doit contenir au moins 5 caractères, dont au moins un chiffre et un caractere spécial.';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Les mots de passe ne correspondent pas.';
    }
    setFormErrors(errors);

    // Si des erreurs sont détectées, ne pas envoyer le formulaire
    if (Object.keys(errors).length > 0) {
      return;
    }

    axios.post("http://localhost:8000/api/users", {
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
      .then(response => {
        console.log(response)
        navigate("/Connexion");
      })
      .catch(error => {
        console.log(error);
      });

    // Faire quelque chose avec les données
    console.log(formData);
  };
  
  return (
    
    <form action="" id="login" method="post" onSubmit={handleSubmit}>
      <label htmlFor="name">Pseudo :</label>
      <input
        className={formErrors.name ? 'saisie error' : 'saisie'}
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      {formErrors.name && <span className="error-message">{formErrors.name}</span>}

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


      <label htmlFor="confirmPassword">Confirmer le mot de passe :</label>
      <input
        className={formData.confirmPassword ? 'saisie error' : 'saisie'}
        type="Password"
        name="confirmPassword"
        onChange={handleInputChange}
        required
      />
      {formErrors.confirmPassword && <span className="error-message">{formErrors.confirmPassword}</span>}

      <div className='checkbox'>
        <label className="agree-terms">
          <input type="checkbox" name="agree-terms" aria-label="agree-terms" required />
          J'accepte les conditions générales d'utilisations
        </label>

        {/* <label className="saveConnexion">
          <input type="checkbox" name="saveConnexion" aria-label="saveConnexion" />
          Se souvenir de moi
        </label> */}
      </div>

      <input className="boutonEnv" type="submit" onSubmit={handleSubmit}/>
      
    </form>
  );
}
