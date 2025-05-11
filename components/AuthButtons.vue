<template>
    <div>
      <button v-if="!isAuthenticated" @click="login">Log in with GitHub</button>
      <button v-else @click="logout">Log out</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isAuthenticated: false
      };
    },
    async mounted() {
      this.isAuthenticated = await this.$auth0.isAuthenticated();
    },
    methods: {
      async login() {
        await this.$auth0.login();
      },
      logout() {
        this.$auth0.logout();
      }
    }
  };
  </script>
  