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

  // アプリケーション全体のベースURLを設定
  app: {
    baseURL: '/', // 必要に応じて変更（例: '/my-app/'）
  },

  // Hooksを使って `_redirects` ファイルを生成
  hooks: {
    'nitro:config'(nitro) {
      if (!nitro.options.publicAssets) nitro.options.publicAssets = [];
      nitro.options.publicAssets.push({
        dir: './public', // publicフォルダを使用
        baseURL: '/',
      });
    },
    'build:done'() {
      const fs = require('fs');
      const redirects = '/*    /index.html   200\n';
      fs.writeFileSync('./dist/_redirects', redirects);
    },
  },
});

