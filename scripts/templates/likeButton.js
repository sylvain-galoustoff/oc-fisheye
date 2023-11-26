export default function likeButton (initialCount, userLike = false) {
  console.log(userLike, initialCount)
  let currentLikesText = initialCount
  let currentUserLike = userLike

  const mediaCardLike = document.createElement('div')
  mediaCardLike.classList.add('media-card-like')

  const likeCount = document.createElement('span')
  likeCount.classList.add('like-count')
  likeCount.textContent = currentLikesText

  const likeButton = document.createElement('button')
  likeButton.classList.add('like-button')
  likeButton.setAttribute('type', 'button')

  const likeIcon = document.createElement('ion-icon')
  likeIcon.setAttribute('name', 'heart-outline')
  likeButton.appendChild(likeIcon)

  mediaCardLike.appendChild(likeCount)
  mediaCardLike.appendChild(likeButton)

  likeButton.addEventListener('click', handleLike)

  function handleLike () {
    if (currentUserLike === false) {
      currentLikesText++
      likeIcon.setAttribute('name', 'heart')
    } else {
      currentLikesText--
      likeIcon.setAttribute('name', 'heart-outline')
    }
    likeCount.textContent = currentLikesText
    currentUserLike = !currentUserLike
  }

  return mediaCardLike
}
