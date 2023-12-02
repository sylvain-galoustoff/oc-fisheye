export default function PhotographerInfos (name, tagline, city, country) {
  const infos = document.createElement('div')
  infos.classList.add('photographer-infos-content')

  const h1 = document.createElement('h1')
  h1.textContent = name

  const location = document.createElement('p')
  location.classList.add('location')
  location.textContent = `${city}, ${country}`

  const slogan = document.createElement('p')
  slogan.classList.add('tagline')
  slogan.textContent = tagline

  infos.appendChild(h1)
  infos.appendChild(location)
  infos.appendChild(slogan)

  return infos
}
