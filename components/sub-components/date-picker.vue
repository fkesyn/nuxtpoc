<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    lazy
    transition="scale-transition"
    offset-y
    full-width
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        :label="title"
        prepend-icon="event"
        readonly
        v-on="on"
      />
    </template>
    <v-date-picker v-model="date" no-title scrollable>
      <v-spacer />
      <v-btn flat color="primary" @click="menu = false">
        Cancel
      </v-btn>
      <v-btn flat color="primary" @click="$refs.menu.save(date)">
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>
<script>
export default {
  name: 'DatePicker',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    }
  }
}
</script>
<style>
</style>
