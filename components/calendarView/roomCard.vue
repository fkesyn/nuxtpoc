<template>
  <v-container id="room-card">
    <v-card id="room-card">
      <v-img
        class="white--text"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      />
      <v-card-title>
        <div>
          <span class="room-title">{{ title }}</span><br>
        </div>
      </v-card-title>
      <v-tabs
        slider-color="#6FBFB4"
        height="35"
        left
        active-class="active-class"
      >
        <v-tab class="tabs" href="#weekday">
          Week Day
        </v-tab>
        <v-tab class="tabs" href="#weekend">
          Weekend
        </v-tab>
        <v-tabs-items>
          <v-tab-item
            value="weekday"
          >
            <v-card-text>
              <room-card-rates
                :status="status"
                :rate="rateWeek"
                :nrr="nrrWeek"
                :nrr-type="nrrType"
              />
            </v-card-text>
          </v-tab-item>
          <v-tab-item
            value="weekend"
          >
            <v-card flat>
              <v-card-text>
                <room-card-rates
                  :status="status"
                  :rate="rateWeekend"
                  :nrr="nrrWeekend"
                  :nrr-type="nrrType"
                />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-card>
  </v-container>
</template>
<script>
import roomCardRates from './roomCardRates'
export default {
  name: 'RoomCard',
  components: { roomCardRates },
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
    nrrType: {
      type: String,
      default: 'derived'
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
<style scoped>
.room-card {
  border-radius: 5px;
}
.room-title {
  font-size: 15px;
  font-weight: bold;
}
.tabs {
  text-transform: none;
}
.active-class {
  font-weight: bold;
  color: #6fbfb4;
}
</style>
