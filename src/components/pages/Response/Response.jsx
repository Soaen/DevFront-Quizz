import React   from 'react'
import { useParams, Link} from "react-router-dom";

export default function Response(){
    const { id } = useParams();

    document.title = `Quizz - ${parseInt(id) === 1 ? "Bonne réponse ": "Mauvaise réponse"}`    

    return(
        <div>
        
        {
        parseInt(id) === 1 ? <p>Bonne réponse !</p>: <p>Mauvaise réponse !</p>
        }


            <Link to='/categories'>
                <button>Question suivante !</button>
            </Link>
        </div>
    )
}