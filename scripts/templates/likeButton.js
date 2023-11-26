import likeStore from '../store/likeStore.js'

export default function likeButton (mediaId) {
  console.log(likeStore[mediaId])

  const mediaCardLike = document.createElement('div')
  mediaCardLike.classList.add('media-card-like')

  const likeCount = document.createElement('span')
  likeCount.classList.add('like-count')
  likeCount.textContent = likeStore[mediaId].likes

  const likeButton = document.createElement('button')
  likeButton.classList.add('like-button')
  likeButton.setAttribute('type', 'button')

  const likeIcon = document.createElement('ion-icon')
  if (likeStore[mediaId].hasUserLike) {
    likeIcon.setAttribute('name', 'heart')
  } else {
    likeIcon.setAttribute('name', 'heart-outline')
  }
  likeButton.appendChild(likeIcon)

  mediaCardLike.appendChild(likeCount)
  mediaCardLike.appendChild(likeButton)

  likeButton.addEventListener('click', handleLike)

  function handleLike () {
    if (likeStore[mediaId].hasUserLike === false) {
      likeStore[mediaId].likes++
      likeIcon.setAttribute('name', 'heart')
    } else {
      likeStore[mediaId].likes--
      likeIcon.setAttribute('name', 'heart-outline')
    }

    likeCount.textContent = likeStore[mediaId].likes
    likeStore[mediaId].hasUserLike = !likeStore[mediaId].hasUserLike

    console.log(likeStore[mediaId])
  }

  return mediaCardLike
}
