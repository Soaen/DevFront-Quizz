import React from "react";



export default function CheckFormulaire() {


// export default function CheckFormlaire() {
// const requiredList = document.querySelectorAll('[required]');

// for (const node of requiredList) 
// {
//     if (node.type == 'select-one')
//     {
//         const labelNode = node.parentNode.parentNode.parentNode.querySelector('label');
//         labelNode.classList.add('required');
//     }
//     else if (node.type == 'checkbox')
//     {
//         const labelNode = node.parentNode;
//         labelNode.classList.add('required');
//     }
//     else 
//     {
//         const labelNode = node.parentNode.querySelector('label');
//         labelNode.classList.add('required');
//     }
// }



// // ADD OPTIONS of DATE SELECT
// // --

// const  birthdayDay = document.querySelector('[name="birthday[day]"]');
// const  birthdayMonth = document.querySelector('[name="birthday[month]"]');
// const  birthdayYear = document.querySelector('[name="birthday[year]"]');
// const months = [
//     'janvier',
//     'fevrier',
//     'mars',
//     'avril',
//     'mai',
//     'juin',
//     'juillet',
//     'août',
//     'septembre',
//     'octobre',
//     'novembre',
//     'decembre'
// ];



// for (let i=1; i<=31; i++)
// {
//     const option = document.createElement('option');
//     option.value = i;
//     option.innerText = i <= 9 ? '0'+i : i;

//     birthdayDay.append(option);
// }

// for (let i=0; i<=11; i++)
// {
//     const option = document.createElement('option');
//     option.value = i;
//     option.innerText = months[i];

//     birthdayMonth.append(option);
// }


// const date = new Date();
// const year = date.getFullYear();
// const minYear = year - 100;

// for (let i = year; i >= minYear; i--) 
// {
//     const option = document.createElement('option');
//     option.value = i;
//     option.innerText = i;

//     birthdayYear.append(option);
// }


// let form = document.getElementsByTagName('form')[0];
//     form.addEventListener('submit', checkForm);

// let nodeFirstname = document.getElementsByName('firstname')[0];
//     nodeFirstname.addEventListener('blur', checkFirstname);

// let nodeLastname = document.getElementsByName('lastname')[0];
// nodeLastname.addEventListener('blur', checkLastname);

// function checkForm(event) {

//     let error = false;
//     // 3. Controle des champs
//         if (!checkFirstname()) {
//          error = true;
//         }

//         if (!checkLastname()) {
//             error = true;
//         }

//         if (error) {
//             event.preventDefault(); // <--- ANNULE le comportement par defaut de l'evenement
//         }
// }
// /**
//  * print error message
//  * 
//  * @param {DOMelement} node 
//  * @param {string} errMsg 
//  */
// function printError(node, errMsg) 
// {
//     let errorMessageNode = document.createElement('p');
//         errorMessageNode.innerText = errMsg;
//         errorMessageNode.classList.add('error');

//     node.classList.add('is-invalid');
//     node.parentNode.append(errorMessageNode);
// }

// function resetError() 
// {
//     let errorNodes = node.parentNode.querySelectorAll('p')

//     node.classList.remove('is-invalid');
//     for (let errorNode of errorNodes)
//     {
//         errorNode.remove();
//     }
// }


// /**
//  * Check the first name and return false if failed
//  * 
//  * @param {*} event 
//  * @return {boolean}
//  */
// function checkFirstname(event)
// {
    
//     let re = /^[a-z][a-z-]*[a-z]$/i;
//     let firstname = nodeFirstname.value;

//     resetError(nodeFirstname);
//     if ( !firstname.match(re)==true)
//     {
//         printError(nodeFirstname, "Le prénom est obligatoire.");
//         return false;
//     }

//         return true;
// }


// /**
//  * Check the last name and return false if failed
//  * 
//  * @param {*} event 
//  * @return {boolean}
//  */
// function checkLastname(event)
// {
    
//     let re = /^[a-z][a-z-]*[a-z]$/i;
//     let lastname = nodeLastname.value;

//     resetError(nodeLastname);
//     if ( !lastname.match(re)==true )
//     {
//         printError(nodeLastname, "Le nom est obligatoire.");
//         return false;
//     }

//         return true;
// }}
}