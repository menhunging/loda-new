$(document).ready(function () {
  if ($(".card-slider").length > 0) {
    const cardSlider = new Swiper(".card-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 500,
      navigation: {
        nextEl: ".card-section__left .swiper-button-next",
        prevEl: ".card-section__left .swiper-button-prev",
      },
      pagination: {
        el: ".card-section__left .swiper-pagination",
      },
    });
  }

  if ($(".materials-colors__slider").length > 0) {
    const cardSlider = new Swiper(".materials-colors__slider", {
      slidesPerView: 5,
      spaceBetween: 16,
      speed: 500,
      navigation: {
        nextEl: ".materials-colors .swiper-button-next",
        prevEl: ".materials-colors .swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        480: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
      },
    });
  }
});
