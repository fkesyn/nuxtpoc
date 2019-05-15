<template>
  <v-container id="login">
    <v-data-table v-if="show" />
    <no-ssr>
      FDXX!!!!
    </no-ssr>
    <login-widget :id="id" @loginClick="getLoginToken" />
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'http://loginwidget.fabio.mota.1.dev.hostelworld.com/js/login.js'
        }
      ]
    }
  },
  data() {
    return {
      id: 'nuxtPOC',
      show: false
    }
  },
  mounted() {},
  methods: {
    getLoginToken(response) {
      const token = response.detail[0]
      const isAuthenticated = !!token
      if (isAuthenticated) {
        this.$cookies.set('jwt', token, {
          maxAge: 60 * 60 * 24
        })
        this.$store.commit('login/setAuthToken', token)
        this.$router.push('/')
      }
    }
  },
  middleware: 'anonymous'
}
</script>
