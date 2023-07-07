export default function partners() {
  const partnersSlider = new Swiper('.partners .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1340: {
        slidesPerView: 6,
        spaceBetween: 20
      }
    }
  })
}
