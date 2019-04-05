<template>
  <div id="room-card-rates">
    <v-layout row wrap>
      <v-flex lg10 xs10>
          <span class="span-gray">Standard Rate</span>
      </v-flex>
      <v-flex lg2 xs2>
        <span class="right span-green">{{ formatToFloat(rate) }}</span>
      </v-flex>
      <v-flex lg10 xs10>
          <span class="span-gray">Non-refundable</span>
      </v-flex>
      <v-flex lg2 xs2>
        <span class="right span-red">{{ getNRR }}</span>
      </v-flex>
      <v-flex lg10 xs10>
          <span class="span-gray">NRR Status</span>
      </v-flex>
      <v-flex lg2 xs2>
        <span class="right span-green">{{ getStatus }}</span>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'RoomCardRates',
  props: {
    rate: {
      type: Number,
      default: 0
    },
    nrrType: {
      type: String,
      default: 'derived'
    },
    nrr: {
      type: Number,
      default: 0
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters({
      currency: 'calendarview/currency'
    }),
    getStatus() {
      return this.status ? 'On' : 'Off'
    },
    getNRR() {
      if (this.nrrType === 'non-derived') return this.formatToFloat(this.nrr)
      return this.nrr + '%'
    }
  },
  methods: {
    formatToFloat(val) {
      return this.currency + parseFloat(val).toFixed(2)
    }
  }
}
</script>
<style>
.flex {
  margin-bottom: 5px;
}
.span-gray {
  color: gray;
}
.span-green {
  color: #6fbfb4;
}
.span-red {
  color: red;
}
</style>
