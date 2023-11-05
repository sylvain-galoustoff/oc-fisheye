export default function sortMedias(mediaList, criteria = "popularite") {

    switch (criteria) {
        case "popularite":
            console.log('tri par likes');
            return mediaList.sort((a, b) => b.likes - a.likes)


        case "date":
            console.log('tri par id');
            return mediaList.sort((a, b) => a.id - b.id)


        case "titre":
            console.log('Tri par title');
            return mediaList.sort((a, b) => a.title.localeCompare(b.title))

        default: return mediaList

    }

}