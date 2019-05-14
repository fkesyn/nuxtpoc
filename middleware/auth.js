export default function({ app, route, store, redirect }) {
  const fullPath = route.fullPath
  const isLoginPage = fullPath === '/login'
  // const isFromLogin = app.context.from && app.context.from.fullPath === '/login'
  const isHomePage = fullPath === '/'

  const token = store.$cookies.get('jwt')

  const fromPath = store.$cookies.get('fromPath')
  if (!isLoginPage && !isHomePage) {
    if (!token) {
      store.$cookies.set('fromPath', fullPath)
      return redirect('/login')
    }

    if (fromPath) {
      store.$cookies.remove('fromPath')
      return redirect(fromPath)
    }
  }

  if (isLoginPage && token) {
    return redirect('/')
  }
}
