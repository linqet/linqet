// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt', '@unocss/nuxt', '@nuxtjs/color-mode', '@nuxt/icon'],
  elementPlus: {
  },
  css: [
    '@/styles/global.css',
  ],
  icon: {
    customCollections: [
      {
        prefix: 'app-icon',
        dir: './assets/icons',
      },
    ],
  },
  app: {
    head: {
      title: 'Linqet · 灵雀快搭 - AI 驱动的全场景可视化平台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '由 AI 驱动，专为营销人员、中小商户、独立开发者打造的全场景可视化平台，快速创建活动页面、海报、H5 专区、微商城等场景化应用' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
})
