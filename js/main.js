$(document).ready(function () {
  if ($(".burger").length > 0) {
    $(".burger").on("click", function () {
      $(this).toggleClass("burger--opened");
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".text-block").length > 0) {
    moveTitle();
  }

  if ($(".line-text").length > 0) {
    moveBtn();
  }

  if ($(".grettings-slider").length > 0) {
    const grettingsSlider = new Swiper(".grettings-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 500,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  if ($(".material-slider").length > 0) {
    const grettingsSlider = new Swiper(".material-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 500,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    grettingsSlider.on("slideChange", function (swiper) {
      $(".main-materials__item")
        .removeClass("active")
        .eq(swiper.activeIndex)
        .addClass("active");
    });

    $(".main-materials__item").on("click", function () {
      let index = $(this).attr("data-item");
      grettingsSlider.slideTo(index);

      $(".main-materials__item")
        .removeClass("active")
        .eq(index)
        .addClass("active");
    });
  }

  if ($("select").length > 0) {
    $("select").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {},
        onClose: function (element) {},
      });
    });
  }

  // if ($(".products__slider").length > 0) {
  //   const sliders = document.querySelectorAll(".products__slider");
  //   let mySwipers = [];

  //   function sliderinit() {
  //     sliders.forEach((slider, index) => {
  //       if (!slider.swiper) {
  //         mySwipers[index] = new Swiper(slider, {
  //           slidesPerView: 4,
  //           spaceBetween: 32,
  //           navigation: {
  //             nextEl: ".swiper-button-next",
  //             prevEl: ".swiper-button-prev",
  //           },
  //           on: {
  //             init: function (swiper) {},
  //             slideChange: function (swiper) {},
  //           },
  //           breakpoints: {
  //             320: {
  //               slidesPerView: 1,
  //               spaceBetween: 16,
  //             },
  //             350: {
  //               slidesPerView: 2,
  //               spaceBetween: 16,
  //             },
  //             740: {
  //               slidesPerView: 3,
  //             },
  //             1024: {
  //               slidesPerView: 4,
  //             },
  //             1200: {
  //               slidesPerView: 4,
  //             },
  //             1441: {
  //               slidesPerView: 4.68,
  //             },
  //           },
  //         });
  //       } else {
  //         return;
  //       }
  //     });
  //   }

  //   sliders.length && sliderinit();
  // }

  // ---------------------------------------

  // if ($(".phoneInput").length > 0) {
  //   $(".phoneInput").map(function () {
  //     $(this).inputmask({
  //       mask: "+7(999) 999-99-99",
  //       placeholder: "*",
  //       showMaskOnHover: false,
  //       showMaskOnFocus: true,
  //       clearIncomplete: true,
  //     });
  //   });
  // }

  // if ($(".modal").length > 0) {
  //   MicroModal.init({
  //     openTrigger: "data-modal",
  //     disableScroll: true,
  //     awaitOpenAnimation: true,
  //     awaitCloseAnimation: true,

  //     onShow: () => {
  //       $("body").addClass("modal-open");
  //     },

  //     onClose: () => {
  //       $("body").removeClass("modal-open");
  //     },
  //   });

  //   $("[data-modal]").map(function () {
  //     $(this).click((e) => e.preventDefault());
  //   });
  // }

  // if ($(".tabs").length > 0) {
  //   $(".tabs").tabslet({
  //     mouseevent: "click",
  //     attribute: "href",
  //     animation: true,
  //   });
  // }

  // if ($(".linkFancyBox").length > 0) {
  //   Fancybox.bind("[data-fancybox]", {
  //     speedIn: 600,
  //     speedOut: 600,
  //   });
  // }
});

$(window).on("resize", function () {
  if ($(".text-block").length > 0) {
    moveTitle();
  }

  if ($(".line-text").length > 0) {
    moveBtn();
  }
});

$(window).on("load", function () {
  setTimeout(() => ymapsLoad(), 500);
  setTimeout(() => ymaps.ready(init), 1000);

  function ymapsLoad() {
    var script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=0cec76e1-1847-46ed-a96a-c84c0917f2ad&lang=ru_RU";
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.75249, 37.623205],
      zoom: 10,
      controls: false,
    });

    myMap.controls.remove("searchControl");

    var myPlacemark = new ymaps.Placemark(
      [55.886521, 37.4368],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../img/location.svg",
        iconImageSize: [80, 80],
        iconImageOffset: [-40, -40],
      }
    );

    myMap.geoObjects.add(myPlacemark);

    var myPlacemark = new ymaps.Placemark(
      [55.72202, 37.632969],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../img/location.svg",
        iconImageSize: [80, 80],
        iconImageOffset: [-40, -40],
        iconContentOffset: [0, 0],
      }
    );

    myMap.geoObjects.add(myPlacemark);
  }
});

function moveTitle() {
  if ($(window).width() < 1024) {
    if (!$(".text-block").hasClass("move-title")) {
      moveMobile();
    }
  } else {
    if ($(".text-block").hasClass("move-title")) {
      moveDesktop();
    }
  }

  function moveMobile() {
    $(".text-block").map(function () {
      let textBlock = $(this);
      let textBlockInner = textBlock.find(".text-block__inner");
      let textBlockContent = textBlock.find(".text-block__content");
      let caption = textBlockContent.find("h2")[0];

      $(caption).prependTo(textBlockInner);
      textBlock.addClass("move-title");
    });
  }

  function moveDesktop() {
    $(".text-block").map(function () {
      let textBlock = $(this);
      let textBlockInner = textBlock.find(".text-block__inner");
      let textBlockContent = textBlock.find(".text-block__content");
      let caption = textBlockInner.find("h2")[0];

      $(caption).prependTo(textBlockContent);
      textBlock.removeClass("move-title");
    });
  }
}

function moveBtn() {
  if ($(window).width() < 768) {
    if (!$(".line-text").hasClass("move-btn")) {
      moveMobile();
    }
  } else {
    if ($(".line-text").hasClass("move-btn")) {
      moveDesktop();
    }
  }

  function moveMobile() {
    $(".line-text").map(function () {
      let textBlock = $(this);
      let textBlockInner = textBlock.find(".line-text__inner");
      let textBlockContent = textBlock.find(".line-text__content");
      let btn = textBlockContent.find(".btn")[0];

      console.log(btn);

      $(btn).appendTo(textBlockInner);
      textBlock.addClass("move-btn");
    });
  }

  function moveDesktop() {
    $(".line-text").map(function () {
      let textBlock = $(this);
      let textBlockInner = textBlock.find(".line-text__inner");
      let textBlockContent = textBlock.find(".line-text__content");
      let btn = textBlockInner.find(".btn")[0];

      $(btn).appendTo(textBlockContent);
      textBlock.removeClass("move-btn");
    });
  }
}
