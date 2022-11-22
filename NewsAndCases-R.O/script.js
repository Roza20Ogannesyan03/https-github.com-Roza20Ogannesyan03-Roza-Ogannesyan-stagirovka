new Swiper(".image-slider", {
    simulateTouch: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
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

