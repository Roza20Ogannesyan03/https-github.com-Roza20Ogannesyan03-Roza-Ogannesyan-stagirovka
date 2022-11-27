new Swiper(".image-slider__news", {
    simulateTouch: true,
    navigation: {
      nextEl: ".swiper-button-next__news",
      prevEl: ".swiper-button-prev__news",
    },
    /*pagination: {
      el: ".swiper-pagination-fraction",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return (
          '0<span class="' +
          currentClass +
          '"></span>' +
          " / " +
          '0<span class="' +
          totalClass +
          '"> </span>'
        );
      },
    },*/
    on: {
      slideChange : function(swiper) {
      document.querySelector(".first-slide__news").innerHTML =
      (swiper.realIndex < 10 ? "0" : "") + (+swiper.realIndex + 1);
    },
  },

    Keyboard: {
      enabled: true,
      onlyInViueport: true,
      pageUpDown: true,
    },
    autoHeight: false,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
  });

  new Swiper(".image-slider__cases", {
    simulateTouch: true,
    navigation: {
      nextEl: ".swiper-button-next__cases",
      prevEl: ".swiper-button-prev__cases",
    },
    /*pagination: {
      el: ".swiper-pagination-fraction__cases",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return (
          '0<span class="' +
          currentClass +
          '"></span>' +
          " / " +
          '0<span class="' +
          totalClass +
          '"> </span>'
        );
      },
    },*/

    on: {
      slideChange : function(swiper) {
      document.querySelector(".first-slide__cases").innerHTML =
      (swiper.realIndex < 10 ? "0" : "") + (+swiper.realIndex + 1);
    },
  },
    Keyboard: {
      enabled: true,
      onlyInViueport: true,
      pageUpDown: true,
    },
    autoHeight: false,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
  });
