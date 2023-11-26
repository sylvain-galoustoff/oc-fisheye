import getMediasFromUrl from '../services/getMediasFromUrl.js'

const medias = await getMediasFromUrl()
const likeStore = {}
medias.forEach(media => {
  likeStore[media.id] = {
    likes: media.likes,
    hasUserLike: false
  }
})

export default likeStore
