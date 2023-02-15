import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import './style/ResponseGenerate.css'

export default function ResponseGenerate({nbQuestion, datas}) {

    var rdmresult = [
        datas[nbQuestion].reponse2,
        datas[nbQuestion].reponse3,
        datas[nbQuestion].reponse4,
        datas[nbQuestion].reponse5,
        datas[nbQuestion].reponse6,
        datas[nbQuestion].reponse7,
        datas[nbQuestion].reponse8,
        datas[nbQuestion].reponse9,
        datas[nbQuestion].reponse10]

    const [questionCurrent, setQuestionCurrent] = useState(0)
    const [sortRdmResult, setSortRdmResult] = useState(rdmresult.sort((a, b) => 0.5 - Math.random()))
    const [nbTotalGoodAnswer, setNbTotalGoodAnswer] = useState(0)


    // var sortRdmResult = rdmresult.sort((a, b) => 0.5 - Math.random());

    var goodAnswer = datas[nbQuestion].reponse1
    useEffect(() => {
        let tempSortRdmResult = sortRdmResult.slice(0).slice(-3);
        setSortRdmResult([datas[nbQuestion].reponse1, ...tempSortRdmResult].sort((a, b) => 0.5 - Math.random()));
        console.log(sortRdmResult);
        t();

      }, []);

    function goodClickAnswer(){
        setNbTotalGoodAnswer(nbTotalGoodAnswer + 1)
        setQuestionCurrent(questionCurrent + 1)
        console.log(questionCurrent);
        if(questionCurrent > 10){
            console.log("test fini !" + nbTotalGoodAnswer);
        }
        randomRespGenerate(questionCurrent)

    }
    function wrongClickAnswer(){
        setQuestionCurrent(questionCurrent + 1)
        console.log(questionCurrent);
        if(questionCurrent >10){
            console.log("test fini !" + nbTotalGoodAnswer);
        }
        randomRespGenerate(questionCurrent)

    }


    function randomRespGenerate(a){
        const rdmresult = [        datas[a].reponse2,
            datas[a].reponse3,
            datas[a].reponse4,
            datas[a].reponse5,
            datas[a].reponse6,
            datas[a].reponse7,
            datas[a].reponse8,
            datas[a].reponse9,
            datas[a].reponse10
        ];
        const newSortRdmResult = rdmresult
            .sort((a, b) => 0.5 - Math.random())
            .slice(0, 3)
            .concat(datas[a].reponse1);
        setSortRdmResult(newSortRdmResult);
        t()
    }



    useEffect(() => {
        setNbTotalGoodAnswer(0)
          }, [])
      
function t() {

    for (let i = 0; i < datas.length; i++) {
        return (
            <div>
            <p className='question'>{datas[questionCurrent].question}</p>

            <div className='btn-container'>
                {sortRdmResult.map(element => {
                    if(element === goodAnswer){
                        return(
                            <button className='btn-rep' key={uuidv4()} onClick={goodClickAnswer}>{element}</button>
                            );
                    }
                    return(
                    <button className='btn-rep'key={uuidv4()} onClick={wrongClickAnswer}>{element}</button>
                    );
                })}




                {/* {sortRdmResult[0] === goodAnswer ? <button className='btn-rep' key={uuidv4()} onClick={goodClickAnswer}>{sortRdmResult[0]}</button>: <button className='btn-rep' key={uuidv4()} onClick={wrongClickAnswer}>{sortRdmResult[0]}</button>} */}
                {/* {sortRdmResult[1] === goodAnswer ? <button className='btn-rep' key={uuidv4()} onClick={goodClickAnswer}>{sortRdmResult[1]}</button>: <button className='btn-rep' key={uuidv4()} onClick={wrongClickAnswer}>{sortRdmResult[1]}</button>} */}
                {/* {sortRdmResult[2] === goodAnswer ? <button className='btn-rep' key={uuidv4()} onClick={goodClickAnswer}>{sortRdmResult[2]}</button>: <button className='btn-rep' key={uuidv4()} onClick={wrongClickAnswer}>{sortRdmResult[2]}</button>} */}
                {/* {sortRdmResult[3] === goodAnswer ? <button className='btn-rep' key={uuidv4()} onClick={goodClickAnswer}>{sortRdmResult[3]}</button>: <button className='btn-rep' key={uuidv4()} onClick={wrongClickAnswer}>{sortRdmResult[3]}</button>} */}
            
            
            
            </div>
            </div>
        )
    }
}
return t()
}
    


