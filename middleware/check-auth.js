export default function({ store, req }) {
  store.commit('login/setCheck', 'entrei no checkAuth')
  // ignore nuxt generate
  // if (process.server && !req) return
  const auth = process.server
    ? store.$cookies.get('jwt')
    : localStorage.getItem('jwt')
  store.commit('login/setAuthToken', auth)
}
