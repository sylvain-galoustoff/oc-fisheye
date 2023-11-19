import Slide from "../templates/Slide.js";

export default function lightbox() {

    const mediaCard = document.querySelectorAll('.media-card')
    const medias = document.querySelectorAll('.media-card-thumbnail a > *')
    console.log(medias);

    const lightbox = document.getElementById('lightbox')
    const lightboxContent = document.getElementById('lightbox-content')
    const closeButton = document.getElementById('close-lightbox')
    const lightboxArrow = document.querySelectorAll('.lightbox-arrow')

    /* ECOUTEURS */
    mediaCard.forEach((card, index) => {
        card.addEventListener('click', openLightbox.bind(this, index))
    })

    closeButton.addEventListener('click', closeLightbox)
    lightboxArrow.forEach(arrow => {
        const direction = arrow.getAttribute('id')
        arrow.addEventListener('click', changeSlide.bind(this, direction))
    })

    /* FONCTIONS */
    function openLightbox(index) {
        lightbox.style.display = 'flex'
        medias.forEach(media => {
            const cloneMedia = media.cloneNode(true)
            const slide = Slide(cloneMedia)
            lightboxContent.appendChild(slide)
        })
        console.log(index);
        lightboxContent.style.transform = 'translateX(-' + index * 100 + '%)'
    }

    function closeLightbox() {
        lightbox.style.display = 'none'
    }

    //Changement de media
    function changeSlide(direction) {

        console.log(direction);
    }

}

