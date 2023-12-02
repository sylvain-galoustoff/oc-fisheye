export default function sendContactMessage () {
  const form = {
    first: '',
    last: '',
    email: '',
    message: ''
  }

  const contactForm = document.getElementById('contact-form')
  const inputs = document.getElementsByClassName('contact-input')

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function (e) {
      const field = inputs[i].getAttribute('name')
      form[field] = e.target.value
    })
  }

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(form)
  })
}
