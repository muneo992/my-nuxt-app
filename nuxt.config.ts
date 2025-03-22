export default defineNuxtConfig({
  target: 'static', // 静的サイトとしてビルド
  ssr: true,        // サーバーサイドレンダリングを有効化
  nitro: {
    compatibilityDate: '2025-03-22', // 現在の日付を利用
  },
})

