import mediaFactory from '../factory/mediaFactory.js'

export default function DisplayMediaGrid(mediaList) {

    mediaList.forEach(media => {
        const card = mediaFactory(media)
        if (card) {
            return card
        }
    });

}