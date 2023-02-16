import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/Categorie.css';


export default function Categorie() {

return (
    <div>
        <nav className="navCategorie">
        <Link to = '/Components/StartQuizz'  className="boutonCategorie">Sports</Link>
        <Link to = '/Components/StartQuizz' className="boutonCategorie">Sciences</Link>
        <Link to = '/Components/StartQuizz' className="boutonCategorie">Littérature</Link>
        <Link to = '/Components/StartQuizz' className="boutonCategorie">Histoire/Geo</Link>
        </nav>
    </div>
)
}