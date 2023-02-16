// const fetchPromise = fetch("http://127.0.0.1:8000/api/questions");

// let random;
// let idQuestions = [];
// let idPartie = [];

// fetchPromise.then(Response => {
//   return Response.json();
// }).then(listeQuestions => {
//   listeQuestions.forEach(function(question) {
//   idQuestions.push(question.id);
//   });
//   while(idPartie.length < 10){
//     random = Math.floor(Math.random() * 50);
//     if(idPartie.indexOf(idQuestions[random]) == -1){
//       idPartie.push(idQuestions[random]);
//     }
//   }
// });

// console.log(idPartie);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
