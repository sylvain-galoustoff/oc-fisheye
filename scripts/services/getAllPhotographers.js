export default async function getAllPhotographers () {
  try {
    const response = await fetch('../../data/photographers.json')
    let photographers = await response.json()
    photographers = photographers.photographers

    return photographers
  } catch (error) {
    console.error('Erreur de récupération des données', error)
  }
}
