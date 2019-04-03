<template>
  <v-container id="headCalendar">
    <table class="two-weeks-calendar" border="0" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th class="arrow-controller inactive">
            <a id="calendar-back"><i class="fa fa-chevron-left" aria-hidden="true" /></a>
          </th>
          <th id="select-date">
            <span class="dates">
              <span class="start-date">{{ start }}</span>
              <span class="start-date">{{ end }}</span>
            </span>
          </th>
          <th class="arrow-controller inactive">
            <a id="calendar-forward"><i class="fa fa-chevron-right" aria-hidden="true" /></a>
          </th>
          <!--<th colspan="14" class="wrapper-num-cell">-->
          <!--<table class="container-num-cell">-->
          <!--<thead>-->
          <!--<tr>-->
          <!--<th-->
          <!--v-for="(item, i) in items"-->
          <!--:key="i"-->
          <!--:to="item.to"-->
          <!--class="number-cell heading-date"-->
          <!--/>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--</table>-->
          <!--</th>-->
        </tr>
      </thead>
    </table>
  </v-container>
</template>
<script>
export default {
  name: 'HeadCalendar',
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
