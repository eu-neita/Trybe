const header = document.getElementById('header-container');
header.style.backgroundColor = '#00B069';

const emegencyTasks = document.querySelector('.emergency-tasks');
emegencyTasks.style.backgroundColor = '#FF9F84'
const noEmegencyTasks = document.querySelector('.no-emergency-tasks');

noEmegencyTasks.style.backgroundColor = '#F9DB5E'

const emegencyTasksTopic = document.querySelectorAll('.emergency-tasks h3');
emegencyTasksTopic[0].style.backgroundColor = '#A500F3'
emegencyTasksTopic[1].style.backgroundColor = '#A500F3'
const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#003432';

const notEmercency = (color) =>{
    const noEmegencyTasksTopic = document.querySelectorAll('.no-emergency-tasks h3');
    for (let keyNo in noEmegencyTasksTopic) {
        noEmegencyTasksTopic[keyNo].style.backgroundColor = color;
    }
    
}
notEmercency('black')

