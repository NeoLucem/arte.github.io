const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 2000,
  },
  centeredSlides: true,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


let closeBtn = document.querySelector('#close-hamburger');
let openBtn = document.querySelector('#hamburger-btn');

//Close the hamburger menu
closeBtn.addEventListener('click', () => {
  console.log('close');
  document.getElementsByClassName('mobile-nav')[0].style.display = 'none';
});

//Open the hamburger menu
openBtn.addEventListener('click', () => {
  console.log('open');
  document.getElementsByClassName('mobile-nav')[0].style.display = 'block';
});