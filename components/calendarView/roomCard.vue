<template>
  <v-container id="room-card">
    <v-card class="room-card">
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
                     <v-layout row wrap>
                         <v-flex lg6>
                             Standard Rate
                         </v-flex>
                         <v-flex lg6>
                             €20.00
                         </v-flex>
                         </v-layout>
              </v-card-text>

          </v-tab-item>
          <v-tab-item
            value="weekend"
          >
            <v-card flat>
              <v-card-text>
                  <v-layout row wrap>
                      <v-flex lg6>
                          Standard Rate
                      </v-flex>
                      <v-flex lg6>
                          €25.00
                      </v-flex>
                  </v-layout>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
      <v-card-text>Teste</v-card-text>
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
