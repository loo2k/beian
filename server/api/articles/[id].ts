import axios from 'axios'
import * as cheerio from 'cheerio'
// https://juejin.cn/post/7152438555246067719
export default defineEventHandler(async (event) => {
  const url = `https://juejin.cn/post/${event.context.params.id}`
  const { data } = await axios.get(url, { responseType: 'text' })

  const $ = cheerio.load(data)
  const title = $('.article-title').text().trim()
  const content = $('.article-content').html()
  const author = $('.author-info-box .username .name').text().trim()

  return { title, content, author, url }
})