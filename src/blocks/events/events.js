export default function events() {
  const eventsSlider = new Swiper('.events-slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3
    },
    navigation: {
      nextEl: '.ui-swiper-button--next',
      prevEl: '.ui-swiper-button--prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1340: {
        slidesPerView: 3
      }
    },
    on: {
      init: function (swiper) {
        poductNav(swiper.el)
      },
      resize: function (swiper) {
        poductNav(swiper.el)
      }
    }
  })
}
function poductNav(slider) {
  const imgHeight = slider.querySelectorAll('.events-item__img')[0].offsetHeight
  const buttons = slider.querySelectorAll('.ui-swiper-button')
  if (window.innerWidth < 768) {
    for (const button of buttons) {
      button.style.top = `${imgHeight}px`
    }
  } else if (window.innerWidth >= 768) {
    for (const button of buttons) {
      button.style.top = `${imgHeight / 2}px`
    }
  }
}
