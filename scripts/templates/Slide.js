export default function Slide(node) {

    const slide = document.createElement('div')
    slide.classList.add('slide')
    slide.appendChild(node)

    return slide

}