<template>
  <footer class="footer">
    <a v-if="appConfig.beian" target="_blank" href="https://beian.miit.gov.cn/">{{ appConfig.beian }}</a>
  </footer>
</template>

<script setup>
const appConfig = useAppConfig()
</script>

<style lang="stylus">
.footer
  font-size: 14px
  padding: 15px
  text-align: center
  margin: 15px 0
</style>