import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style/Home.css';
import axios from "axios";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);

  const storage = window.localStorage;

  useEffect(() => {
    const isConnected = storage.getItem('isConnected');
    setIsConnected(!!isConnected);
    // if (isConnected === true ) {
    //   setIsConnected(true);
    // }
  });

  const handleLogout = () => {
    storage.removeItem('isConnected');
    setIsConnected(false);
  };


  return (
    <div className="pageAcceuil">
      {isConnected ? (
        <Link to="./profil" className="boutonCompte">
          <i className="fa-solid fa-user-check"></i>
        </Link>
      ) : (
        <Link to="./connexion" className="boutonCompte">
          <i className="fa-solid fa-user"></i>
        </Link>
      )}
        
      <img className='cultureQuizz' src="/Photos/culturequizz.png" alt="" />

      <Link to="./categorie" className="boutonQuizz">
        Quizz
      </Link>

      {isConnected ? (
        <a className="deconnexion" onClick={handleLogout}>
          Se déconnecter
        </a>
      ) : (
        <Link to="./inscription" className="inscription">
          S'inscrire
        </Link>
      )}
    </div>
  );
}