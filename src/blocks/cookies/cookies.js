export default function cookies() {
  if ($('.cookies').length > 0) {
    $('.cookies .js-cookies-close').on('click', function () {
      $(this).parents('.cookies').slideUp()
    })
  }
}
