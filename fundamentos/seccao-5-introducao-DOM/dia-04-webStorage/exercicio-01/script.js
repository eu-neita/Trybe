const buttonsBgc = document.querySelectorAll('#background-color button')
const bgColor = ['white','black','green','blue','yellow']
const buttonsFontC = document.querySelectorAll('#font-color button');
const fontColor = ['black','red','white'];
const buttonsFontS = document.querySelectorAll('#font-size button')
const buttonsLineH = document.querySelectorAll('#line-height button')
const buttonsFontStyle = document.querySelectorAll('#font-family button')

function chageBackColor() {
    buttonsBgc[0].addEventListener('click', function () {
        document.body.style.backgroundColor = 'white'
        localStorage.setItem('backgroundColor', bgColor[0]);
    })
    buttonsBgc[1].addEventListener('click', function () {
        document.body.style.backgroundColor = 'black'
        localStorage.setItem('backgroundColor', bgColor[1]);
    })
    buttonsBgc[2].addEventListener('click', function () {
        document.body.style.backgroundColor = 'green'
        localStorage.setItem('backgroundColor', bgColor[2]);
    })
    buttonsBgc[3].addEventListener('click', function () {
        document.body.style.backgroundColor = 'blue'
        localStorage.setItem('backgroundColor', bgColor[3]);
    })
    buttonsBgc[4].addEventListener('click', function () {
        document.body.style.backgroundColor = 'yellow'
        localStorage.setItem('backgroundColor', bgColor[4]);
    })
    storage()
}
console.log(localStorage.getItem('backgroundColor'));
chageBackColor()
function chageTextColor() {
    buttonsFontC[0].addEventListener('click', function () {
        document.body.style.color = 'black'
        localStorage.setItem('colorFont', fontColor[0]);
    })
    buttonsFontC[1].addEventListener('click', function () {
        document.body.style.color = 'red'
        localStorage.setItem('colorFont', fontColor[1]);
    })
    buttonsFontC[2].addEventListener('click', function () {
        document.body.style.color = 'white'
        localStorage.setItem('colorFont', fontColor[2]);
    })
    storage()
}
chageTextColor()
function chageFontSize() {
    buttonsFontS[0].addEventListener('click', function () {
        document.body.style.fontSize = '8pt'
    })
    buttonsFontS[1].addEventListener('click', function () {
        document.body.style.fontSize = '10pt'
    })
    buttonsFontS[2].addEventListener('click', function () {
        document.body.style.fontSize = '12pt'
    })
    buttonsFontS[3].addEventListener('click', function () {
        document.body.style.fontSize = '14pt'
    })
    buttonsFontS[4].addEventListener('click', function () {
        document.body.style.fontSize = '20pt'
    })
}
chageFontSize()
function chageLineHeight() {
    buttonsLineH[0].addEventListener('click', function () {
        document.body.style.lineHeight = '1'
    })
    buttonsLineH[1].addEventListener('click', function () {
        document.body.style.lineHeight = '1.15'
    })
    buttonsLineH[2].addEventListener('click', function () {
        document.body.style.lineHeight = '1.5'
    })
    buttonsLineH[3].addEventListener('click', function () {
        document.body.style.lineHeight = '2.0'
    })
    buttonsLineH[4].addEventListener('click', function () {
        document.body.style.lineHeight = '3.0'
    })
}
chageLineHeight()
function chageTypeFont() {
    buttonsFontStyle[0].addEventListener('click', function () {
        document.body.style.fontFamily = 'Arial'
    })
    buttonsFontStyle[1].addEventListener('click', function () {
        document.body.style.fontFamily = 'Times New Roman'
    })
}
chageTypeFont()

function storage() {
    const bglColor = localStorage.getItem('backgroundColor')
    const textColor = localStorage.getItem('colorFont')
if (bglColor == 'white') {
    document.body.style.backgroundColor = 'white'
}else if(bglColor === 'black'){
    document.body.style.backgroundColor = 'black'
}else if(bglColor === 'green'){
    document.body.style.backgroundColor = 'green'
}else if(bglColor === 'blue'){
    document.body.style.backgroundColor = 'blue'
}else{
    document.body.style.backgroundColor = 'yellow'
}

if (textColor == 'black') {
    document.body.style.color = 'black'
}else if(textColor === 'red'){
    document.body.style.color = 'red'
}else if(textColor === 'white'){
    document.body.style.color = 'white'
}

}