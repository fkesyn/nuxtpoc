export default function({ store, redirect }) {
  if (!store.state.login.authToken) {
    return redirect('/login')
  }
}
