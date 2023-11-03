function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        const articleBody = document.createElement('div')
        articleBody.classList.add('article-body')

        const imgWrapper = document.createElement('a')
        imgWrapper.classList.add('rounded-avatar')
        imgWrapper.setAttribute('href', `./photographer?id=${id}`)
        imgWrapper.setAttribute('title', `Voir la page de ${name}`)

        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", `Photo portrait de ${name}`)

        imgWrapper.appendChild(img)

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

        article.appendChild(articleBody);
        articleBody.appendChild(imgWrapper);
        articleBody.appendChild(h2);
        articleBody.appendChild(location);
        articleBody.appendChild(slogan);
        articleBody.appendChild(costPrice);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}