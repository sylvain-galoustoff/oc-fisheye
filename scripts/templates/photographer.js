function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        const imgWrapper = document.createElement('div')
        imgWrapper.classList.add('rounded-avatar')

        const img = document.createElement('img');
        img.setAttribute("src", picture)

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

        article.appendChild(imgWrapper);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(slogan);
        article.appendChild(costPrice);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}