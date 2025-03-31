export default defineNuxtConfig({
  // サーバーサイドレンダリングを無効化（静的サイト生成モードにする）
  ssr: false,

  // 静的サイト生成時のルートを指定
  generate: {
    dir: 'dist', // 出力先ディレクトリ
    routes: [
      '/', // 必要なルートを追加
      '/admin', // /admin ページを静的に生成
    ],
    fallback: true, // SPA モードで動作させるための 404.html を生成
  },
});

