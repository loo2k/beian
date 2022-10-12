import axios from 'axios'

export default defineEventHandler(async (event) => {
  const { data: photos } = await axios.get('https://unsplash.com/napi/photos', {
    params: { per_page: 50 }
  })

  return photos.map(e => ({
    id: e.id,
    title: e.alt_description,
    url: e.urls.regular,
    width: e.width,
    height: e.height,
    color: e.color,
    author: e.user.name,
  }))
})