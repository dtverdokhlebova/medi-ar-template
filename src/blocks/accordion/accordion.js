export default function accordion() {
  $('.accordion-item__head').on('click', function () {
    $(this).parents('.accordion-item').toggleClass('accordion-item--active')
    $(this).siblings('.accordion-item__main').slideToggle()
  })
}
