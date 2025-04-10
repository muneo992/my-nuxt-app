import Auth0 from 'auth0-js';

export default defineNuxtPlugin(() => {
  const client = new Auth0.WebAuth({
    domain: 'your-domain.auth0.com',
    clientID: 'your-client-id',
  });

  // プラグインとして利用可能にする
  return {
    provide: {
      auth0: client,
    },
  };
});
