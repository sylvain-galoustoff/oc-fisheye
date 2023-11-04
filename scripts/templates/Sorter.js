export default function Sorter() {

    const sortSelected = document.getElementById('sort-selected')
    const sortSelectedValue = document.getElementById('sort-selected-value')
    const sortOptions = document.getElementById('sort-options')
    const options = document.getElementsByClassName('sort-option')

    sortSelected.addEventListener('click', openDropdown)
    sortOptions.addEventListener('click', closeDropdown)

    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', function () {
            const criteria = options[i].getAttribute('data-sortBy')
            console.log(criteria);
            sortSelectedValue.textContent = criteria
        })
    }

    function openDropdown() {
        sortOptions.style.display = 'block'
    }

    function closeDropdown() {
        sortOptions.style.display = 'none'
    }

}