export default function popup() {
  for (const popupElement of document.querySelectorAll('.popup')) {
    popupElement.querySelector('.popup__close').addEventListener('click', function () {
      popupElement.classList.remove('active')
      document.documentElement.style.overflow = ''
    })

    popupElement.addEventListener('click', (event) => {
      if (event.target === popupElement) {
        popupElement.classList.remove('active')
        document.documentElement.style.overflow = ''
      }
    })
  }

  window.openPopup = function (id) {
    const popupElement = document.querySelector(id)
    if (popupElement) {
      document.querySelector(id).classList.add('active')
      document.documentElement.style.overflow = 'hidden'
    }
  }
}
