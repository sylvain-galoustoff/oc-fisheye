import Avatar from "../components/Avatar";

function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        const articleBody = document.createElement('div')
        articleBody.classList.add('article-body')

        const link = document.createElement('a')
        link.setAttribute('href', `./photographer.html?id=${id}`)
        link.setAttribute('title', `Voir la page de ${name}`)

        // const imgWrapper = document.createElement('div')
        // imgWrapper.classList.add('rounded-avatar')

        // const img = document.createElement('img');
        // img.setAttribute("src", picture)
        // img.setAttribute("alt", `Photo portrait de ${name}`)

        const avatar = Avatar(name, picture)

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const location = document.createElement('p')
        location.classList.add('location')
        location.textContent = `${city}, ${country}`

        const slogan = document.createElement('p')
        slogan.classList.add('tagline')
        slogan.textContent = tagline

        const costPrice = document.createElement('p')
        costPrice.classList.add('price')
        costPrice.textContent = `${price}/jour`

        imgWrapper.appendChild(img)
        link.appendChild(avatar)
        link.appendChild(h2)

        articleBody.appendChild(link)
        articleBody.appendChild(location)
        articleBody.appendChild(slogan)
        articleBody.appendChild(costPrice)

        article.appendChild(articleBody)

        return (article);
    }
    return { name, picture, getUserCardDOM }
}