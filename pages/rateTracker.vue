<template>
  <div id="rate-tracker">
    <v-alert
      v-if="noData"
      :value="true"
      type="error"
    >
      No data loaded
    </v-alert>
    <div v-if="isLoadingRooms" class="text-xs-center">
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
      <v-btn color="warning" dark large @click="searchCompetitors">
        Search Competitors
      </v-btn>
      <div v-if="isLoadingCompetitors" class="text-xs-center">
        <v-progress-circular

          :size="100"
          color="amber"
          indeterminate
        />
      </div>
      <list-competitors v-if="hasCompetitors && !isLoadingCompetitors" />
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { services } from '../server'
import RoomSelector from '../components/rateTracker/RoomSelector'
import RoomFilters from '../components/rateTracker/RoomFilters'
import ListCompetitors from '../components/rateTracker/ListCompetitors'

export default {
  name: 'RateTrackerContainer',
  components: { RoomFilters, RoomSelector, ListCompetitors },
  data() {
    return {
      noData: false,
      isLoadingRooms: true,
      isLoadingCompetitors: false,
      hasCompetitors: false
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
          this.isLoadingRooms = false
        })
    },
    searchCompetitors() {
      this.isLoadingCompetitors = true
      setTimeout(() => {
        this.hasCompetitors = true
        this.isLoadingCompetitors = false
      }, 1000)
    }
  },
  middleware: 'authenticated'
}
</script>
