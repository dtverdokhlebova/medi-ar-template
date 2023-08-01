export default function banner() {
  const bannerSlider = new Swiper('.banner .swiper', {
    slidesPerView: 1,
    speed: 600,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3
    }
  })
}
