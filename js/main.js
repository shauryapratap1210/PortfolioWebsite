/*=============== CODING PROFILES DATA & RENDERING ===============*/
const codingProfiles = [
    {
        platform: 'LeetCode',
        logo: `<svg viewBox="0 0 24 24" class="profile__logo" fill="currentColor">
            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.383-4.394c-.466-.466-.662-1.111-.662-1.823 0-.713.196-1.357.662-1.824l4.375-4.375c.467-.466 1.111-.662 1.824-.662s1.357.196 1.824.662l2.697 2.607c.522 0 1.383.053 1.902.053.712 0 1.357-.195 1.823-.662l.662-.662c.466-.467.662-1.111.662-1.824s-.196-1.357-.662-1.823l-2.64-2.64c-.466-.467-1.112-.662-1.824-.662s-1.357.195-1.824.662l-10.236 10.236c-.466.466-.662 1.111-.662 1.823s.196 1.357.662 1.824l10.236 10.236c.467.466 1.112.662 1.824.662s1.357-.196 1.824-.662l2.64-2.64c.466-.466.662-1.111.662-1.823s-.196-1.357-.662-1.824l-.662-.662c-.466-.467-1.111-.662-1.824-.662-.519 0-1.38.053-1.901.053z"/>
        </svg>`,
        url: 'https://leetcode.com/u/shauryapratapsingh1210/',
        stats: [
            { label: 'Problems Solved', value: 40, suffix: '+', icon: 'ri-checkbox-circle-line' },
            { label: 'Contest Rating', value: 500, suffix: '', icon: 'ri-trophy-line' }
        ],
        themeColor: '#FFA116'
    },
    {
        platform: 'GeeksforGeeks',
        logo: `<svg viewBox="0 0 24 24" class="profile__logo" fill="currentColor">
            <path d="M5.665 5.823c-.667 0-1.247.08-1.741.241-.495.161-.93.356-1.308.583l-.342-.566h-.666l-.075 4.132h.683a11.2 11.2 0 0 1 .433-1.341c.172-.445.394-.842.666-1.192a3.02 3.02 0 0 1 1-.833c.389-.21.855-.316 1.4-.316.594 0 1.124.122 1.59.366.467.24.873.597 1.217 1.075.339.461.6 1.036.783 1.724.184.69.275 1.458.275 2.308 0 .192-.006.38-.017.567H0v.608c.133.016.314.044.541.083.222.033.403.083.542.15a.748.748 0 0 1 .358.358c.067.15.1.328.1.534v.916c0 .666-.003 1.116-.008 1.35a22.14 22.14 0 0 1-.033.574 12.57 12.57 0 0 0 2.207.767 9.138 9.138 0 0 0 2.158.266c.755 0 1.483-.141 2.183-.425a5.46 5.46 0 0 0 1.832-1.208 5.815 5.815 0 0 0 1.258-1.924 6.09 6.09 0 0 0 .389-1.441h.946c.075.511.204.992.389 1.44.31.756.73 1.398 1.258 1.925a5.46 5.46 0 0 0 1.833 1.208c.7.284 1.427.425 2.182.425.705 0 1.425-.089 2.158-.266a12.57 12.57 0 0 0 2.208-.767c-.012-.15-.023-.341-.034-.575a66.751 66.751 0 0 1-.008-1.35v-.915c0-.206.033-.384.1-.534a.748.748 0 0 1 .358-.358c.14-.067.32-.117.542-.15.228-.039.408-.067.541-.083v-.608h-9.563a9.108 9.108 0 0 1-.017-.567c0-.85.092-1.619.275-2.308.183-.688.444-1.263.783-1.724.344-.478.75-.836 1.216-1.075.467-.244.997-.366 1.592-.366.544 0 1.01.105 1.399.316a3.02 3.02 0 0 1 1 .833c.272.35.494.747.666 1.192.157.408.31.868.433 1.341h.683l-.075-4.132h-.666l-.342.566c-.378-.227-.813-.422-1.308-.583-.494-.161-1.074-.241-1.741-.241z"/>
        </svg>`,
        url: 'https://www.geeksforgeeks.org/user/shauryapratapsingh1210/',
        stats: [
            { label: 'Coding Score', value: 166, suffix: '', icon: 'ri-star-line' },
            { label: 'Problems Solved', value: 79, suffix: '+', icon: 'ri-code-s-slash-line' }
        ],
        themeColor: '#2F8D46'
    }
];

const renderCodingProfiles = () => {
    const container = document.getElementById('profiles-container');
    if (!container) return;

    container.innerHTML = codingProfiles.map(profile => `
        <article class="profiles__card">
            <div class="profile__logo-container" style="color: ${profile.themeColor};">
                ${profile.logo}
            </div>

            <div>
                <h3 class="profile__name">${profile.platform}</h3>
            </div>

            <div class="profile__stats">
                ${profile.stats.map(stat => `
                    <div class="profile__stat">
                        <div class="profile__stat-icon-wrapper">
                            <i class="${stat.icon} profile__stat-icon" style="color: ${profile.themeColor};"></i>
                            <span>${stat.label}</span>
                        </div>
                        <span class="profile__stat-number" data-target="${stat.value}" data-suffix="${stat.suffix}">0</span>
                    </div>
                `).join('')}
            </div>

            <a href="${profile.url}" target="_blank" class="home__button button__ghost profile__button" style="border-color: ${profile.themeColor}; color: ${profile.themeColor};">
                View Profile <i class="ri-arrow-right-up-line" style="margin-left: 0.25rem;"></i>
            </a>
        </article>
    `).join('');
};

// Render immediately so elements exist for ScrollReveal
renderCodingProfiles();

// Counter animation logic
const startCounters = (entry) => {
    const counters = entry.target.querySelectorAll('.profile__stat-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 1500; // 1.5s animation
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = Math.floor(progress * target);

            counter.innerText = currentValue + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target + suffix;
            }
        };

        requestAnimationFrame(updateCounter);
    });
};

const profilesObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters(entry);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const profilesSection = document.getElementById('profiles');
if (profilesSection) {
    profilesObserver.observe(profilesSection);
}

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
sr.reveal(`.profiles__card`, { interval: 100 })