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
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
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

  if ($(".video-for-slider").length > 0) {
    $(".video-for-slider").trigger("pause");
    setVideoMain();
  }

  if ($(".drop-block").length > 0) {
    $(".drop-block").map(function () {
      let block = $(this);

      block.on("click", function () {
        let list = block.find(".drop-block__list");

        if (!block.hasClass("opened")) {
          $(".drop-block__list").stop().slideUp();
          list.stop().slideDown();
        } else {
          $(".drop-block__list").stop().slideUp();
        }

        block.toggleClass("opened");

        $(document).off("mouseup");

        $(document).mouseup(function (e) {
          if (!block.is(e.target) && block.has(e.target).length === 0) {
            $(".drop-block__list").stop().slideUp();
            block.removeClass("opened");
          }
        });
      });
    });
  }

  if ($(".slider-simple").length > 0) {
    const sliders = document.querySelectorAll(".slider-simple");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 5,
            spaceBetween: 40,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
            },
            on: {
              init: function (swiper) {},
              slideChange: function (swiper) {},
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1600: {
                slidesPerView: 4,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".products-simple").length > 0) {
    const sliders = document.querySelectorAll(".products-simple");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 4,
            spaceBetween: 42,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
            },
            on: {
              init: function (swiper) {},
              slideChange: function (swiper) {},
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              390: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 22,
              },
              1600: {
                slidesPerView: 5,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        setTimeout(() => {
          $("body").removeClass("modal-open");
        }, 300);
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".count-block").length > 0) {
    $(".count-block").map(function () {
      let plus = $(this).find(".count-plus");
      let minus = $(this).find(".count-minus");
      let input = $(this).find(".input-count");
      let count = $(this).find(".input-count").val();

      plus.on("click", function (e) {
        e.preventDefault();
        count++;
        input.val(count);
      });

      minus.on("click", function (e) {
        e.preventDefault();
        count--;

        if (count < 0) {
          count = 0;
        }

        input.val(count);
      });
    });
  }
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
  if ($(".map").length > 0) {
    setTimeout(() => ymapsLoad(), 500);
    setTimeout(() => ymaps.ready(init), 1000);
  }

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

function setVideoMain() {
  if ($(window).width() < 768) {
    $(".video-for-slider").map(function () {
      setVideo($(this), "mobile");
    });
  } else {
    $(".video-for-slider").map(function () {
      setVideo($(this), "desktop");
    });
  }
}

function setVideo(video, device) {
  video.trigger("pause");
  video.find("source");
  video.attr("src", video.attr(`data-${device}`));
  video.trigger("load").trigger("play");
}

function openModal(modal) {
  MicroModal.show(modal);
  $(".modal__close").on("click", function () {
    closeModal(modal);
  });
  $("body").addClass("modal-open");
}

function closeModal(modal) {
  MicroModal.close(modal);
  setTimeout(() => {
    $("body").removeClass("modal-open");
  }, 300);
}
