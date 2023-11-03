function photographerTemplate(data) {
    const { name, portrait } = data;

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
        article.appendChild(imgWrapper);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}