import mediaFactory from "../factory/mediaFactory.js";
import lightbox from "../ui/lightbox.js";

export default function DisplayMedias(mediaList, container) {
  mediaList.forEach((media) => {
    const card = mediaFactory(media);
    if (card) {
      container.appendChild(card);
    }
  });

  lightbox();
}
