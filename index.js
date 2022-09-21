// document.querySelector('#myVideo').playbackRate = 0.8;


const button =  document.querySelector('.navigation')
const menu =  document.querySelector('.menu')
const menuToggle = document.querySelector('.menuToggle')

menuToggle.classList.remove('active__menuToggle')
menu.classList.add('active__menu');
button.addEventListener("click", (e) =>{
        menu.classList.toggle('active__menu');
        menuToggle.classList.toggle('active__menuToggle');
})


const accordion = [...document.querySelectorAll('.vacancy__title')]
const showAccordion = [...document.querySelectorAll('.vacancy__show')]
const arrows = [...document.querySelectorAll('.arrow')]


console.log(accordion)
console.log(showAccordion)

accordion.map((el,index) => {
        el.addEventListener('click', () => {
                showAccordion[index].classList.toggle('vacancy__showAct')
                arrows[index].classList.toggle('arrow__act')
        })
})

setInterval((e) => {
console.log('3213')
}, 500)