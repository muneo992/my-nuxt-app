<template>
    <div>
      <h1>管理画面</h1>
      <div v-if="user">
        <p>こんにちは、{{ user.name }}</p>
        <button @click="logout">ログアウト</button>
      </div>
      <div v-else>
        <button @click="login">ログイン</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useNuxtApp } from '#app';
  
  const { $auth0, $user } = useNuxtApp();
  
  const login = async () => {
    await $auth0.loginWithRedirect();
  };
  
  const logout = async () => {
    await $auth0.logout({ returnTo: window.location.origin });
  };
  
  const user = $user;
  </script>
  