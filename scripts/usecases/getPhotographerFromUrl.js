export default async function getPhotographerFromUrl() {

    const queryParams = new URLSearchParams(window.location.search);
    const photographerId = Number(queryParams.get('id'));

    try {

        const response = await fetch('../../data/photographers.json')
        let photographers = await response.json()
        photographers = photographers.photographers

        const photographer = photographers.filter(user => user.id === photographerId)
        return photographer[0]

    } catch (error) {

        console.error('Erreur de récupération des données du photographe', error);

    }


}