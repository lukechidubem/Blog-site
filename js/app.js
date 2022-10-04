'use strict';

const btnClose = document.querySelector('.btn-close-by-me');
const firstSearch = document.querySelector('.first-search');
const navbarToggler = document.querySelector('.navbar-toggler');

// =============== typing animations =============
let typed = new Typed('.welcome', {
  strings: ['', 'Welcome to the Movie World!'],
  typeSpeed: 100,
  BackSpeed: 0,
  loop: true,
});

// Implementing Quote Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const slides2 = document.querySelectorAll('.slide2');
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight2 = document.querySelector('.slider__btn--right2');
  const btnLeft2 = document.querySelector('.slider__btn--left2');
  const dotsContainer = document.querySelector('.dots');

  let curSlide = 0;
  let curSlide2 = 0;
  let maxSlide = slides.length;
  let maxSlide2 = slides2.length;

  // Functions
  // Function to create the dots
  const createDots = function () {
    slides.forEach((s, i) => {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // Function to activate the dots
  const activateDots = function (slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => {
      dot.classList.remove('dots__dot--active');
    });

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // Function to go to slide
  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  // Function to move to next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDots(curSlide);
  };

  // Function to move to prev slide

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDots(curSlide);
  };

  // Calling initial functions on page load
  const init = function () {
    createDots();
    goToSlide(0);
    activateDots(0);
  };
  init();

  // Event Handlers
  btnRight.addEventListener('click', nextSlide);

  btnLeft.addEventListener('click', prevSlide);

  // Adding EventListener to arrow keys to trigger slides
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
      nextSlide();
    }
    if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  });

  // adding click event on dots
  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDots(slide);
    }
  });

  // For Rating Slider

  const goToSlide2 = function (slide) {
    slides2.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  // Function to move to prev slide
  const nextSlide2 = function () {
    if (curSlide2 === maxSlide2 - 1) {
      curSlide2 = 0;
    } else {
      curSlide2++;
    }
    goToSlide2(curSlide2);
  };

  // Function to move to prev slide

  const prevSlide2 = function () {
    if (curSlide2 === 0) {
      curSlide2 = maxSlide2 - 1;
    } else {
      curSlide2--;
    }
    goToSlide2(curSlide2);
  };

  goToSlide2(0);

  // Event Handlers
  btnRight2.addEventListener('click', nextSlide2);

  btnLeft2.addEventListener('click', prevSlide2);
};

slider();
