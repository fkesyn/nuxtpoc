export const state = () => ({
  authToken: ''
})

export const mutations = {
  setAuthToken(state, data) {
    state.authToken = data
  }
}

export const getters = {
  authToken: state => state.authToken
}
