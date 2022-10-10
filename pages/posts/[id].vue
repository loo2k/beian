<template>
  <div class="article" v-if="article">
    <h1 class="article__title">{{ article.title }}</h1>
    <div class="article__meta">
      <p class="article__author">作者: {{ article.author }}</p>
      <p class="article__url">来源: <a :href="article.url" target="_blank">{{ article.url }}</a></p>
    </div>
    <div class="article__content" v-html="article.content"></div>
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
const { data: article } = await useFetch(`/api/articles/${id}`, {
  key: `article.${id}`
})

onMounted(() => {
  // 加载完成后滚动到页面顶部
  window.scrollTo(0, 0)
})
</script>

<style lang="stylus">
.article
  &__title
    font-size: 24px

  &__content
    img
      max-width: 100%
  
  &__meta
    font-size: 14px
    padding: 10px 20px
    background-color: var(--bg-gray-color)
    border-radius: 8px
    border: 1px solid var(--border-color)

    p
      margin: 0
</style>