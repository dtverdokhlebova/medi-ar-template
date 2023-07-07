export default function uiInput() {
  checkInputFill()
  inputMask()
}

function inputMask() {
  const inputMaskItem = document.querySelector('[data-mask=phone]')
  if (inputMaskItem) {
    IMask(inputMaskItem, {
      mask: '+{7} (000) 000-00-00',
      lazy: true
    })
  }
}

function checkInputFill() {
  const uiInputs = document.querySelectorAll('.ui-input')
  if (uiInputs) {
    for (const element of uiInputs) {
      const input = element.querySelector('input')
      input.value === '' ? input.classList.remove('filled') : input.classList.add('filled')
      input.addEventListener('input', function () {
        input.value === '' ? input.classList.remove('filled') : input.classList.add('filled')
      })
    }
  }
}
