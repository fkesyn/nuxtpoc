<template>
  <v-container id="room-filters">
    <v-layout row>
      <v-flex xs12 sm6 md6 lg2>
        <label>Room Type</label>
        <v-switch :value="getRoomType" :label="selectedRoom.type" readonly />
      </v-flex>
      <v-flex xs12 sm6 md6 lg1>
        <v-select
          :value="getSelectedBeds"
          label="Number of Beds"
          :items="getNumberBeds"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import { services } from '../server'

export default {
  name: 'RoomFilters',
  computed: {
    ...mapGetters({
      selectedRoom: 'ratetracker/selectedRoom'
    }),
    getSelectedBeds() {
      return this.selectedRoom.beds
    },
    getRoomType() {
      return this.selectedRoom.type === 'dorm'
    },
    getNumberBeds() {
      return Array(services.NUMBER_OF_BEDS)
        .fill()
        .map((_, number) => number + 1)
    }
  }
}
</script>
<style>
</style>
