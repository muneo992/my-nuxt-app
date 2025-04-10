<template>
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, admin!</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    middleware: 'admin', // 管理者専用のミドルウェアを設定
    methods: {
      logout() {
        this.$store.dispatch('auth/logoutAdmin');
        this.$router.push('/login'); // ログアウト後にログインページへ移動
      },
    },
  };
  </script>
  