
import { Link } from 'react-router-dom';

export default function CateShow(){

        return(
        <nav className="navCategorie">
        <Link to = '/startquizz/1'  className="boutonCategorie">Sports</Link>
        <Link to = '/startquizz/2' className="boutonCategorie">Sciences</Link>
        <Link to = '/startquizz/3' className="boutonCategorie">Littérature</Link>
        <Link to = '/startquizz/4' className="boutonCategorie">Histoire/Geo</Link>
        </nav>
        )
}