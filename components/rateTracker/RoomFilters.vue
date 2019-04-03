<template>
  <v-layout id="room-filters" row wrap>
    <v-flex xs12 lg2>
      <label>Room Type</label>
      <v-switch :value="getRoomType" :label="selectedRoom.type" readonly />
    </v-flex>
    <v-flex xs12 lg1>
      <v-select
        :value="getSelectedBeds"
        label="Number of Beds"
        :items="getNumberBeds"
      />
    </v-flex>
    <v-flex xs12 lg2 offset-lg1>
      <date-picker title="Date Start" />
    </v-flex>
    <v-flex xs12 lg2 offset-lg1>
      <date-picker title="Date End" />
    </v-flex>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import { services } from '../../server'
import DatePicker from '../sub-components/date-picker'

export default {
  name: 'RoomFilters',
  components: { DatePicker },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    }
  },
  computed: {
    ...mapGetters({
      selectedRoom: 'ratetracker/selectedRoom'
    }),
    getSelectedBeds() {
      return this.selectedRoom.beds
    },
    getRoomType() {
      return this.selectedRoom.type === 'private'
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
