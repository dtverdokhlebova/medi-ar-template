import '../styles/style.scss'
import uiDatepicker from '../blocks/_ui/ui-datepicker/ui-datepicker'
import uiInput from '../blocks/_ui/ui-input/ui-input'
import header from '../blocks/header/header'
import events from '../blocks/events/events'
import form from '../blocks/form/form'
import partners from '../blocks/partners/partners'
import popup from '../blocks/popup/popup'

document.addEventListener('DOMContentLoaded', function () {
  uiDatepicker()
  uiInput()
  header()
  events()
  form()
  partners()
  popup()
})
window.addEventListener('load', () => {
  document.body.classList.remove('transition-disabled')
})
