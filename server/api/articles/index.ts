import axios from 'axios'

export default defineEventHandler(async (event) => {
  const { data: articles } = await axios.post('https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed?aid=2608&uuid=7062188205684229662&spider=0', {
    cate_id: "6809637767543259144",
    cursor: "0",
    id_type: 2,
    limit: 30,
    sort_type: 3
  })

  return articles.data.map(e => ({
    id: e.article_id,
    title: e.article_info.title,
    briefContent: e.article_info.brief_content,
    coverImage: e.article_info.cover_image
  }))
})