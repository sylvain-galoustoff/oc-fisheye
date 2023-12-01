import {
  addAccessibilityToElement,
  removeAccessibilityToElement
} from './accesibility.js'

export default function lightbox () {
  const mediaCards = document.querySelectorAll('.media-card a')
  const medias = document.querySelectorAll('.media-card a > *') // Video et img uniquement

  const lightbox = document.getElementById('lightbox')
  const lightboxContent = document.getElementById('lightbox-content')
  const closeButton = document.getElementById('close-lightbox')
  const lightboxArrows = document.querySelectorAll('.lightbox-arrow')

  /* ECOUTEURS */
  mediaCards.forEach((card, index) => {
    card.addEventListener('click', openLightbox.bind(this, index))
  })

  closeButton.addEventListener('click', closeLightbox)

  /* Open and use lightbox */
  function openLightbox (index) {
    let currentIndex = index
    lightbox.style.display = 'flex'
    addAccessibilityToElement(lightbox)

    const currentMedia = medias[index].cloneNode(true)
    if (currentMedia.tagName === 'VIDEO') {
      currentMedia.setAttribute('controls', '')
      currentMedia.setAttribute('autoplay', '')
      currentMedia.setAttribute('muted', '')
    }
    insertMediaIntoLightbox(currentMedia)

    function insertMediaIntoLightbox (media) {
      const currentMedia = media
      console.log(media)
      if (media.tagName === 'VIDEO') {
        currentMedia.setAttribute('controls', '')
        currentMedia.setAttribute('autoplay', '')
        currentMedia.setAttribute('muted', '')
      }
      lightboxContent.innerHTML = ''
      lightboxContent.appendChild(currentMedia)
    }

    lightboxArrows.forEach((arrow) => {
      arrow.addEventListener('click', function () {
        const direction = this.getAttribute('id')

        if (direction === 'previous-media') {
          setPreviousIndex(currentIndex)
        }

        if (direction === 'next-media') {
          setNextIndex(currentIndex)
        }

        function setPreviousIndex (index) {
          let newIndex = index
          if (index === 0) {
            newIndex = medias.length - 1
          } else {
            newIndex--
          }
          currentIndex = newIndex
          insertMediaIntoLightbox(medias[currentIndex].cloneNode(true))
        }

        function setNextIndex (index) {
          let newIndex = index
          if (index === medias.length - 1) {
            newIndex = 0
          } else {
            newIndex++
          }
          currentIndex = newIndex
          insertMediaIntoLightbox(medias[currentIndex].cloneNode(true))
        }
      })
    })
  }

  function closeLightbox () {
    lightbox.style.display = 'none'
    removeAccessibilityToElement(lightbox)
  }
}
