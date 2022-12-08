var swiper = new Swiper(".news__image-slider", {
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
    slideChange: function (swiper) {
      console.log("bbb");
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

new Swiper(".cases__image-slider", {
  simulateTouch: true,
  navigation: {
    nextEl: ".cases__swiper-button-next",
    prevEl: ".cases__swiper-button-prev",
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
    slideChange: function (swipe) {
      document.querySelector(".first-slide__cases").innerHTML =
        (swipe.realIndex < 10 ? "0" : "") + (+swipe.realIndex + 1);
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
alert("111");
/*const burger = document.querySelector('.menu__burger-icon');
  burger.addEventListener('click', function(){
    console.log('wqwqsas');

   burger.classList.add('popup');
});*/
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector(".menu__list").cloneNode(1);
const body = document.body;
const bar = document.querySelectorAll(".bar");
hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  if (hamb.classList.contains("active")) {
    bar.style.color = "#fff";
  }
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
