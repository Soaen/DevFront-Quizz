import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/Categorie.css';


export default function Categorie() {

return (
    <div>
        <nav className="navCategorie">
        <Link to = '/startquizz'  className="boutonCategorie">Sports</Link>
        <Link to = '/startquizz' className="boutonCategorie">Sciences</Link>
        <Link to = '/startquizz' className="boutonCategorie">Littérature</Link>
        <Link to = '/startquizz' className="boutonCategorie">Histoire/Geo</Link>
        </nav>
    </div>
)
}