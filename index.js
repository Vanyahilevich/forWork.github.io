import i18Obj from './translate.js'


//-----------------------------------------------------------------------------burger
const button =  document.querySelector('.navigation')
const menu =  document.querySelector('.menu')
const menuToggle = document.querySelector('.menuToggle')

menuToggle.classList.remove('active__menuToggle')
button.addEventListener("click", (e) =>{
        menu.classList.toggle('active__menu');
        menuToggle.classList.toggle('active__menuToggle');
})

//-----------------------------------------------------------------------------accordion
const accordion = [...document.querySelectorAll('.vacancy__title')]
const showAccordion = [...document.querySelectorAll('.vacancy__show')]
const arrows = [...document.querySelectorAll('.arrow')]

accordion.map((el,index) => {
        el.addEventListener('click', () => {
                showAccordion[index].classList.toggle('vacancy__showAct')
                arrows[index].classList.toggle('arrow__act')
        })
})
//-----------------------------------------------------------------------------translate
const getTranslate = language => {
        let dataTranslate = document.querySelectorAll("[data-i18]");
        dataTranslate.forEach(item => {
                if (!item.dataset.i18) return;
                if (item.placeholder) {
                        item.placeholder = i18Obj[language][item.dataset.i18]
                } else {
                        item.textContent = i18Obj[language][item.dataset.i18]
                }

        })

}
getTranslate("EN")

const pressButtonLang = () => {
        const langBtns = document.querySelector('.header__lang')
        langBtns.addEventListener("click", (event) => {
                if (!(event.target.classList.contains("header__btn"))) return;
                Array.from(langBtns.children).forEach(item => item.classList.remove('active__lang'))
                event.target.classList.add('active__lang')
                //берем язык с нажатой кнопки
                let lang = document.querySelector('.active__lang').innerHTML
                getTranslate(lang)
        })
}
pressButtonLang()
