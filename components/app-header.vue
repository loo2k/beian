<template>
  <header class="header">
    <h1 class="header__title">
      <NuxtLink class="header__link" to="/">{{ siteTitle }}</NuxtLink>
    </h1>
    <div class="header__desc">{{ siteDescription }}</div>
  </header>
</template>

<script setup>
const appConfig = useAppConfig()
const siteTitle = appConfig.title
const siteDescription = appConfig.description
</script>

<style lang="stylus">
.header
  text-align: center
  margin-bottom: 15px
  position: sticky
  padding: 12px 0
  width: 100%
  top: 0
  z-index: 999
  border-bottom: 1px solid var(--border-gray-color)
  background-color: rgba(255, 255, 255, .88)
  backdrop-filter: blur(5px)

  &__title
    margin: 0
    font-size: 22px

  &__link
    text-decoration: none

  &__desc
    font-size: 12px
    color: var(--text-secondary-color)
</style>