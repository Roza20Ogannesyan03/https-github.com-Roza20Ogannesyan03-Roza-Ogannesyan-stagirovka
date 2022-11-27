new Swiper(".news__image-slider", {
    simulateTouch: true,
    navigation: {
      nextEl: ".news__swiper-button-next",
      prevEl: ".news__swiper-button-prev",
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
  direction: "horizontal",
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
    centeredSlides: false,
  });


  
  new Swiper(".cases__image-slider", {
    simulateTouch: true,
    navigation: {
      nextEl: ".cases__swiper-button-next",
      prevEl: ".cases__swiper-button-prev",
    },

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

  

