const buttonsBgc = document.querySelectorAll('#background-color button')
const bgColor = ['white','black','green','blue','yellow']
const buttonsFontC = document.querySelectorAll('#font-color button');
const fontColor = ['black','red','white'];
const buttonsFontS = document.querySelectorAll('#font-size button')
const sizeFont = ['8','10','12','14','20'];
const buttonsLineH = document.querySelectorAll('#line-height button')
const fontHeight = ['1','1.15','1.5','2.0','3.0'];
const buttonsFontStyle = document.querySelectorAll('#font-family button')
const fontStyle = ['Arial','Times New Roman',];

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
        localStorage.setItem('fontSize', sizeFont[0]);
    })
    buttonsFontS[1].addEventListener('click', function () {
        document.body.style.fontSize = '10pt'
        localStorage.setItem('fontSize', sizeFont[1]);
    })
    buttonsFontS[2].addEventListener('click', function () {
        document.body.style.fontSize = '12pt'
        localStorage.setItem('fontSize', sizeFont[2]);
    })
    buttonsFontS[3].addEventListener('click', function () {
        document.body.style.fontSize = '14pt'
        localStorage.setItem('fontSize', sizeFont[3]);
    })
    buttonsFontS[4].addEventListener('click', function () {
        document.body.style.fontSize = '20pt'
        localStorage.setItem('fontSize', sizeFont[4]);
    })
}
chageFontSize()
function chageLineHeight() {
    buttonsLineH[0].addEventListener('click', function () {
        document.body.style.lineHeight = '1'
        localStorage.setItem('lineHeight', fontHeight[0]);
    })
    buttonsLineH[1].addEventListener('click', function () {
        document.body.style.lineHeight = '1.15'
        localStorage.setItem('lineHeight', fontHeight[1]);
    })
    buttonsLineH[2].addEventListener('click', function () {
        document.body.style.lineHeight = '1.5'
        localStorage.setItem('lineHeight', fontHeight[2]);
    })
    buttonsLineH[3].addEventListener('click', function () {
        document.body.style.lineHeight = '2.0'
        localStorage.setItem('lineHeight', fontHeight[3]);
    })
    buttonsLineH[4].addEventListener('click', function () {
        document.body.style.lineHeight = '3.0'
        localStorage.setItem('lineHeight', fontHeight[4]);
    })
}
chageLineHeight()
function chageTypeFont() {
    buttonsFontStyle[0].addEventListener('click', function () {
        document.body.style.fontFamily = 'Arial'
        localStorage.setItem('fontStyle', fontStyle[0]);
    })
    buttonsFontStyle[1].addEventListener('click', function () {
        document.body.style.fontFamily = 'Times New Roman'
        localStorage.setItem('fontStyle', fontStyle[1]);
    })
}
chageTypeFont()

function storage() {
    const bglColor = localStorage.getItem('backgroundColor')
    const textColor = localStorage.getItem('colorFont')
    const sizeFont = localStorage.getItem('fontSize')
    const heightLine = localStorage.getItem('lineHeight')
    const styleFont = localStorage.getItem('fontStyle')
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

if (sizeFont == '8') {
    document.body.style.fontSize = '8pt'
}else if(sizeFont === '10'){
    document.body.style.fontSize = '10pt'
}else if(sizeFont === '12'){
    document.body.style.fontSize = '12pt'
}else if(sizeFont === '14'){
    document.body.style.fontSize = '14pt'
}else if(sizeFont === '20'){
    document.body.style.fontSize = '20pt'
}

if (heightLine == '1') {
    document.body.style.lineHeight = '1'
}else if(heightLine === '1.15'){
    document.body.style.lineHeight = '1.15'
}else if(heightLine === '1.5'){
    document.body.style.lineHeight = '1.5'
}else if(heightLine === '2.0'){
    document.body.style.lineHeight = '2.0'
}else if(heightLine === '3.0'){
    document.body.style.lineHeight = '3.0'
}

if (styleFont == 'Arial') {
    document.body.style.fontFamily = 'Arial'
}else if(heightLine === '1.15'){
    document.body.style.fontFamily = 'Times New Roman'
}
}