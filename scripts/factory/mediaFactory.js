import ImageCard from "../templates/ImageCard.js";
import VideoCard from "../templates/VideoCard.js";

export default function mediaFactory(media) {

    const mediaKeys = Object.keys(media)
    if (mediaKeys.includes('image')) {
        return ImageCard(media)
    } else if (mediaKeys.includes('video')) {
        return VideoCard(media)
    }

}