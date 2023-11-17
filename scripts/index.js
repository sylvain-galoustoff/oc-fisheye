import getAllPhotographers from "./services/getAllPhotographers.js"
import PhotographerCard from "./templates/PhotographerCard.js";

async function init() {
    const photographersSection = document.getElementById("photographer_section");

    const photographers = await getAllPhotographers()

    photographers.forEach((photographer) => {
        const card = PhotographerCard(photographer)
        photographersSection.appendChild(card)
    });

}

init()