<template>
  <v-container v-if="isAuth" id="login">
    <v-btn @click="fakeLogin">
      Login
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: 'nuxtPOC',
      isAuth: false
    }
  },
  mounted() {
    this.checkAuth()
  },
  methods: {
    fakeLogin() {
      const token = 'someToken'
      this.$cookies.set('jwt', token)
      this.$router.push('/')
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
