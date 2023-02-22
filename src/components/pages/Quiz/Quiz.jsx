import React, { useState, useEffect } from 'react'
import Response from './ResponseGenerate'
import { useParams } from 'react-router-dom';
import './style/Quiz.css';

export default function Home() {
  // Récupérer l'ID de la catégorie dans l'URL
  const { id } = useParams();

  const apiURL = "http://localhost:8000/api/questions"

  // État pour indiquer si les données sont en cours de chargement
  const [isLoading, setLoading] = useState(true);

  // État pour stocker les questions récupérées depuis l'API
  const [questions, setQuestions] = useState([]);

  // Tableau des catégories de questions possibles
  const categories = ['Sport', 'Science','Littérature','Histoire/Geo'];

  // Récupérer la catégorie correspondant à l'ID de l'URL
  const category = categories[id - 1] || '';

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        var filteredData = data.filter(item => item.categorie === category); 
        var tempData = filteredData.sort((a, b) => 0.5 - Math.random());
        // filteredData = tempData.slice(0).slice(-12)
        setQuestions(tempData);
        setLoading(false);
      })
  }, [category]);

  return (
    <div>
      {questions.length > 0 ? (
        <div id='generated'>
          <Response datas={questions} />
        </div>
      ) : (
        
        <div>Loading...</div>
      )}
    </div>
  );
}
