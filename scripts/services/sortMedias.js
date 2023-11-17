export default function sortMedias(mediaList, criteria = "popularite") {

    switch (criteria) {
        case "popularite":
            return mediaList.sort((a, b) => b.likes - a.likes)

        case "date":
            return mediaList.sort((a, b) => a.id - b.id)

        case "titre":
            return mediaList.sort((a, b) => a.title.localeCompare(b.title))

        default: return mediaList

    }

}