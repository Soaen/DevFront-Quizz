import React, { useState, useEffect } from 'react'
import Response from './ResponseGenerate'
import { useParams } from 'react-router-dom';

export default function Home() {
  // Récupérer l'ID de la catégorie dans l'URL
  const { id } = useParams();

  // URL de l'API
  const apiURL = "http://localhost:8000/api/questions"

  // État pour indiquer si les données sont en cours de chargement
  const [isLoading, setLoading] = useState(true);

  // État pour stocker les questions récupérées depuis l'API
  const [questions, setQuestions] = useState([]);

  // État pour stocker l'index de la question actuelle
  const [nbQuest, setNbQuest] = useState(0);

  // État pour stocker les index des questions précédentes
  const [previousNbQuests, setPreviousNbQuests] = useState([]);

  // Tableau des catégories de questions possibles
  const categories = ['Sport', 'Science', 'Histoire/Geo', 'Littérature'];

  // Récupérer la catégorie correspondant à l'ID de l'URL
  const category = categories[id - 1] || '';

  // Fonction pour choisir un nombre aléatoire et éviter de choisir la même question deux fois de suite
  function rdmNumber() {
    let newNbQuest = Math.floor(Math.random() * questions.length); // Choisir un nombre aléatoire
    let tries = 0;
    while (previousNbQuests.includes(newNbQuest) && tries < 10) { // Vérifier que la question n'a pas été posée récemment
      newNbQuest = Math.floor(Math.random() * questions.length);
      tries++;
    }
    setNbQuest(newNbQuest); // Définir le nouvel index de question
    setPreviousNbQuests(prev => [...prev.slice(-9), newNbQuest]); // Stocker l'index de la nouvelle question et des 9 précédentes
  }

  // Récupérer les questions de la catégorie correspondant à l'ID de l'URL depuis l'API
  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(item => item.categorie === category); // Filtrer les questions pour ne récupérer que celles de la catégorie correspondante
        setQuestions(filteredData); // Stocker les questions dans l'état
        setLoading(false); // Indiquer que les données ont fini de charger
      })
  }, [category]);

  // Si les données sont en cours de chargement, afficher un message de chargement
  if (isLoading) {
    return (
      <div>
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_ht6o1bdu.json" background="transparent" speed="1" loop autoplay></lottie-player>
        <div id='generated'>Loading...</div>
      </div>
    );
  }

  // Sinon, afficher la question et les réponses possibles
  return (
    <div id='generated'>
      <p>{questions[nbQuest].question}</p>
      <Response nbQuestion={nbQuest} datas={questions} />
      <button onClick={rdmNumber}>refresh</button>
    </div>
  )
}
