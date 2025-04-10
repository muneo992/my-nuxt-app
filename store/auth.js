export const state = () => ({
    isAdmin: false, // 管理者認証状態
  });
  
  export const mutations = {
    setAdmin(state, status) {
      state.isAdmin = status;
    },
  };
  
  export const actions = {
    loginAdmin({ commit }, { username, password }) {
      const config = useRuntimeConfig();
      // 環境変数から管理者の認証情報を取得
      if (username === config.private.adminUsername && password === config.private.adminPassword) {
        commit('setAdmin', true);
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logoutAdmin({ commit }) {
      commit('setAdmin', false);
    },
  };
  