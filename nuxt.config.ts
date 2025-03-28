export default defineNuxtConfig({
  // 静的サイトとしてビルド
  target: 'static',

  // サーバーサイドレンダリングを無効化（静的サイト生成モードにする）
  ssr: false,

  // Nitro に関する設定
  nitro: {
    compatibilityDate: '2025-03-22', // 必要ならそのまま維持
  },

  // 静的サイト生成時のルートを指定
  generate: {
    dir: 'dist', // 出力先ディレクトリ
    routes: [
      '/admin', // 必要なルートを追加
    ],
    fallback: true, // SPA モードで動作させるための 404.html を生成
  },
});
