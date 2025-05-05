import { writeFileSync, mkdirSync, existsSync } from 'fs';

export default defineNuxtConfig({
  // サーバーサイドレンダリングを無効化（静的サイト生成モードにする）
  ssr: false,

  // 静的サイト生成時の設定
  generate: {
    dir: 'dist', // 出力先ディレクトリ
    routes: [
      '/', // 必要なルートを追加
      '/admin', // /admin ページを静的に生成
    ],
    fallback: '404.html', // SPAモード用の404.htmlを生成
  },

  // アプリケーション全体のベースURLを設定
  app: {
    baseURL: '/', // 必要に応じて変更（例: '/my-app/'）
  },

  // Hooksを使ってNitroとビルド後処理を設定
  hooks: {
    // Nitroの設定を拡張
    'nitro:config'(nitro) {
      nitro.options.publicAssets = nitro.options.publicAssets || [];
      nitro.options.publicAssets.push({
        dir: 'public',
        baseURL: '/',
      });
    },

    // ビルド完了後に `_redirects` ファイルを生成
    'build:done'() {
      const distDir = './dist';
      if (!existsSync(distDir)) {
        mkdirSync(distDir);
      }
      const redirects = '/*    /index.html   200\n';
      writeFileSync(`${distDir}/_redirects`, redirects);
    },
  },

  // プラグインを設定（Auth0）
  plugins: ['~/plugins/auth0.js'],

  // 環境変数の設定
  runtimeConfig: {
    public: {}, // 公開設定（必要に応じて追加）
    private: {
      adminUsername: process.env.ADMIN_MUNEO, // 管理者のユーザー名
      adminPassword: process.env.ADMIN_816 // 管理者のパスワード
    },
  },

  // ミドルウェアの登録
  router: {
    middleware: ['auth'], // ここでミドルウェアを登録
  },

  // 互換性のある日付を指定
  compatibilityDate: '2025-04-06',
});
