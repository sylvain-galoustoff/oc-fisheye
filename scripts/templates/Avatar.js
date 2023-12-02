export default function Avatar (name, portrait) {
  const imgWrapper = document.createElement('div')
  imgWrapper.classList.add('rounded-avatar')

  const img = document.createElement('img')
  img.setAttribute('src', `./assets/photographers/${portrait}`)
  img.setAttribute('alt', `Photo portrait de ${name}`)

  imgWrapper.appendChild(img)

  return imgWrapper
}
