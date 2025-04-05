import { getAuth0Client } from '~/plugins/auth0';

export default async ({ route, redirect }) => {
  const auth0 = await getAuth0Client();

  // 管理画面 (/admin) にアクセスする場合
  if (route.path.startsWith('/admin')) {
    const isAuthenticated = await auth0.isAuthenticated();

    if (!isAuthenticated) {
      // ログインページにリダイレクト
      return redirect('/login');
    }
  }
};