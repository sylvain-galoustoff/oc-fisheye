import {
  addAccessibilityToElement,
  removeAccessibilityToElement,
} from "./accesibility.js";

export default function lightbox() {
  const mediaCard = document.querySelectorAll(".media-card a");

  const lightbox = document.getElementById("lightbox");
  const closeButton = document.getElementById("close-lightbox");

  /* ECOUTEURS */
  mediaCard.forEach((card) => {
    card.addEventListener("click", openLightbox);
  });

  closeButton.addEventListener("click", closeLightbox);

  /* Open and use lightbox */
  function openLightbox() {
    console.log("click");
    lightbox.style.display = "flex";
    addAccessibilityToElement(lightbox);
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    removeAccessibilityToElement(lightbox);
  }
}
