const buttonsBgc = document.querySelectorAll('#background-color button')
const buttonsFontC = document.querySelectorAll('#font-color button');
const buttonsFontS = document.querySelectorAll('#font-size button')
const buttonsLineH = document.querySelectorAll('#line-height button')
const fontHeight = ['1','1.15','1.5','2.0','3.0'];
const buttonsFontStyle = document.querySelectorAll('#font-family button')


function chageBackColor() {
    buttonsBgc[0].addEventListener('click', function () {
        document.body.style.backgroundColor = 'white'
        localStorage.setItem('backgroundColor', buttonsBgc[0].innerText);
    })
    buttonsBgc[1].addEventListener('click', function () {
        document.body.style.backgroundColor = 'black'
        localStorage.setItem('backgroundColor', buttonsBgc[1].innerText);
    })
    buttonsBgc[2].addEventListener('click', function () {
        document.body.style.backgroundColor = 'green'
        localStorage.setItem('backgroundColor', buttonsBgc[2].innerText);
    })
    buttonsBgc[3].addEventListener('click', function () {
        document.body.style.backgroundColor = 'blue'
        localStorage.setItem('backgroundColor', buttonsBgc[3].innerText);
    })
    buttonsBgc[4].addEventListener('click', function () {
        document.body.style.backgroundColor = 'yellow'
        localStorage.setItem('backgroundColor', buttonsBgc[4].innerText);
    })
    storage()
}
console.log(localStorage.getItem('backgroundColor'));
chageBackColor();
function chageTextColor() {
    buttonsFontC[0].addEventListener('click', function () {
        document.body.style.color = 'black'
        localStorage.setItem('colorFont', buttonsFontC[0].innerText);
    })
    buttonsFontC[1].addEventListener('click', function () {
        document.body.style.color = 'red'
        localStorage.setItem('colorFont', buttonsFontC[1].innerText);
    })
    buttonsFontC[2].addEventListener('click', function () {
        document.body.style.color = 'white'
        localStorage.setItem('colorFont', buttonsFontC[2].innerText);
    })
}
chageTextColor();
function chageFontSize() {
    buttonsFontS[0].addEventListener('click', function () {
        document.body.style.fontSize = '8pt'
        localStorage.setItem('fontSize', buttonsFontS[0].innerText);
    })
    buttonsFontS[1].addEventListener('click', function () {
        document.body.style.fontSize = '10pt'
        localStorage.setItem('fontSize', buttonsFontS[1].innerText);
    })
    buttonsFontS[2].addEventListener('click', function () {
        document.body.style.fontSize = '12pt'
        localStorage.setItem('fontSize', buttonsFontS[2].innerText);
    })
    buttonsFontS[3].addEventListener('click', function () {
        document.body.style.fontSize = '14pt'
        localStorage.setItem('fontSize', buttonsFontS[3].innerText);
    })
    buttonsFontS[4].addEventListener('click', function () {
        document.body.style.fontSize = '20pt'
        localStorage.setItem('fontSize', buttonsFontS[4].innerText);
    })
}
chageFontSize();
function chageLineHeight() {
    buttonsLineH[0].addEventListener('click', function () {
        document.body.style.lineHeight = '1'
        localStorage.setItem('lineHeight', buttonsLineH[0].innerText);
    })
    buttonsLineH[1].addEventListener('click', function () {
        document.body.style.lineHeight = '1.15'
        localStorage.setItem('lineHeight', buttonsLineH[1].innerText);
    })
    buttonsLineH[2].addEventListener('click', function () {
        document.body.style.lineHeight = '1.5'
        localStorage.setItem('lineHeight', buttonsLineH[2].innerText);
    })
    buttonsLineH[3].addEventListener('click', function () {
        document.body.style.lineHeight = '2.0'
        localStorage.setItem('lineHeight', buttonsLineH[3].innerText);
    })
    buttonsLineH[4].addEventListener('click', function () {
        document.body.style.lineHeight = '3.0'
        localStorage.setItem('lineHeight', buttonsLineH[4].innerText);
    })
}
chageLineHeight();
function chageTypeFont() {
    buttonsFontStyle[0].addEventListener('click', function () {
        document.body.style.fontFamily = 'Arial'
        localStorage.setItem('fontStyle', buttonsFontStyle[0].innerText);
    })
    buttonsFontStyle[1].addEventListener('click', function () {
        document.body.style.fontFamily = 'Times New Roman'
        localStorage.setItem('fontStyle', buttonsFontStyle[1].innerText);
    })
}
chageTypeFont();
function storage() {
    const bglColor = localStorage.getItem('backgroundColor')
    const textColor = localStorage.getItem('colorFont')
    const sizeFont = localStorage.getItem('fontSize')
    const heightLine = localStorage.getItem('lineHeight')
    const styleFont = localStorage.getItem('fontStyle')

document.body.style.backgroundColor = bglColor;
document.body.style.color = textColor;
document.body.style.fontSize = sizeFont;
document.body.style.lineHeight = heightLine;
document.body.style.fontFamily = styleFont;

};
storage()
// window.onload = storage;