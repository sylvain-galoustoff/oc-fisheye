import getPhotographerFromUrl from "./usecases/getPhotographerFromUrl.js"

async function init() {

    const photographer = await getPhotographerFromUrl()
    console.log(photographer);

}

init()