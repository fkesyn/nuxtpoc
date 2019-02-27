<template>
  <div id="rate-tracker">
    <v-progress-circular
      v-if="isLoading"
      :size="100"
      color="amber"
      indeterminate
    />
    <v-container v-else grid-list>
      <v-layout row>
        <v-flex xs12 sm6 md6 lg4>
          <room-selector />
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 lg12>
          <room-filters />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import RoomSelector from '../components/RoomSelector'
import RoomFilters from '../components/RoomFilters'

export default {
  name: 'RateTrackerContainer',
  components: { RoomFilters, RoomSelector },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    this.getFilters()
  },
  methods: {
    getFilters() {
      const url = 'https://mock-serve-sample.herokuapp.com/api/rooms'
      debugger
      this.$axios
        .get(url)
        .then(response => {
          this.isLoading = false
          this.$store.commit('ratetracker/updateRooms', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
