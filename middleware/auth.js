export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $auth0, $user } = useNuxtApp();

  if (!$user) {
    await $auth0.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  }
});
