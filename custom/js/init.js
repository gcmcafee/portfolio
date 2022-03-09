import { Tooltip, ScrollSpy, Collapse } from 'bootstrap';
import Swiper, { Navigation, Pagination } from 'swiper';

const scrollSpy = new ScrollSpy(document.body, {
    target: '#nav',
});

const swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Pagination],
    spaceBetween: 1,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);

const tooltipList = tooltipTriggerList.map(
    (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
);

function veryTop() {
    const nav = document.getElementById('navbar');
    if (window.pageYOffset > 75) {
        nav.classList.remove('top');
    } else {
        nav.classList.add('top');
    }
}
window.onscroll = veryTop;
window.onload = veryTop;

// Mobile Navigation
// -> close open full page navigation
function hideNav() {
    const myCollapse = document.querySelector('#navbar .collapse.show');
    if (myCollapse) {
        new Collapse(myCollapse, {
            hide: true,
        });
    }
}
// ESC key pressed -> close open full page navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideNav();
    }
});
// If overlay clicked -> close open full page navigation
document
    .querySelector('#navbar .navbar-collapse .overlay')
    .addEventListener('click', () => {
        hideNav();
    });

// If navbar link clicked, wait then -> close open full page navigation
document.querySelectorAll('#navbar a').forEach((link) => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            hideNav();
        }, 500);
    });
});
// If scrolled, wait then -> close open full page navigation
window.addEventListener('scroll', () => {
    setTimeout(() => {
        hideNav();
    }, 500);
});

function $activeNav(activeLink) {
    const navbar = document.getElementById('navbar');
    const activeBar = document.getElementById('active-bar');
    const nav = document.getElementById('nav');

    const xMove =
        activeLink.getBoundingClientRect().left -
        nav.getBoundingClientRect().left;
    const barWidth = activeLink.offsetWidth;

    // Change light/dark styling for nav
    if (activeLink.classList.contains('light-navbar')) {
        navbar.classList.add('navbar-light');
        navbar.classList.remove('navbar-dark');
    } else {
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('navbar-light');
    }

    if (activeLink.classList.contains('navbar-btn')) {
        activeBar.style.cssText = `
            opacity: 0;
            left: ${xMove}px;
            width: ${barWidth}px;
            transition: left 200ms ease-out, width 700ms ease-out, opacity 300ms ease-out;
        `;
    } else {
        activeBar.style.cssText = `
            opacity: 1;
            left: ${xMove}px;
            width: ${barWidth}px;
            transition: left 200ms ease-out, width 700ms ease-out, opacity 300ms ease-out 5ms;
        `;
    }
    navbar.classList.add('show');
}

function $spyActiveLink() {
    if (document.getElementById('nav').classList.contains('spy-active')) {
        const activeLink = document.querySelector(
            '#nav.spy-active .nav-link.active'
        );
        $activeNav(activeLink);
    }
}
$spyActiveLink();

window.addEventListener('activate.bs.scrollspy', () => {
    $spyActiveLink();
    hideNav();
});

document.querySelectorAll('.nav-link').forEach((link) => {
    // eslint-disable-next-line
    link.addEventListener('click', function () {
        const nav = document.getElementById('nav');
        nav.classList.remove('spy-active');
        $activeNav(this);
        hideNav();
        setTimeout(() => {
            nav.classList.add('spy-active');
        }, 500);
    });
});
