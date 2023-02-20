import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style/ResponseGenerate.css';

export default function ResponseGenerate({  datas }) {
  const [questionCurrent, setQuestionCurrent] = useState(0);
  const [sortRdmResult, setSortRdmResult] = useState([]);
  const [nbTotalGoodAnswer, setNbTotalGoodAnswer] = useState(0);
  const [counter, setCounter] = React.useState(20);
  const [isFinished, setIsFinished] = React.useState(false)
  
  const [showQuestion, setShowQuestion] = useState(false); // add state for showing/hiding question

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
    setCounter(20);
    setTimeout(() => setShowQuestion(true), 300);
  }, [questionCurrent, datas]);


  useEffect(() => {
    if (!isFinished && counter > 0) {
      const timer = setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    } else if (counter <= 0) {
      wrongClickAnswer();
    } else if (questionCurrent === 10) {
      setIsFinished(true);
    }
  }, [counter, isFinished, questionCurrent]);

  

  function goodClickAnswer() {
    setNbTotalGoodAnswer(nbTotalGoodAnswer + 1);
    setQuestionCurrent(questionCurrent + 1);
  }

  function wrongClickAnswer() {
    setQuestionCurrent(questionCurrent + 1);
  }

  function renderQuestion() {
    const goodAnswer = datas[questionCurrent].reponse1;
    return (
      <div>
        <div>Temps restant: {counter}</div>
        <p className='question'>{datas[questionCurrent].question}</p>
        <div className='btn-container'>
          {sortRdmResult.map((element) => (
            <button
              className='btn-rep'
              key={uuidv4()}
              onClick={element === goodAnswer ? goodClickAnswer : wrongClickAnswer}
            >
              {element}
            </button>
          ))}
        </div>
      </div>
    );
  }

  function renderEnd() {
    return (
      <div>
        <p>
          Test fini ! Nombre de bonnes réponses : {nbTotalGoodAnswer}/10
        </p>
      </div>
    );
  }

  return showQuestion ? questionCurrent < 10 ? renderQuestion() : renderEnd() : "Loading..."
}
