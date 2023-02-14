import React from 'react'
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Response({nbQuestion, datas}) {

    const rdmresult = [
        datas[nbQuestion].reponse2,
        datas[nbQuestion].reponse3,
        datas[nbQuestion].reponse4,
        datas[nbQuestion].reponse5,
        datas[nbQuestion].reponse6,
        datas[nbQuestion].reponse7,
        datas[nbQuestion].reponse8,
        datas[nbQuestion].reponse9,
        datas[nbQuestion].reponse10]

    var sortRdmResult = rdmresult.sort((a, b) => 0.5 - Math.random());

    var goodAnswer = datas[nbQuestion].reponse1

    sortRdmResult = sortRdmResult.slice(0).slice(-3)

    sortRdmResult.unshift(datas[nbQuestion].reponse1)

    sortRdmResult = sortRdmResult.sort((a, b) => 0.5 - Math.random());

    for (let i = 0; i < datas.length; i++) {
        
        return (
            <div>
                {sortRdmResult.map(element => {
                    if(element === goodAnswer){
                        return(
                            <Link to ='/response/1' key={uuidv4()}><button className='btn-rep'>{element}</button></Link>
                            );
                    }
                    return(
                    <Link to ='/response/2' key={uuidv4()}><button className='btn-rep'>{element}</button></Link>
                    );
                })}
            </div>
        )
    }
}

