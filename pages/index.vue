<template>
  <div class="posts">
    <div class="post" v-for="article in articles">
      <div class="post__info">
        <h2 class="post__title">
            <nuxt-link class="post__link" :to="`/posts/${article.id}`">
            {{ article.title }}
          </nuxt-link>
        </h2>
        <div class="post__brief">
          {{ article.briefContent }}
        </div>
      </div>
      <div class="post__cover" v-if="article.coverImage">
        <img :src="article.coverImage" :alt="article.title" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: articles } = await useFetch('/api/articles')
</script>

<style lang="stylus">
.post
  padding: 20px 0
  display: flex
  align-items: center
  justify-content: space-between
  border-bottom: 1px dashed var(--border-gray-color)

  &__title
    font-size: 16px
    color: #333333
    margin: 0 0 15px 0

  &__link
    display: block

  &__brief
    font-size: 14px
    line-height: 1.6
    color: var(--text-secondary-color)

  &__cover
    flex: 0 0 auto
    width: 100px
    margin-left: 10px
    line-height: 0

    img
      width: 100px
      max-width: 100%
  
  &__info
    flex: 0 1 auto
</style>