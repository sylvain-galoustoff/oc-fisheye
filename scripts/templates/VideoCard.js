export default function VideoCard({ photographerId, video, title }) {

    const folders = {
        243: "Mimi",
        930: "Ellie_Rose",
        82: "Tracy",
        527: "Nabeel",
        925: "Rhode",
        195: "Marcel",
    }

    const mediaWrapper = document.createElement('div')
    mediaWrapper.classList.add('media-card-wrapper')

    const mediaCard = document.createElement('article')
    mediaCard.classList.add('media-card')

    const mediaCardThumbnail = document.createElement('div')
    mediaCardThumbnail.classList.add('media-card-thumbnail')

    const mediaLink = document.createElement('a')
    mediaLink.setAttribute('href', "#")
    mediaLink.setAttribute("title", "Ouvrir la visionneuse d'image")

    const videoElement = document.createElement('video')
    const videoSource = document.createElement('source')
    videoSource.setAttribute('src', `./assets/images/${folders[photographerId]}/${video}`)

    const mediaCardFooter = document.createElement('div')
    mediaCardFooter.classList.add('media-card-footer')

    const mediaCardTitle = document.createElement('h2')
    mediaCardTitle.classList.add('media-card-title')
    mediaCardTitle.textContent = title

    const mediaCardLike = document.createElement('div')
    mediaCardLike.classList.add('media-card-like')

    const likeIcon = document.createElement('ion-icon')
    likeIcon.setAttribute('name', 'heart-outline')

    videoElement.appendChild(videoSource)
    mediaLink.appendChild(videoElement)
    mediaCardThumbnail.appendChild(mediaLink)

    mediaCardFooter.appendChild(mediaCardTitle)
    mediaCardFooter.appendChild(mediaCardLike)
    mediaCardFooter.appendChild(likeIcon)

    mediaCard.appendChild(mediaCardThumbnail)
    mediaCard.appendChild(mediaCardFooter)

    mediaWrapper.appendChild(mediaCard)

    return mediaWrapper

}