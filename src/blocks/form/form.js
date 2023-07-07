export default function form() {
  validation()
}

function validation() {
  $('.js-form-validation').parsley()

  window.Parsley.addValidator('phone', {
    validateString: function (value) {
      return /^\+7 \(9\d{2}\) \d{3}-\d{2}-\d{2}$/.test(value)
    }
  })

  for (const form of document.querySelectorAll('[data-success-target]')) {
    form.addEventListener('submit', function (event) {
      event.preventDefault()
      this.closest('[data-success-parent]').style.display = 'none'
      document.querySelector(`[data-success-element="${this.dataset.successTarget}"]`)?.removeAttribute('hidden')
    })
  }
}
