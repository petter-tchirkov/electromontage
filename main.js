import './style.css'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.swiper', {
    centeredSlides: true,
    slidesPerView: 1.2,
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pag',
        clickable: true,
        type: 'fraction'
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
});

new Swiper('.video-swiper', {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.video-pag',
        clickable: true,
        type: 'fraction'
    },
    navigation: {
        nextEl: '.video-next',
        prevEl: '.video-prev',
    },
});