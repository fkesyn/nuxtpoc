<template>
  <v-container id="login">
    <v-data-table v-if="show" />
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
    getLoginToken(token) {
      const isAuthenticated = !!token.detail[0]
      if (isAuthenticated) {
        this.$cookies.set('jwt', token.detail[0], {
          maxAge: 60 * 60 * 24
        })
        this.$router.push('/')
      }
    }
  }
}
</script>
