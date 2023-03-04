var myAnime

function myFunction() {
  myAnime = setTimeout(showPage, 300);
}

function showPage() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('myDiv').style.display = 'block';
}

// SWIPER
var swiper = new Swiper('.reviews-content', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 });


// REVIEWS
var swiper = new Swiper(".about-container", {

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
      spaceBetween: 140,
    },
    1480: {
      slidesPerView: 3,
      spaceBetween: -400,
    },
    780: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    734: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 200,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 200,
    },
    375: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    }
  }
});


// TRATAMENTOS
var swiper = new Swiper('.trataments-content', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 });


 
