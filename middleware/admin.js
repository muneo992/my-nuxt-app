export default function ({ store, redirect }) {
    // 管理者が認証されていない場合はログインページにリダイレクト
    if (!store.state.auth.isAdmin) {
      return redirect('/login');
    }
  }
  