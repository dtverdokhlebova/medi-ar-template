export default function cities() {
  const citiesSlider = new Swiper('.cities .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    speed: 500,
    autoplay: {
      delay: 4000
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 80,
      modifier: 1,
      slideShadows: true
    },
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
    }
  })
}
