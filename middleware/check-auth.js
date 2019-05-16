export default function({ store, req }) {
  // ignore nuxt generate
  // if (process.server && !req) return
  const auth = process.server
    ? store.$cookies.get('jwt')
    : localStorage.getItem('jwt')
  store.commit('login/setAuthToken', auth)
}
