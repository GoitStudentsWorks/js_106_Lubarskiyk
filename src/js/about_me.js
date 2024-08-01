import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
new Accordion('#accordion', {
  duration: 300,
  showMultiple: true,
  openOnInit: [0],
});

const swiper = new Swiper('.about-me-swiper', {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.swiper-button-wrap .aboutme-swiper-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  centeredSlidesBounds: true,
  speed: 400,
});




const moveSlideToEnd = () => {
  if (window.innerWidth >= 1440) {
    setTimeout(() => {
      const activeSlide = swiper.slides[swiper.activeIndex];
      swiper.wrapperEl.appendChild(activeSlide); 
      swiper.update(); 
    }, 400); 
  }
};


const nextButton = document.querySelector('.swiper-button-wrap .aboutme-swiper-btn');
nextButton.addEventListener('click', moveSlideToEnd);