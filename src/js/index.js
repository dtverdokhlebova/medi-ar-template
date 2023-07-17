import '../styles/style.scss'
import uiDatepicker from '../blocks/_ui/ui-datepicker/ui-datepicker'
import uiInput from '../blocks/_ui/ui-input/ui-input'
import accordion from '../blocks/accordion/accordion'
import cities from '../blocks/cities/cities'
import cookies from '../blocks/cookies/cookies'
import header from '../blocks/header/header'
import events from '../blocks/events/events'
import form from '../blocks/form/form'
import partners from '../blocks/partners/partners'
import popup from '../blocks/popup/popup'

document.addEventListener('DOMContentLoaded', function () {
  uiDatepicker()
  uiInput()
  accordion()
  cities()
  cookies()
  header()
  events()
  form()
  partners()
  popup()

  Fancybox.bind('[data-fancybox]', {
    Thumbs: false
  })
})

window.addEventListener('load', () => {
  document.body.classList.remove('transition-disabled')

  animateBlocks()
  window.addEventListener('scroll', animateBlocks)
})

function animateBlocks() {
  const blocks = document.querySelectorAll('.scroll-animate')
  for (const block of blocks) {
    const blockTop = block.getBoundingClientRect().top
    if (blockTop - window.innerHeight < 0) {
      block.classList.add('scroll-animate--visible')
    }
  }
}
