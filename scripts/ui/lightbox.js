export default function lightbox() {

    const lightBox = document.getElementById('lightbox')
    const mediaCard = document.querySelectorAll('.media-card')
    const closeButton = document.getElementById('close-lightbox')
    const medias = document.querySelectorAll('.media-card-thumbnail a')

    mediaCard.forEach(card => {
        card.addEventListener('click', openLightbox)
    })

    closeButton.addEventListener('click', closeLightbox)

    function openLightbox() {
        lightBox.style.display = 'flex'
    }

    function closeLightbox() {
        lightBox.style.display = 'none'
    }

    medias.forEach(media => {

        console.log(media.children[0]);

    })

}

