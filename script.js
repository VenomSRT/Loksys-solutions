const technologySwiper = new Swiper('.technology__swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 1,
});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navigation');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menu.style.display = 'flex';
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.style.display = 'none';
        menuOpen = false;
    }
});

const menuBtnBurger = document.querySelector('.menu-btn__burger');

document.body.addEventListener('resize', () => {
    if (getComputedStyle(document.body).width >= 1024) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
})
