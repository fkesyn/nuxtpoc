<template>
  <v-container v-if="isAuth" id="login">
    <no-ssr>
      <login-widget :id="id" @loginClick="getLoginToken" />
    </no-ssr>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      id: 'nuxtPOC',
      show: false,
      isAuth: false
    }
  },
  mounted() {
    this.checkAuth()
  },
  methods: {
    getLoginToken(response) {
      const token = response.detail[0]
      const isAuthenticated = !!token
      if (isAuthenticated) {
        this.$cookies.set('jwt', token)
        this.$router.push('/')
      }
    },
    checkAuth() {
      const isAuth = localStorage.getItem('jwt')
      if (isAuth) {
        this.$router.push('/')
      } else {
        this.isAuth = true
      }
    }
  }
}
</script>
