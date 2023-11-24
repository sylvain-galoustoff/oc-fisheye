import Slide from "../templates/Slide.js";

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
    lightbox.style.display = "flex";
  }

  function closeLightbox() {
    lightbox.style.display = "none";
  }
}
