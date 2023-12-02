import Avatar from './Avatar.js'

export default function PhotographerCard ({ id, name, city, country, tagline, price, portrait }) {
  const article = document.createElement('article')

  const link = document.createElement('a')
  link.setAttribute('href', `./photographer.html?id=${id}`)
  link.setAttribute('title', `Voir la page de ${name}`)

  const articleBody = document.createElement('div')
  articleBody.classList.add('article-body')

  const h2 = document.createElement('h2')
  h2.textContent = name

  const avatar = Avatar(name, portrait)

  const location = document.createElement('p')
  location.classList.add('location')
  location.textContent = `${city}, ${country}`

  const slogan = document.createElement('p')
  slogan.classList.add('tagline')
  slogan.textContent = tagline

  const costPrice = document.createElement('p')
  costPrice.classList.add('price')
  costPrice.textContent = `${price} € par jour`

  link.appendChild(articleBody)
  articleBody.appendChild(avatar)
  articleBody.appendChild(h2)
  articleBody.appendChild(location)
  articleBody.appendChild(slogan)
  articleBody.appendChild(costPrice)
  article.appendChild(link)

  return article
}
