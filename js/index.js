const closeMenu = document.getElementById('closeMenu')
const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

const closeMenuWithCross = () => {
    nav.classList.remove('nav-flex')
}
const openBurger = () => {
    nav.classList.add('nav-flex')
}

closeMenu.addEventListener('click', closeMenuWithCross)
burger.addEventListener('click', openBurger)