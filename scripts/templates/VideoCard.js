import likeButton from './likeButton.js'

export default function VideoCard ({ id, photographerId, video, title, likes }) {
  const folders = {
    243: 'Mimi',
    930: 'Ellie_Rose',
    82: 'Tracy',
    527: 'Nabeel',
    925: 'Rhode',
    195: 'Marcel'
  }

  const mediaWrapper = document.createElement('div')
  mediaWrapper.classList.add('media-card-wrapper')

  const mediaCard = document.createElement('article')
  mediaCard.classList.add('media-card')

  const mediaCardThumbnail = document.createElement('div')
  mediaCardThumbnail.classList.add('media-card-thumbnail')

  const mediaLink = document.createElement('a')
  mediaLink.setAttribute('href', '#')
  mediaLink.setAttribute('title', 'Ouvrir la visionneuse d\'image')

  const videoElement = document.createElement('video')
  const videoSource = document.createElement('source')
  videoSource.setAttribute('src', `./assets/images/${folders[photographerId]}/${video}`)

  const mediaCardHeader = document.createElement('div')
  mediaCardHeader.classList.add('media-card-header')

  const mediaCardTitle = document.createElement('h2')
  mediaCardTitle.classList.add('media-card-title')
  mediaCardTitle.textContent = title

  const likeSystem = likeButton(id)

  videoElement.appendChild(videoSource)
  mediaLink.appendChild(videoElement)
  mediaCardThumbnail.appendChild(mediaLink)

  mediaCardHeader.appendChild(mediaCardTitle)
  mediaCardHeader.appendChild(likeSystem)

  mediaCard.appendChild(mediaCardThumbnail)
  mediaCard.appendChild(mediaCardHeader)

  mediaWrapper.appendChild(mediaCard)

  return mediaWrapper
}
