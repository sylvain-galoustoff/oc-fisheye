import sortMedias from "../services/sortMedias.js"
import DisplayMedias from "../templates/DisplayMedias.js"

export default function SortSelector(mediaList) {

    const mediasGrid = document.getElementById('medias')
    const sortSelected = document.getElementById('sort-selected')
    const sortSelectedValue = document.getElementById('sort-selected-value')
    const sortOptions = document.getElementById('sort-options')
    const options = sortOptions.getElementsByClassName('sort-option')

    const firstOption = options[0]
    const lastOption = options[options.length - 1]

    console.log(lastOption);

    sortSelected.addEventListener('click', openDropdown)
    sortSelected.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            openDropdown()
        }
    })
    sortOptions.addEventListener('click', closeDropdown)

    function openDropdown() {
        sortOptions.style.display = 'block'

        document.addEventListener('keypress', function (e) {
            console.log(document.activeElement);

            const isTabPressed = e.key === 'Tab' || e.keyCode === 9

            if (isTabPressed) {

                if (e.shiftKey) {
                    if (document.activeElement === firstOption) {
                        lastOption.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastOption) {
                        firstOption.focus();
                        e.preventDefault();
                    }
                }

            } else if (e.key === 'Escape' || e.keyCode === 27) {

                closeDropdown()

            } else {

                return

            }

        })

        firstOption.focus()

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