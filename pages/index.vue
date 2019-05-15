<template>
  <v-container id="homepage">
    <no-ssr>
      FDXX!!!!
    </no-ssr>
    <v-layout row wrap>
      <v-flex offset-lg3 lg6>
        <img src="~/assets/images/nuxt.png">
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex offset-lg5 lg2>
        <v-btn v-if="!isLoggedIn" id="login-btn" @click="logIn()">
          Login
        </v-btn>
        <v-btn v-else id="logout-btn" @click="logOut()">
          Logout
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'RateTrackerContainer',
  data() {
    return {
      isLoggedIn: this.$cookies.get('jwt')
    }
  },
  methods: {
    logIn() {
      this.$router.push('/login')
    },
    logOut() {
      this.$cookies.remove('jwt')
      this.$store.commit('login/authToken', null)
      location.reload(true)
    }
  }
}
</script>

<style scoped>
.nuxt-img {
  height: 50%;
  width: 50%;
}
</style>
