// document.querySelector('#myVideo').playbackRate = 0.8;


const button =  document.querySelector('.navigation')
const menu =  document.querySelector('.menu')
const menuToggle = document.querySelector('.menuToggle')

menuToggle.classList.add('active__menuToggle')
button.addEventListener("click", (e) =>{
        menu.classList.toggle('active__menu');
        menuToggle.classList.toggle('active__menuToggle');
})