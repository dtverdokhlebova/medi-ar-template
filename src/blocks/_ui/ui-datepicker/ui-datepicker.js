export default function uiDatepicker() {
  const datepickers = document.querySelectorAll('.ui-datepicker')
  for (const datepicker of datepickers) {
    const datepickerInput = datepicker.querySelector('input')
    const activeDatesAtrr = datepicker.dataset.activeDates
    const activeDatesData = activeDatesAtrr.split(',').map(date => date.trim())
    flatpickr(datepickerInput, {
      locale: 'ru',
      defaultDate: 'today',
      disableMobile: 'true',
      enable: activeDatesData,
      position: 'auto right'
    })
  }
}
