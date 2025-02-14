// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

// const swiperDetails = new Swiper('.detailsSwiper', {
//   loop: true,
//   effect: 'coverflow',
//   slidesPerView: 5,
//   centeredSlides: true,
//   initialSlide: 2,
//   speed: 1000,
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 80,
//     depth: 150,
//     modifier: 1,
//     slideShadows: false,
//   },
//   navigation: {
//     nextEl: '.gallery-swiper-button-next',
//     prevEl: '.gallery-swiper-button-prev',
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 1,
//       spaceBetween: 30,
//     },
//     1200: {
//       slidesPerView: 1,
//       spaceBetween: 35,
//     },
//     1440: {
//       slidesPerView: 2,
//       spaceBetween: 45,
//     },
//   },
// });
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperDetails = new Swiper('.detailsSwiper', {
  loop: true,
  effect: 'coverflow',
  slidesPerView: 5,
  centeredSlides: true,
  initialSlide: 2,
  speed: 1000,
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 45,
    },
  },
});
