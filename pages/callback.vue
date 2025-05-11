<template>
    <div>
      <h1>Loading...</h1>
    </div>
  </template>
  
  <script>
  export default {
    async mounted() {
      await this.$auth0.handleRedirectCallback();
      const isAuthenticated = await this.$auth0.isAuthenticated();
      if (isAuthenticated) {
        this.$router.push('/');
      }
    }
  };
  </script>
  