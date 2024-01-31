const hamburger = document.querySelector('.bx-menu')
// const closeNav = document.querySelector('.close__btn')
const navMenu = document.querySelector('.nav__menu')
const navLinks = document.querySelectorAll('.nav__link')
const copyDate = document.querySelector('.date')

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('nav__open')
})

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => navMenu.classList.remove('nav__open'))
})

copyDate.innerText = new Date().getFullYear()