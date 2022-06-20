$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// slider 2

var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 5,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

// SCROLL js //
const sr = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  delay: 300,
  reset: true,
});

// /*SCROLL js*/
sr.reveal(".carlsberg", { interval: 100 });
sr.reveal(".n-n-n", { interval: 100 });
sr.reveal(".video-one", { interval: 100 });
sr.reveal(".swiper-slide", { interval: 100 });
