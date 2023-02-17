import React from 'react';
import { Link } from 'react-router-dom';
import './style/Home.css';

export default function Home() {


return (
    <div className='pageAcceuil'>
        
        <Link to="./connexion" className='boutonCompte'><i className='fa-solid fa-circle-user'></i></Link>

        <h1 className="titreQuizz">Titre du Quizz</h1>
        
        <Link to="./categorie" className='boutonQuizz'>Quizz</Link>

        <Link to="./inscription" className='inscription'>S'inscrire</Link>

    </div>
)
}