<template>
  <div>
    <h1>Admin Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('auth/loginAdmin', {
          username: this.username,
          password: this.password,
        });
        this.$router.push('/admin'); // 認証後に管理ページへ移動
      } catch (error) {
        alert('Login failed: ' + error.message);
      }
    },
  },
};
</script>
