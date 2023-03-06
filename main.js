"use strict";

/*
FUNZIONI
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function createList(){
    while (list.length < 5) {
        const randomNumber = getRndInteger(min, max);

        if (!list.includes(randomNumber)) {
            list.push(randomNumber);
        }
    }

    return list;
}

/*
MAIN
*/

const min = 1;
const max = 100;
let list = [];

createList();

document.getElementById('list').innerHTML = list;

setTimeout(display, 30000);
//Rende "invisibile" l'array di numeri
function display(){
    document.getElementById('list').innerHTML = '';
}

clearTimeout(display);

//funzione della logica del gioco
setTimeout(logica, 31000);

function logica(){
    alert('inserisci i numeri in ordine di apparizione');

    let inputUserList = [];

    while(inputUserList.length < 5){
        
        let inputUser = Number(prompt("Inserisci il numero"));

        while(isNaN(inputUser) || inputUser < min || inputUser > max){
            inputUser = Number(prompt("Errore di inserimento, riprova con un valore accettabile"));
        }

        if(!inputUserList.includes(inputUser)){
            inputUserList.push(inputUser);
        }else{
            alert('Numero già scritto');
        }
    }
    let finalList = [];

    for(let i=0; i< inputUserList.length;i++){
        if(list.includes(inputUserList[i])){
            finalList.push(inputUserList[i]);
        }
    }

    alert(`Hai indovinato ${finalList.length} numeri, ovvero : ${finalList}`);
}


