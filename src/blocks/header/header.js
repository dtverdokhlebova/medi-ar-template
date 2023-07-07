export default function header() {
  const burger = document.querySelector('.header__burger')
  const burgerOpen = document.querySelector('.header__burger-open')
  const burgerClose = document.querySelector('.header__burger-close')
  burgerOpen.addEventListener('click', function () {
    burger.classList.toggle('active')
    document.documentElement.classList.toggle('lock-scroll-mob')
  })
  burgerClose.addEventListener('click', function () {
    burger.classList.remove('active')
    document.documentElement.classList.remove('lock-scroll-mob')
  })
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.header__burger') && !event.target.closest('.header__burger-open')) {
      burger.classList.remove('active')
    }
  })
}
