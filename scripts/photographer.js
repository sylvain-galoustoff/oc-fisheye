import getPhotographerFromUrl from "./usecases/getPhotographerFromUrl.js"
import getMediasFromUrl from "./usecases/getMediasFromUrl.js"

import PhotographerInfos from "./templates/PhotographerInfos.js"
import Avatar from "./templates/Avatar.js"
import Sorter from "./templates/Sorter.js"
import mediaFactory from "./factory/MediaFactory.js"

async function init() {

    const photographer = await getPhotographerFromUrl()
    const { name, city, country, tagline, portrait } = photographer

    const photographerInfos = PhotographerInfos(name, tagline, city, country)
    document.getElementById('photographer-infos').appendChild(photographerInfos)

    const avatar = Avatar(name, portrait)
    document.getElementById('photograph-header-avatar').appendChild(avatar)

    Sorter()

    const mediaList = await getMediasFromUrl()
    mediaList.forEach(media => {
        const card = mediaFactory(media)
        console.log(card);
        if (card) {
            document.getElementById('medias').appendChild(card)
        }
    });

}

init()