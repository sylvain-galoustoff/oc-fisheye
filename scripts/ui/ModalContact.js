import {
  addAccessibilityToElement,
  removeAccessibilityToElement
} from './accesibility.js'
import sendContactMessage from '../services/sendContactMessage.js'

export default function ModalContact () {
  const modal = document.getElementById('contact_modal')
  const modalButton = document.getElementById('open-modal')
  const closeModalButton = document.getElementById('close-modal')
  const contactForm = document.getElementById('contact-form')

  modalButton.addEventListener('click', openModal)

  closeModalButton.addEventListener('click', closeModal)

  contactForm.addEventListener('submit', closeModal)

  function openModal () {
    modal.style.display = 'flex'
    addAccessibilityToElement(modal)
  }

  function closeModal () {
    modal.style.display = 'none'
    contactForm.reset()
    removeAccessibilityToElement(modal)
  }

  sendContactMessage()
}
