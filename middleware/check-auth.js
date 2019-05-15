// const cookieparser = process.server ? require('cookieparser') : undefined
export default function({ store }) {
  if (process.server) {
    const auth = store.$cookies.get('jwt')
    store.commit('login/setAuthToken', auth)
  }
}
