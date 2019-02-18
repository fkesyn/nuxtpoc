<template>
  <v-container id="room-filters">
    <v-flex xs12 sm6 md6 lg3>
      <v-switch :value="getRoomType" :label="selectedRoom.type" readonly />
    </v-flex>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RoomFilters',
  computed: {
    ...mapGetters({
      selectedRoom: 'ratetracker/selectedRoom'
    }),
    getRoomType() {
      return this.selectedRoom.type === 'dorm'
    }
  }
}
</script>
<style>
</style>
