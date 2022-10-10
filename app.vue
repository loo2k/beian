<template>
  <app-header />
  <div class="container">
    <nuxt-loading-indicator />
    <nuxt-page />
  </div>
  <app-footer />
</template>

<script setup>
const appConfig = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appConfig.title}` : appConfig.title
  },
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  charset: 'utf-8'
})
</script>

<style lang="stylus">
.container
  max-width: 800px
  margin-right: auto
  margin-left: auto
  padding: 0 15px
</style>