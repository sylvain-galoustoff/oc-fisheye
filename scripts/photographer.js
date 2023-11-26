import getPhotographerFromUrl from './services/getPhotographerFromUrl.js'
import getMediasFromUrl from './services/getMediasFromUrl.js'

import PhotographerInfos from './templates/PhotographerInfos.js'
import Avatar from './templates/Avatar.js'
import SortSelector from './ui/SortSelector.js'
import ModalContact from './ui/ModalContact.js'

async function init () {
  const photographer = await getPhotographerFromUrl()
  const { name, city, country, tagline, portrait } = photographer

  const photographerInfos = PhotographerInfos(name, tagline, city, country)
  document.getElementById('photographer-infos').appendChild(photographerInfos)

  document.getElementById('modal-photographer-name').textContent = name

  const avatar = Avatar(name, portrait)
  document.getElementById('photograph-header-avatar').appendChild(avatar)

  ModalContact()

  const mediaList = await getMediasFromUrl()

  SortSelector(mediaList)
}

init()
