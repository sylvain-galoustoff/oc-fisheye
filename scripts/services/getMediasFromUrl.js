export default async function getMediasFromUrl() {

    const queryParams = new URLSearchParams(window.location.search);
    const photographerId = Number(queryParams.get('id'));

    try {

        const response = await fetch('../../data/photographers.json')
        let medias = await response.json()
        medias = medias.media

        const photographerMedias = medias.filter(media => media.photographerId === photographerId)
        return photographerMedias

    } catch (error) {

        console.error('Erreur de récupération des medias de ce photographe', error);

    }

}