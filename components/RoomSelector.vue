<template>
  <div id="room-selector">
    <v-select
      :value="selectedRoom"
      :items="rooms"
      item-text="name"
      item-value="id"
      label="Select your room"
      @change="updateSelectedRoom"
    />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'RoomSelector',
  computed: {
    ...mapGetters({
      rooms: 'ratetracker/rooms',
      selectedRoom: 'ratetracker/selectedRoom'
    })
  },
  methods: {
    ...mapMutations({
      updateSelectedRoom: 'ratetracker/updateSelectedRoom'
    })
  }
}
</script>
<style>
</style>
