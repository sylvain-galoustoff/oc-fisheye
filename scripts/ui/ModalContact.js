import sendContactMessage from "../usecases/sendContactMessage.js"

export default function ModalContact() {

    const modalButton = document.getElementById('open-modal')
    const closeModalButton = document.getElementById('close-modal')
    const modalContact = document.getElementById('modal-contact')
    const contactForm = document.getElementById('contact-form')
    const focusableElement = modalContact.querySelector("#close-modal, .contact-input, .contact_button")
    console.log(focusableElement);

    modalButton.addEventListener('click', openModal)

    closeModalButton.addEventListener('click', closeModal)

    contactForm.addEventListener('submit', closeModal)

    document.addEventListener('keydown', function (e) {
        console.log('escape');
        if (e.key === 'Escape') {
            closeModal()
        }
    })

    function openModal() {
        document.getElementById('contact_modal').style.display = "flex"
        firstFocusableElement.focus();
    }

    function closeModal() {
        document.getElementById('contact_modal').style.display = "none"
        contactForm.reset()
    }

    sendContactMessage()

}