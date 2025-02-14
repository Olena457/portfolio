import Swiper from 'swiper/bundle';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/bundle';

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Pagination, EffectCoverflow],
  loop: true,
  centeredSlides: true,
  effect: 'coverflow',
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -50,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 1.2,
      spaceBetween: 22,
    },
    1440: {
      slidesPerView: 1.2,
      spaceBetween: 25,
    },
  },
});

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') {
    swiper.slidePrev();
  } else if (event.key === 'ArrowRight') {
    swiper.slideNext();
  }
});
