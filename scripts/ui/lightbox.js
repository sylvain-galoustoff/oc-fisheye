import {
  addAccessibilityToElement,
  removeAccessibilityToElement,
} from "./accesibility.js";

export default function lightbox() {
  const mediaCards = document.querySelectorAll(".media-card a");
  const medias = document.querySelectorAll(".media-card a > *"); //Video et img uniquement

  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightbox-content");
  const closeButton = document.getElementById("close-lightbox");

  /* ECOUTEURS */
  mediaCards.forEach((card, index) => {
    card.addEventListener("click", openLightbox.bind(this, index));
  });

  closeButton.addEventListener("click", closeLightbox);

  /* Open and use lightbox */
  function openLightbox(index) {
    lightbox.style.display = "flex";
    addAccessibilityToElement(lightbox);

    const currentMedia = medias[index].cloneNode(true);

    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.appendChild(currentMedia);
    lightboxContent.innerHTML = "";
    lightboxContent.appendChild(currentMedia);
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    removeAccessibilityToElement(lightbox);
  }
}
