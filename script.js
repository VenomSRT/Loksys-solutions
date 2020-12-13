const technologySwiper = new Swiper('.technology__swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 1,

    breakpoints: {    
        1356: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
    }
});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navigation');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menu.style.display = 'flex';
        menuOpen = true;
    } else {
        menu.style.display = 'none';
        menuOpen = false;
    }
});

document.body.addEventListener('resize', () => {
    if (getComputedStyle(document.body).width >= 1024) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
})
