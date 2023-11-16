import sortMedias from "../usecases/sortMedias.js"
import mediaFactory from "../factory/mediaFactory.js"
import DisplayMedias from "../templates/DisplayMedias.js"

export default function SortSelector(mediaList) {

    const mediasGrid = document.getElementById('medias')
    const sortSelected = document.getElementById('sort-selected')
    const sortSelectedValue = document.getElementById('sort-selected-value')
    const sortOptions = document.getElementById('sort-options')
    const options = document.getElementsByClassName('sort-option')

    sortSelected.addEventListener('click', openDropdown)
    sortOptions.addEventListener('click', closeDropdown)

    function openDropdown() {
        sortOptions.style.display = 'block'
    }

    function closeDropdown() {
        sortOptions.style.display = 'none'
    }

    const defaultMediaList = sortMedias(mediaList)
    DisplayMedias(defaultMediaList, mediasGrid)


    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', function () {

            mediasGrid.innerHTML = ""

            const criteria = options[i].getAttribute('data-sortBy')
            sortSelectedValue.textContent = criteria

            const sortedMediaList = sortMedias(mediaList, criteria)

            DisplayMedias(sortedMediaList, mediasGrid)

        })
    }

}