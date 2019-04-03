<template>
  <v-container id="room-card">
    <v-card>
      <v-img
        class="white--text"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      />
      <v-card-title>
        <div>
          <span>{{ title }}</span><br>
        </div>
      </v-card-title>
      <v-tabs fixed-tabs>
        <v-tab>
          Week Day
        </v-tab>
        <v-tab>
          Weekend
        </v-tab>
      </v-tabs>
      <div>
        <span>Teste</span><br>
      </div>
      <v-card-actions>
        <v-btn flat color="orange">
          Share
        </v-btn>
        <v-btn flat color="orange">
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'RoomCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    rateWeek: {
      type: Number,
      default: 0
    },
    rateWeekend: {
      type: Number,
      default: 0
    },
    nrrWeek: {
      type: Number,
      default: 0
    },
    nrrWeekend: {
      type: Number,
      default: 0
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      start: this.$dayjs().format('DD MMM, YYYY'),
      end: this.$dayjs()
        .add(15, 'd')
        .format('DD MMM, YYYY')
    }
  }
}
</script>
<style>
.tabs {
  font-size: 10px;
}
</style>
