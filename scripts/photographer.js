import getPhotographerFromUrl from "./usecases/getPhotographerFromUrl.js"
import getMediasFromUrl from "./usecases/getMediasFromUrl.js"

import PhotographerInfos from "./templates/PhotographerInfos.js"
import Avatar from "./templates/Avatar.js"
import SortSelector from "./templates/SortSelector.js"
import sendContactMessage from "./usecases/sendContactMessage.js"

async function init() {

    const photographer = await getPhotographerFromUrl()
    const { name, city, country, tagline, portrait } = photographer

    const photographerInfos = PhotographerInfos(name, tagline, city, country)
    document.getElementById('photographer-infos').appendChild(photographerInfos)

    document.getElementById('modal-photographer-name').textContent = name

    const avatar = Avatar(name, portrait)
    document.getElementById('photograph-header-avatar').appendChild(avatar)

    const mediaList = await getMediasFromUrl()
    SortSelector(mediaList)

    const modalButton = document.getElementById('open-modal')
    modalButton.addEventListener('click', openModal)

    const closeModalButton = document.getElementById('close-modal')
    closeModalButton.addEventListener('click', closeModal)

    const contactForm = document.getElementById('contact-form')
    contactForm.addEventListener('submit', closeModal)

    function openModal() {
        document.getElementById('contact_modal').style.display = "flex"
    }

    function closeModal() {
        document.getElementById('contact_modal').style.display = "none"
        contactForm.reset()
    }

    sendContactMessage()

}

init()