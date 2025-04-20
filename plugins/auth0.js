import createAuth0Client from '@auth0/auth0-spa-js';

let auth0Client;

const getAuth0Client = async () => {
  if (!auth0Client) {
    auth0Client = await createAuth0Client({
      domain: 'dev-olkr47luvghfb4t5.us.auth0.com',
      client_id: 'IHA75IDoCPFQcPHneVkn4viHW6eE1KWc',
      redirect_uri: window.location.origin,
    });
  }
  return auth0Client;
};

export default defineNuxtPlugin(() => {
  return {
    provide: {
      auth0: {
        getClient: getAuth0Client
      }
    }
  };
});