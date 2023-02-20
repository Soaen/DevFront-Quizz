import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './style/ResponseGenerate.css';

export default function ResponseGenerate({  datas }) {
  const [questionCurrent, setQuestionCurrent] = useState(0);
  const [sortRdmResult, setSortRdmResult] = useState([]);
  const [nbTotalGoodAnswer, setNbTotalGoodAnswer] = useState(0);
  const [counter, setCounter] = React.useState(20);
  const [isFinished, setIsFinished] = React.useState(false)
  const [datasQuestion, setDatasQuestion] = useState(datas)
  
  const [showQuestion, setShowQuestion] = useState(false); // add state for showing/hiding question

  useEffect(() => {
    const rdmresult = [
      datasQuestion[questionCurrent].reponse2,
      datasQuestion[questionCurrent].reponse3,
      datasQuestion[questionCurrent].reponse4,
      datasQuestion[questionCurrent].reponse5,
      datasQuestion[questionCurrent].reponse6,
      datasQuestion[questionCurrent].reponse7,
      datasQuestion[questionCurrent].reponse8,
      datasQuestion[questionCurrent].reponse9,
      datasQuestion[questionCurrent].reponse10,
    ];
    const newSortRdmResult = rdmresult
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .concat(datasQuestion[questionCurrent].reponse1)
      .sort(() => Math.random() - 0.5);
    setSortRdmResult(newSortRdmResult);
    setCounter(20);
    setTimeout(() => setShowQuestion(true), 300);
  }, [questionCurrent, datasQuestion]);


  useEffect(() => {
    const timer = setInterval(() => {
      if (!isFinished) {
      if (counter > 0) {
        setCounter(counter - 1);
      } else if (counter === 0) {
        wrongClickAnswer();
      }
    }
    }, 1000);
    return () => clearInterval(timer);
  });

  function goodClickAnswer() {
    setNbTotalGoodAnswer(nbTotalGoodAnswer + 1);
    setQuestionCurrent(questionCurrent + 1);
  }

  function wrongClickAnswer() {
    setQuestionCurrent(questionCurrent + 1);
  }

  function restartQuiz(){
    console.log(datasQuestion);

    setDatasQuestion(datasQuestion.sort(() => Math.random() - 0.5))
    console.log(datasQuestion);
    setCounter(20)
    setQuestionCurrent(0)
  }

  function renderQuestion() {
    const goodAnswer = datasQuestion[questionCurrent].reponse1;
    return (
      <div>
        <div>Temps restant: {counter}</div>
        <p className='question'>{datasQuestion[questionCurrent].question}</p>
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
    if(!isFinished)setIsFinished(true)
    return (
      <div>
        <p>
          Test fini ! Nombre de bonnes réponses : {nbTotalGoodAnswer}/10
        </p>
        <button onClick={restartQuiz}>Recommencer</button>
        <Link to='/categories'>Catégories</Link>
      </div>
    );
  }

  return showQuestion ? questionCurrent < 10 ? renderQuestion() : renderEnd() : "Loading..."
}
