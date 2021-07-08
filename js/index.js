const nav = document.querySelector('#hamburger button')
const menu = document.getElementById('menu')
nav.addEventListener('click', e => {
    nav.classList.toggle('open')
    if(nav.classList == "open"){
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
    
})
