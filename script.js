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
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menu.style.display = 'none';
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

window.addEventListener('resize', () => {
    if (parseInt(getComputedStyle(document.body).width, 10) >= 1024) {
        menu.style.display = 'flex';
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menu.style.display = 'none';
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})
