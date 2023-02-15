import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style/ResponseGenerate.css';

export default function ResponseGenerate({ nbQuestion, datas }) {
  const [questionCurrent, setQuestionCurrent] = useState(0);
  const [sortRdmResult, setSortRdmResult] = useState([]);
  const [nbTotalGoodAnswer, setNbTotalGoodAnswer] = useState(0);

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
  }

  function wrongClickAnswer() {
    setQuestionCurrent(questionCurrent + 1);
  }

  function renderQuestion() {
    const goodAnswer = datas[questionCurrent].reponse1;
    return (
      <div>
        <p className='question'>{datas[questionCurrent].question}</p>
        <div className='btn-container'>
          {sortRdmResult.map((element) => {
            if (element === goodAnswer) {
              return (
                <button
                  className='btn-rep'
                  key={uuidv4()}
                  onClick={goodClickAnswer}
                >
                  good{element}
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
    return (
      <div>
        <p>
          Test fini ! Nombre de bonnes réponses : {nbTotalGoodAnswer}/10
        </p>
      </div>
    );
  }

  return questionCurrent < 10 ? renderQuestion() : renderEnd();
}