const nav = document.querySelector('#hamburger button')
const menu = document.getElementById('menu')
const inicio = document.querySelectorAll('#inicio')
let nodoArray = [...inicio]
const about = document.getElementById('aboutMe')
let itemMenu1 = document.querySelector('#menu-2 ul li:nth-child(1)')
let itemMenu2 = document.querySelector('#menu-2 ul li:nth-child(2)')
let itemMenu3 = document.querySelector('#menu-2 ul li:nth-child(3)')
let itemMenu4 = document.querySelector('#menu-2 ul li:nth-child(4)')
const oshito = document.getElementById('oshito')
const burger = document.getElementById('burger')
const vazper = document.getElementById('vazper')
const provertech = document.getElementById('provertech')
const water = document.getElementById('water')
const freak = document.getElementById('freak')
const clash = document.getElementById('clash')
const oshito_p = document.getElementById('oshito_p')
const dmpm = document.getElementById('dmpm')
const aurora = document.getElementById('aurora')
const body = document.getElementById('body')
const comida = document.getElementById('comida')
const arboledas = document.getElementById('arboledas')
const lightbox = document.querySelector('.lightbox')
const closeLightbox = document.querySelector('.close_lightbox')
const lightboxContainer = document.querySelector('.lightbox-container')

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
            if(entry.target.classList == "about-me_container"){
                itemMenu2.classList.add('intersection')
            } else {
                itemMenu2.classList.remove('intersection')
            }
            if(entry.target.classList == "portfolio-slider"){
                itemMenu3.classList.add('intersection')
            } else {
                itemMenu3.classList.remove('intersection')
            }
            if(entry.target.classList == "contact-text"){
                itemMenu4.classList.add('intersection')
            } else {
                itemMenu4.classList.remove('intersection')
            }
        }
    })
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

const openLightbox = () => {
    lightbox.classList.add('lightbox_display')
}

oshito.addEventListener('click', () => {
    openLightbox()
    let img = document.createElement('img')
    lightboxContainer.appendChild(img)
    img.src = './img/oshito_presentation.jpg'
    img.classList.add('lightbox-container-img')
})
burger.addEventListener('click', () => {
    openLightbox()
    let img = document.createElement('img')
    lightboxContainer.appendChild(img)
    img.src = './img/family_presentation.jpg'
    img.classList.add('lightbox-container-img')
})
vazper.addEventListener('click', () =>{
    openLightbox()
    let img = document.createElement('img')
    lightboxContainer.appendChild(img)
    img.src = './img/vazper_presentation.jpg'
    img.classList.add('lightbox-container-img')
})
provertech.addEventListener('click', () =>{
    openLightbox()
    let img = document.createElement('img')
    lightboxContainer.appendChild(img)
    img.src = './img/provertech_brand-01.jpg'
    img.classList.add('lightbox-container-img')
})
water.addEventListener('click', () => {
    openLightbox()
    let img = document.createElement('img')
    lightboxContainer.appendChild(img)
    img.src = './img/water_woman.jpg'
    img.classList.add('lightbox-container-img')
})
oshito_p.addEventListener('click', () => {
    openLightbox()
    let img = document.createElement('img')
    lightboxContainer.appendChild(img)
    img.src = './img/oshito.jpg'
    img.classList.add('lightbox-container-img')
})
freak.addEventListener('click', () => {
    openLightbox()
    let img = document.createElement('img')
    lightboxContainer.appendChild(img)
    img.src = './img/freak_mockup.jpg'
    img.classList.add('lightbox-container-img')
})
clash.addEventListener('click', () => {
    openLightbox()
    let img = document.createElement('img')
    lightboxContainer.appendChild(img)
    img.src = './img/the_clash.jpg'
    img.classList.add('lightbox-container-img')
})
dmpm.addEventListener('click', () => {
    openLightbox()
    let img = document.createElement('img')
    lightboxContainer.appendChild(img)
    img.src = './img/dmpm_presentation.jpg'
    img.classList.add('lightbox-container-img')
})

body.addEventListener('click', () => {
    openLightbox()
    let img = document.createElement('img')
    lightboxContainer.appendChild(img)
    img.src = './img/body-02.jpg'
    img.classList.add('lightbox-container-img')
})
arboledas.addEventListener('click', () => {
    openLightbox()
    let img = document.createElement('img')
    lightboxContainer.appendChild(img)
    img.src = './img/arboledas-02.jpg'
    img.classList.add('lightbox-container-img')
})
aurora.addEventListener('click', () => {
    openLightbox()
    let img = document.createElement('img')
    lightboxContainer.appendChild(img)
    img.src = './img/aurora-02.jpg'
    img.classList.add('lightbox-container-img')
})
comida.addEventListener('click', () => {
    openLightbox()
    let img = document.createElement('img')
    lightboxContainer.appendChild(img)
    img.src = './img/comida-02.jpg'
    img.classList.add('lightbox-container-img')
})
closeLightbox.addEventListener('click', () => {
    const nodoAEliminar = document.querySelector('.lightbox-container-img')
    nodoAEliminar.remove()
    lightbox.classList.remove('lightbox_display')
})