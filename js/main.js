/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


/*Menu Show*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })

}

/*Menu Hide*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    //When we click any link it menu removes
    navMenu.classList.remove('show-menu');
}
navLink.forEach(navLink => navLink.addEventListener('click', linkAction));

/*=============== HOME TYPED JS ===============*/

const typedHome = new Typed('.home-typed', {
    strings: ['Web Developer', 'Frontend Developer', 'MERN Stack Developer'],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
    backDelay: 2000,
    cursorChar: '_',
})



/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');
    //Add a class when bottom offset is greater than 50 of viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')

}
window.addEventListener('scroll', shadowHeader);


/*=============== CONTACT EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/