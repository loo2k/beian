<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title">
        <NuxtLink class="header__link" to="/">{{ siteTitle }}</NuxtLink>
        <div class="header__desc">{{ siteDescription }}</div>
      </h1>
      
      <ul class="header__nav">
        <li class="header__nav-item">
          <NuxtLink class="header__nav-link" active-class="header__nav-link--active" to="/">首页</NuxtLink>
        </li>
        <li class="header__nav-item">
          <NuxtLink class="header__nav-link" active-class="header__nav-link--active" to="/posts">博客</NuxtLink>
        </li>
        <li class="header__nav-item">
          <NuxtLink class="header__nav-link" active-class="header__nav-link--active" to="/gallery">相册</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const appConfig = useAppConfig()
const siteTitle = appConfig.title
const siteDescription = appConfig.description
</script>

<style lang="stylus">
.header
  position: sticky
  top: 0
  width: 100%
  padding: 12px 0
  margin-bottom: 15px
  border-bottom: 1px solid var(--border-gray-color)
  background-color: rgba(255, 255, 255, .88)
  backdrop-filter: blur(5px)
  z-index: 999

  .container
    display: flex
    justify-content: space-between

  &__title
    font-size: 16px
    margin: 0

  &__link
    display: block

  &__desc
    font-weight: normal
    font-size: 12px
    color: var(--text-secondary-color)

  &__nav
    flex: 0 0 auto
    display: flex
    align-items: center
    margin: 0
    padding: 0
    list-style: none

  &__nav-item
    margin: 0 0 0 20px

  &__nav-link
    display: block
    color: var(--text-secondary-color)
    transition: all 0.3s ease

    &:hover
      color: #333333

    &--active
      color: #333333
      font-weight: bold
</style>