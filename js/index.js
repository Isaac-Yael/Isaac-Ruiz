const nav = document.querySelector('#hamburger button')
const menu = document.getElementById('menu')
const inicio = document.querySelectorAll('#inicio')
let nodoArray = [...inicio]
const about = document.getElementById('aboutMe')
let itemMenu1 = document.querySelector('#menu-2 ul li:nth-child(1)')
let itemMenu2 = document.querySelector('#menu-2 ul li:nth-child(2)')

const options = {
    threshold: 1
}
function callback(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if (entry.target.classList == "degraded_radial"){
                itemMenu1.classList.add('intersection')
            } else {
                itemMenu1.classList.remove('intersection')
            }
            console.log(entry.target.className)
            if(entry.target.classList == "about-me_container"){
                itemMenu2.classList.add('intersection')
            } else {
                itemMenu2.classList.remove('intersection')
            }
        }
    })
//     let itemMenu1 = document.querySelector('#menu-2 ul li:nth-child(1)')
//     let itemMenu2 = document.querySelector('#menu-2 ul li:nth-child(2)')
//     if(entries[0].isIntersecting) {
//         itemMenu1.classList.add('intersection')
//         console.log(entries[0])
//         console.log(entries[1])
//     } else {
//         itemMenu1.classList.remove('intersection')
//     }
}

const observer = new IntersectionObserver(callback, options)
inicio.forEach(element => observer.observe(element))

nav.addEventListener('click', e => {
    nav.classList.toggle('open')
    if(nav.classList == "open"){
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
})
