<template>
  <div id="rate-tracker">
    <v-container grid-list>
      <v-layout row>
        <v-flex xs12 sm6 md6 lg4>
          oi
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
  mounted() {
    this.getFilters()
  },
  methods: {
    getFilters() {
      const url = 'api/rooms'
      this.$axios
        .get(url)
        .then(response => {
          this.$store.commit('ratetracker/updateRooms', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
