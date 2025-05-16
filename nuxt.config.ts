import { writeFileSync, mkdirSync, existsSync } from 'fs';

export default defineNuxtConfig({
  // **SSRの設定**: falseにすることでクライアントサイドレンダリング（CSR）を有効化
  ssr: false,

  // **静的サイト生成のルート設定**
  generate: {
    routes: ['/', '/admin'], // 必要なルートを指定
  },

  // **Nitroの設定**
  nitro: {
    // 推奨される互換性日付を設定
    compatibilityDate: '2025-05-16',

    // 出力先ディレクトリを指定
    output: {
      publicDir: 'dist',
    },

    // パブリックアセットの設定
    publicAssets: [
      {
        dir: 'public', // 静的ファイルのディレクトリ
        baseURL: '/',  // ベースURL
      },
    ],
  },

  // **Hooksの設定**: ビルド後にリダイレクトファイルを生成
  hooks: {
    'build:done'() {
      const distDir = './dist';
      try {
        // 出力ディレクトリが存在しない場合は作成
        if (!existsSync(distDir)) {
          mkdirSync(distDir);
        }

        // `_redirects` ファイルを生成
        const redirects = '/*    /index.html   200\n';
        writeFileSync(`${distDir}/_redirects`, redirects);
      } catch (error) {
        console.error('Error generating _redirects file:', error);
      }
    },
  },

  // **プラグインの設定**
  plugins: ['~/plugins/auth0.js'],

  // **ランタイム設定**
  runtimeConfig: {
    public: {}, // 公開設定（クライアントで使用可能）
    private: {
      adminUsername: process.env.ADMIN_MUNEO, // 環境変数から取得
      adminPassword: process.env.ADMIN_816,   // 環境変数から取得
    },
  },
});

