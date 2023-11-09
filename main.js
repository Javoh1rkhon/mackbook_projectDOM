let spaceGray = document.querySelector('.box6')
let text = document.querySelector('.jdanash')
let white = document.querySelector('.box5')
let text1 = document.querySelector('.jadanash')
let box3 = document.querySelector('.jjdanash')
let jjj = document.querySelector('.jjjdanash')


let imgOne = document.querySelector('.imgOne')
let imgTwo = document.querySelector('.imgTwo')

let dddanash = document.querySelector('.dddanash')
let box7 = document.querySelector('.box7')
let box8 = document.querySelector('.box8')
let ddanash = document.querySelector('.ddanash')
let box9 = document.querySelector('.box9')
let box10 = document.querySelector('.box10')

box7.addEventListener('click', () => {
    box8.style.border = '2px solid #CFE7FF'
    box7.style.border = '2px solid #007FFF'
    box9.style.border = '2px solid #CFE7FF'
    box10.style.border = '2px solid #CFE7FF'
    dddanash.innerHTML = '$1,999'
})

box8.addEventListener('click', () => {
    box7.style.border = '2px solid #CFE7FF'
    box8.style.border = '2px solid #007FFF'
    box9.style.border = '2px solid #CFE7FF'
    box10.style.border = '2px solid #CFE7FF'
    dddanash.innerHTML = '$2,199'
})

box9.addEventListener('click', () => {
    box7.style.border = '2px solid #CFE7FF'
    box8.style.border = '2px solid #CFE7FF'
    box9.style.border = '2px solid #007FFF'
    box10.style.border = '2px solid #CFE7FF'
    dddanash.innerHTML = '$2,599'

})

box10.addEventListener('click', () => {
    box7.style.border = '2px solid #CFE7FF'
    box8.style.border = '2px solid #CFE7FF'
    box9.style.border = '2px solid #CFE7FF'
    box10.style.border = '2px solid #007FFF'
    dddanash.innerHTML = '$3,199'
})

spaceGray.addEventListener('click', () => {
    spaceGray.style.backgroundColor = 'blue'
    text.style.color = 'white'
    white.style.backgroundColor = 'silver'
    text1.style.color = 'dimgray'
    jjj.style.display= 'block'
    box3.style.display = 'none'
    imgOne.style.display = 'none'
    imgTwo.style.display = 'block'
})

white.addEventListener('click', () => {
    white.style.backgroundColor = 'blue'
    text1.style.color = 'white'
    spaceGray.style.backgroundColor = 'silver'
    text.style.color = 'dimgray'
    box3.style.display = 'block'
    jjj.style.display= 'none'
    imgTwo.style.display = 'none'
    imgOne.style.display = 'block'
})