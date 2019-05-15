export default function({ store, redirect }) {
  if (!store.state.login.authToken && !store.$cookies.get('jwt')) {
    return redirect('/login/')
  }
}
