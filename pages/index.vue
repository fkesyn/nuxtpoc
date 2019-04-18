<template>
  <login-widget :id="id" @loginClick="getLoginToken" />
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
      id: 'nuxtPOC'
    }
  },
  mounted() {},
  methods: {
    getLoginToken(token) {
      const isAuthenticated = !!token.detail[0]
      if (isAuthenticated) {
        this.$router.push('/calendarView')
      }
    }
  }
}
</script>
