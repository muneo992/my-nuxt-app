import { createAuth0Client } from '@auth0/auth0-spa-js';

let auth0Client;

export default defineNuxtPlugin(async (nuxtApp) => {
  auth0Client = await createAuth0Client({
    domain: dev-olkr47luvghfb4t5.us.auth0.com, // Auth0 のドメイン
    clientId: IHA75IDoCPFQcPHneVkn4viHW6eE1KWc,  // Auth0 のクライアント ID
    authorizationParams: {
      redirect_uri: window.location.origin + '/admin/', // リダイレクト URL
    },
  });

  // ユーザー情報を取得
  const user = await auth0Client.getUser();

  nuxtApp.provide('auth0', auth0Client);
  nuxtApp.provide('user', user);
});
