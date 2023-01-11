
let future = () => { 
    let textIn = document.getElementsByTagName('p')[1];
    textIn.innerHTML = 'trabalhando na area de desenvolvimento web, e desenvolvendo minha carreira na area';
};
future();
let ChangeBackGCollor = () => document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
ChangeBackGCollor();
let ChangeBackGCollorBox = () => document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
ChangeBackGCollorBox();
let correctH1 = () => { 
    let textIn = document.getElementsByTagName('h1');
    textIn[0].innerHTML = 'Desafio - JavaScript';
};
correctH1()
let fistP = () => { 
    let textInUp = document.getElementsByTagName('p')[0];
    textInUp.innerHTML = textInUp.innerHTML.toUpperCase();
};
fistP();
const allLog = () =>{
    let paragph = document.getElementsByTagName('p');
    for (let key in paragph) {
        console.log(paragph[key].innerText);
    }
}
allLog()