import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Acceuil.css';

export default function Acceuil() {


return (
    <div className='pageAcceuil'>
        
        <Link to="./Connexion" className='boutonCompte'><i className='fa-solid fa-circle-user'></i></Link>

        <h1>Titre du Quizz</h1>
        
        <Link to="./Categorie" className='boutonQuizz'>Quizz</Link>

        <Link to="./Inscription" className='inscription'>S'inscrire</Link>

    </div>
)
}