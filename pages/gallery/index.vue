<template>
  <div id="gallery" class="gallery">
    <a 
      class="gallery__item"
      v-for="photo in gallery" 
      :href="photo.url" 
      :data-pswp-src="photo.url"
      :data-pswp-width="photo.width" 
      :data-pswp-height="photo.height"
      @click.prevent
    >
      <img :src="photo.url" :alt="photo.title" />
    </a>
  </div>
</template>

<script setup lang="ts">
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import PhotoSwipe from 'photoswipe'
import 'photoswipe/style.css'

const { data: gallery } = await useFetch('/api/gallery')
let lightbox;

onMounted(() => {
  lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',
    pswpModule: PhotoSwipe
  })
  lightbox.init()
  console.log('mounted', lightbox)
})

onBeforeUnmount(() => {
  if (lightbox) {
    lightbox.destroy()
    lightbox = null
    console.log('unmounted', lightbox)
  }
})
</script>

<style lang="stylus">
.gallery
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  margin: 0 -10px

  &__item
    display: block
    width: calc(33% - 20px)
    margin: 10px
    overflow: hidden
    border-radius: 5px
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
    transition: all 0.3s ease

    &:hover
      transform: scale(1.05)

    img
      width: 100%
      height: 100%
      object-fit: cover
</style>