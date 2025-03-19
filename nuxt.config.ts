// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-16',
  devtools: { enabled: true }
})
export default defineNuxtConfig({
  target: 'static', // 静的サイト生成モードを有効化
  generate: {
    fallback: true, // 404ページを生成
  },
})