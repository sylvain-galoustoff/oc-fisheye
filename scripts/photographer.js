import getPhotographerFromUrl from "./usecases/getPhotographerFromUrl.js"
import getMediasFromUrl from "./usecases/getMediasFromUrl.js"

import PhotographerInfos from "./templates/PhotographerInfos.js"
import Avatar from "./templates/Avatar.js"
import SortSelector from "./templates/SortSelector.js"
import sortMedias from "./usecases/sortMedias.js"

async function init() {

    const photographer = await getPhotographerFromUrl()
    const { name, city, country, tagline, portrait } = photographer

    const photographerInfos = PhotographerInfos(name, tagline, city, country)
    document.getElementById('photographer-infos').appendChild(photographerInfos)

    const avatar = Avatar(name, portrait)
    document.getElementById('photograph-header-avatar').appendChild(avatar)

    const mediaList = await getMediasFromUrl()
    SortSelector(mediaList)

}

init()