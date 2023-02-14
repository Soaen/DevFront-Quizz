import React from 'react'
import Response from './ResponseGenerate'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export default function Home() {
    const { id } = useParams();
    const apiURL = "http://localhost:8000/api/questions"
    const [isLoading, setLoading] = useState(true);
    const [question, setQuestion] = useState();
    const [dataLength, setDataLength] = useState(0);
    const [nbQuest, setNbQuest] = useState(1);
    const categorieId = id == 1 ? "Sport" : id == 2 ? "Science" : id == 3 ? "Histoire/Geo" : "Littérature" 
    let dataCategories = [];

  function rdmNumber() {
    setNbQuest(Math.floor(Math.random() * dataLength));
  }


    useEffect(() => {
      fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        data.forEach(e => {
          if(e.categorie === categorieId){
            dataCategories.push(e)
            setQuestion(dataCategories);
            setLoading(false);
            setDataLength(dataCategories.length);
            

          }
        });
        
      })
    }, []);
  
    if (isLoading) {
        return <div id='generated'>Loading...</div>;
    }

    

  return (
    <div id='generated'>
        <p>{question[nbQuest].question}</p>

        <Response nbQuestion={nbQuest} datas={question}/>

        <button onClick={rdmNumber}>refresh</button>

    </div>
  )

}