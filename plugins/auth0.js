import { createAuth0Client } from '@auth0/auth0-spa-js';

let auth0Client;

export default defineNuxtPlugin(async (nuxtApp) => {
  // Auth0 クライアントを作成
  auth0Client = await createAuth0Client({
    domain: 'dev-olkr47luvghfb4t5.us.auth0.com', // Auth0 のドメイン
    clientId: 'IHA75IDoCPFQcPHneVkn4viHW6eE1KWc', // Auth0 のクライアント ID
    authorizationParams: {
      redirect_uri: window.location.origin + '/admin/', // リダイレクト URL
    },
  });

  // ユーザー情報を取得
  const user = await auth0Client.getUser();

  // Nuxt.js に Auth0 クライアントを提供
  nuxtApp.provide('auth0', {
    login: async () => {
      await auth0Client.loginWithRedirect();
    },
    logout: () => {
      auth0Client.logout({ returnTo: window.location.origin });
    },
    handleRedirectCallback: async () => {
      const result = await auth0Client.handleRedirectCallback();
      return result;
    },
    isAuthenticated: async () => {
      return await auth0Client.isAuthenticated();
    },
    getUser: async () => {
      return await auth0Client.getUser();
    }
  });

  // ユーザー情報も提供（必要に応じて）
  nuxtApp.provide('user', user);
});
