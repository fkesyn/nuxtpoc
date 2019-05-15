<template>
  <v-container id="login">
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
      show: false
    }
  },
  mounted() {},
  methods: {
    fakeLogin() {
      const token = 'someToken'
      this.$cookies.set('jwt', token, {
        maxAge: 60 * 60 * 24
      })
      this.$store.commit('login/setAuthToken', token)
      this.$router.push('/')
    }
  },
  middleware: 'anonymous'
}
</script>
