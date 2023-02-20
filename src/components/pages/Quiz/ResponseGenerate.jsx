import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style/ResponseGenerate.css';

export default function ResponseGenerate({ nbQuestion, datas }) {
  const [questionCurrent, setQuestionCurrent] = useState(0);
  const [sortRdmResult, setSortRdmResult] = useState([]);
  const [nbTotalGoodAnswer, setNbTotalGoodAnswer] = useState(0);


  const [counter, setCounter] = React.useState(20);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      if(counter <= 0){
        wrongClickAnswer()
      }
    return () => {
      clearInterval(timer)
  };

  }, [counter]);

  
  useEffect(() => {
    const rdmresult = [
      datas[questionCurrent].reponse2,
      datas[questionCurrent].reponse3,
      datas[questionCurrent].reponse4,
      datas[questionCurrent].reponse5,
      datas[questionCurrent].reponse6,
      datas[questionCurrent].reponse7,
      datas[questionCurrent].reponse8,
      datas[questionCurrent].reponse9,
      datas[questionCurrent].reponse10,
    ];
    const newSortRdmResult = rdmresult
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .concat(datas[questionCurrent].reponse1)
      .sort(() => Math.random() - 0.5);
    setSortRdmResult(newSortRdmResult);
  }, [questionCurrent, datas]);

  function goodClickAnswer() {
    setNbTotalGoodAnswer(nbTotalGoodAnswer + 1);
    setQuestionCurrent(questionCurrent + 1);
    setCounter(20)

  }

  function wrongClickAnswer() {
    setQuestionCurrent(questionCurrent + 1);
    setCounter(20)
  }

  function renderQuestion() {
    const goodAnswer = datas[questionCurrent].reponse1;
    return (
      <div>
        <div className='chrono'>Temps restant: {counter}</div>
        <div className='cadreQuestion'>
        <p className='question'>{datas[questionCurrent].question}</p>
        </div>
        <div className='btn-container'>
          {sortRdmResult.map((element) => {
            if (element === goodAnswer) {
              return (
                <button
                  className='btn-rep'
                  key={uuidv4()}
                  onClick={goodClickAnswer}
                >
                 {element}
                </button>
              );
            }
            return (
              <button
                className='btn-rep'
                key={uuidv4()}
                onClick={wrongClickAnswer}
              >
                {element}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function renderEnd() {
    // axios.post("http://localhost:8000/api/parties", {
    //   score: nbTotalGoodAnswer,
    //   })
    //   .then(response => {
    //     console.log(response)
    //   })
    return (
      <div>
        <p className='result'>
          Test fini ! Nombre de bonnes réponses : {nbTotalGoodAnswer}/10
        </p>
      </div>
    );
  }

  return questionCurrent < 10 ? renderQuestion() : renderEnd();
}
