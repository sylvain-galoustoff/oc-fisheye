export default function ResumeTab (totalLikesNumber = 0) {
  const resumeTab = document.createElement('div')
  resumeTab.setAttribute('id', 'resume-tab')

  const totalLikes = document.createElement('span')
  totalLikes.classList.add('total-likes')
  // const likesCount = countTotalLikes()
  const likeIcon = document.createElement('ion-icon')
  likeIcon.setAttribute('name', 'heart')

  const tjm = document.createElement('div')
  tjm.classList.add('tjm')

  const tjmValue = document.createElement('span')
  tjmValue.classList.add('tjm-value')
  tjmValue.innerHTML = '300€ / jour'

  totalLikes.innerHTML = totalLikesNumber
  totalLikes.appendChild(likeIcon)

  tjm.appendChild(tjmValue)

  resumeTab.appendChild(totalLikes)
  resumeTab.appendChild(tjm)

  document.querySelector('body').appendChild(resumeTab)
}
