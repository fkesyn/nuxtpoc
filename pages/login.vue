<template>
  <v-container v-if="isAuth" id="login">
    <login-widget :id="id" @loginClick="getLoginToken" />
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  head() {
    return {
      script: [
        {
          src: 'http://loginwidget.fabio.mota.1.dev.hostelworld.com/js/login.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href:
            'http://loginwidget.fabio.mota.1.dev.hostelworld.com/css/login.css'
        }
      ]
    }
  },
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
