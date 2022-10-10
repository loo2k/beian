// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/styles/index.styl',
    'normalize.css'
  ],
  appConfig: {
    title: '备案审核专用网站模板',
    description: '快速生成一个符合备案审核条件的静态网站',
    beian: '粤ICP备00000000号'
  }
})
