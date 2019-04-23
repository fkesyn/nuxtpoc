<template>
  <div id="calendar-view" class="extended">
    <v-data-table v-if="show" />
    <span class="title">ROOMS OVERVIEW</span>

    <v-layout row wrap>
      <v-flex lg6 sm6>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Solo"
          placeholder="Search for Room"
          solo
          class="search"
        />
      </v-flex>
      <v-flex lg2 sm2>
        <v-btn class="filter-btn" color="black" dark>
          Filter
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex
        v-for="room in filterRooms"
        :key="room.id"
        xs12
        sm6
        md6
        lg3
      >
        <room-card
          :title="room.name"
          :type="room.type"
          :rate-week="room.rateWeek"
          :rate-weekend="room.rateWeekend"
          :nrr-type="room.nrrType"
          :nrr-weekend="room.nrrWeekend"
          :nrr-week="room.nrrWeek"
          :status="room.status"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import roomCard from '../components/calendarView/roomCard'

export default {
  name: 'CalendarView',
  components: { roomCard },
  data() {
    return {
      search: '',
      show: false
    }
  },
  computed: {
    ...mapGetters({
      rooms: 'calendarview/rooms'
    }),
    filterRooms() {
      return Object.values(this.rooms).filter(room => {
        return room.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
  // middleware: 'auth'
}
</script>

<style scoped>
.title {
  margin-left: 25px;
  color: gray;
}
.filter-btn {
  height: 80%;
  width: 90%;
  border-radius: 10px;
  margin-top: 10px;
}
.search {
  margin: 10px 0 -30px 22px;
  width: 90%;
}
@media only screen and (max-width: 959px) {
  .filter-btn {
    margin-left: 17px;
  }
  .search {
    margin-left: 18px;
  }
}
</style>
