export default async function getAllPhotographers() {

    try {

        const response = await fetch('../../data/photographers.json')
        let photographers = await response.json()
        photographers = photographers.photographers

        // // et bien retourner le tableau photographers seulement une fois récupéré
        return photographers

    } catch (error) {

        console.error('Erreur de récupération des données', error);

    }

}