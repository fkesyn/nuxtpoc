<template>
  <v-container id="calendar-view">
    <v-layout row wrap>
      <v-flex v-for="room in rooms" :key="room" xs12 lg4>
        <room-card :title="room.name" :type="room.type" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import roomCard from '../components/calendarView/roomCard'

export default {
  name: 'CalendarView',
  components: { roomCard },
  data() {
    return {
      showNumberRooms: 10
    }
  },
  computed: {
    ...mapGetters({
      rooms: 'calendarview/rooms'
    })
  }
}
</script>

<style>
</style>
