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
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')

}

window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');


const scrollActive = () => {
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({

    distance: '60px',
    origin: 'top',
    duration: 2500,

    // reset:true
})

sr.reveal(`.home__content, .resume__content:nth-child(1)`)
sr.reveal(`.home__data,.resume__content:nth-child(2)`, { delay: 300, origin: 'bottom' })

sr.reveal(`.about__content, .contact__content`, { origin: 'bottom' })
sr.reveal(`.about__image, .contact__form`, { delay: 300 })


sr.reveal(`.projects__card`, { interval: 100 })