import Avatar from "./Avatar.js"

export default function PhotographerCard({ id, name, city, country, tagline, price, portrait }) {

    const article = document.createElement('article')

    const articleBody = document.createElement('div')
    articleBody.classList.add('article-body')

    const link = document.createElement('a')
    link.setAttribute('href', `./photographer.html?id=${id}`)
    link.setAttribute('title', `Voir la page de ${name}`)

    const h2 = document.createElement('h2');
    h2.textContent = name;

    const avatar = Avatar(name, portrait)

    const location = document.createElement('p')
    location.classList.add('location')
    location.textContent = `${city}, ${country}`

    const slogan = document.createElement('p')
    slogan.classList.add('tagline')
    slogan.textContent = tagline

    const costPrice = document.createElement('p')
    costPrice.classList.add('price')
    costPrice.textContent = `${price}/jour`

    link.appendChild(avatar)
    link.appendChild(h2)
    articleBody.appendChild(link)
    articleBody.appendChild(location)
    articleBody.appendChild(slogan)
    articleBody.appendChild(costPrice)
    article.appendChild(articleBody)

    return article

}