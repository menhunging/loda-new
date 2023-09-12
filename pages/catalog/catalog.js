const filter = {
  open(target) {
    destroyFilterAccardeon();
    $(`.filter-block.${target}`).addClass("show");
    $(".overlay-filter").addClass("show");
  },
  close() {
    $(".filter-block.filter").removeClass("show");
    $(".filter-block.categoryes").removeClass("show");
    $(".overlay-filter").removeClass("show");
  },
};

$(document).ready(function () {
  if ($(".filter-block__caption").length > 0) {
    $(".filter-block__caption").on("click", function () {
      if (!$(this).hasClass("active")) {
        closeAll();
        $(this)
          .addClass("active")
          .next(".filter-block__col")
          .stop()
          .slideDown(300);
      } else {
        closeAll();
      }
    });

    function closeAll() {
      $(".filter-block__caption").removeClass("active");
      $(".filter-block__col").stop().slideUp(300);
    }
  }

  if ($(".filter-block__title").length > 0) {
    if ($(window).width() >= 1200) {
      initFilterAccardeon();
    }
  }

  if ($(".filter-range").length > 0) {
    $(".filter-range").map(function () {
      let range = $(this).find(".range-slider input"),
        inputForm = $(this).find(".from"),
        inputTo = $(this).find(".to"),
        instance,
        min = 0,
        max = 1000,
        from = 0,
        to = 0;

      range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 0,
        to: 800,
        grid: false,
        hide_min_max: true,
        hide_from_to: true,
        onStart: updateInputs,
        onChange: updateInputs,
      });

      instance = range.data("ionRangeSlider");

      function updateInputs(data) {
        from = data.from;
        to = data.to;

        inputForm.prop("value", from);
        inputTo.prop("value", to);
      }

      inputForm.on("input", function () {
        let val = $(this).prop("value");

        if (val < min) {
          val = min;
        } else if (val > to) {
          val = to;
        }

        instance.update({
          from: val,
        });
      });

      inputTo.on("input", function () {
        let val = $(this).prop("value");

        if (val < from) {
          val = from;
        } else if (val > max) {
          val = max;
        }

        instance.update({
          to: val,
        });
      });
    });
  }

  if ($(".btn-open-filter").length > 0) {
    $(".btn-open-filter").on("click", function () {
      filter.open("filter");
    });
  }

  if ($(".btn-open-category").length > 0) {
    $(".btn-open-category").on("click", function () {
      filter.open("categoryes");
    });
  }

  if ($(".overlay-filter").length > 0) {
    $(".overlay-filter").on("click", function () {
      filter.close();
    });
  }

  if ($(".btn-mobile-close").length > 0) {
    $(".btn-mobile-close").on("click", function () {
      filter.close();
    });
  }
});

$(window).on("resize", function () {
  if ($(".category-slider").length > 0) {
    if ($(window).width() <= 767) {
      initCategorySlider();
    } else {
      destroyCategorySlider();
    }
  }

  if ($(".filter-block__title").length > 0) {
    if ($(window).width() >= 1200) {
      initFilterAccardeon();
    } else {
      destroyFilterAccardeon();
    }
  }
});

function initFilterAccardeon() {
  if (!$(".catalog-page__filter").hasClass("init-accardeon")) {
    filter.close();
    $(".catalog-page__filter").addClass("init-accardeon");

    $(".filter-block__title").map(function () {
      let caption = $(this).find(".caption");
      let content = $(this)
        .parents(".filter-block")
        .find(".filter-block__content");

      caption.on("click", function () {
        $(this).toggleClass("close");
        content.stop().slideToggle();
      });
    });
  }
}

function destroyFilterAccardeon() {
  $(".catalog-page__filter").removeClass("init-accardeon");
  $(".filter-block__content").slideDown().attr("style", "");
  $(".filter-block__title .caption").removeClass("close").off("click");
}
