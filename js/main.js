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
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault()
    //show message
    emailjs.sendForm('service_om5h4ub', 'template_aw9cawg', '#contact-form', 'up4Tv4P03Apdw7baw')
        .then(() => {


            //Show Sent msg
            contactMessage.textContent = 'Message sent successfully'
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000);
            contactForm.reset()
        }, () => {
            //Show Error
            contactMessage.textContent = 'Message not sent'

        })


}

contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/