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
  const categories = ['Sport', 'Science', 'Histoire/Geo', 'Littérature'];

  // Récupérer la catégorie correspondant à l'ID de l'URL
  const category = categories[id - 1] || '';

  // Fonction pour choisir un nombre aléatoire et éviter de choisir la même question deux fois de suite
  // function rdmNumber() {
  //   let newNbQuest = Math.floor(Math.random() * questions.length);
  //   let tries = 0;
  //   console.log(questions);
  //   while (previousNbQuests.includes(newNbQuest) && tries < 10) {
  //     newNbQuest = Math.floor(Math.random() * questions.length);
  //     tries++;
  //   }

  //   setNbQuest(newNbQuest);
  //   setPreviousNbQuests(prev => [...prev.slice(-9), newNbQuest]);
  // }

  
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

  
  // if (isLoading) {
  //   return (
  //     <div>
  //       <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_ht6o1bdu.json" background="transparent" speed="1" loop autoplay></lottie-player>
  //       <div id='generated'>Loading...</div>
  //     </div>
  //   );
  // }

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
