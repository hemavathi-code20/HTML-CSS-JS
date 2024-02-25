
/* Show menu*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*Menu hidden*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*Remove menu mobile*/
const navLink = document.querySelectorAll('.nav-link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*Add blur header */
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') :
        header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}

const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opacity: 1,
    scale: 1.1,
    duration: 2500,
    delay: 300,
})
sr.reveal(`.home-data, .about-img, .about-data, .visit-data`)
sr.reveal(`.home-image, .footer-img1, .footer-img2`, { rotate: { z: -15 } })
sr.reveal(`.home-cafe, .about-cafe`, { rotate: { z: 15 } })
sr.reveal(`.home-footer`, { scale: 1, origin: 'bottom' })

sr.reveal(`.new-card:nth-child(1) img`, { rotate: { z: -30 }, distance: 0 })
sr.reveal(`.new-card:nth-child(2) img`, { rotate: { z: 15 }, distance: 0, delay: 600 })
sr.reveal(`.new-card:nth-child(3) img`, { rotate: { z: -30 }, distance: 0, delay: 900 })
sr.reveal(`.new-card:nth-child(4) img`, { rotate: { z: 15 }, distance: 0, delay: 600 })
sr.reveal(`.new-card:nth-child(5) img`, { rotate: { z: -30 }, distance: 0, delay: 900 })
sr.reveal(`.new-card:nth-child(6) img`, { rotate: { z: 15 }, distance: 0, delay: 600 })

sr.reveal(`.favorite-card img`, { interval: 100, rotate: { z: 15 }, distance: 0 })
sr.reveal('/footer-container', { scale: 1 })