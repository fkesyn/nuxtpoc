<template>
  <div id="rate-tracker">
    <v-alert
      v-if="noData"
      :value="true"
      type="error"
    >
      No data loaded
    </v-alert>
    <div v-if="isLoading" class="text-xs-center">
      <v-progress-circular

        :size="100"
        color="amber"
        indeterminate
      />
    </div>
    <v-container v-else-if="!noData" grid-list-xs>
      <v-layout row wrap>
        <v-flex lg3 xs12>
          <room-selector />
        </v-flex>
      </v-layout>
      <room-filters />
      <v-btn color="warning" dark large>
        Search Competitors
      </v-btn>
      <list-competitors />
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { services } from '../server'
import RoomSelector from '../components/RoomSelector'
import RoomFilters from '../components/RoomFilters'
import ListCompetitors from '../components/ListCompetitors'

export default {
  name: 'RateTrackerContainer',
  components: { RoomFilters, RoomSelector, ListCompetitors },
  data() {
    return {
      noData: false,
      isLoading: true
    }
  },
  computed: {
    ...mapGetters({
      rooms: 'ratetracker/rooms'
    })
  },
  mounted() {
    this.getFilters()
  },
  methods: {
    getFilters() {
      this.$axios
        .get(services.ROOMS)
        .then(response => {
          this.$store.commit('ratetracker/updateRooms', response.data)
        })
        .catch(error => {
          if (this.rooms.length === 0) {
            this.noData = true
          }
          console.log(error)
        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
        })
    }
  }
}
</script>
