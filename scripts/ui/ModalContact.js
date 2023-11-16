import sendContactMessage from "../usecases/sendContactMessage.js"

export default function ModalContact() {

    const modalButton = document.getElementById('open-modal')
    const closeModalButton = document.getElementById('close-modal')
    const modalContact = document.getElementById('modal-contact')
    const contactForm = document.getElementById('contact-form')

    const focusableElement = modalContact.querySelectorAll("#close-modal, .contact-input, .contact_button")
    const firstFocusableElement = focusableElement[0]
    const lastFocusableElement = focusableElement[focusableElement.length - 1]

    modalButton.addEventListener('click', openModal)

    closeModalButton.addEventListener('click', closeModal)

    contactForm.addEventListener('submit', closeModal)

    function openModal() {
        document.getElementById('contact_modal').style.display = "flex"

        document.addEventListener('keydown', function (e) {
            let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

            if (isTabPressed) {

                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            } else if (e.key === 'Escape' || e.keyCode === 27) {
                closeModal()
            } else {
                return
            }
        });

        firstFocusableElement.focus();

    }

    function closeModal() {
        document.getElementById('contact_modal').style.display = "none"
        contactForm.reset()
    }

    sendContactMessage()

}