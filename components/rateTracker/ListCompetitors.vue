<template>
  <v-container id="list-competitors">
    <v-layout row wrap>
      <v-flex xs12 lg5>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          hide-details
        />
        <v-data-table
          :search="search"
          :headers="headers"
          :items="properties"
          item-key="name"
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">
              {{ props.item.address }}
            </td>
            <td class="text-xs-left">
              {{ props.item.rating }}
            </td>
            <td class="text-xs-right">
              <i class="material-icons md-48 clickable" @click="addToList(props.item)">note_add</i>
            </td>
          </template>
          <v-alert v-slot:no-results :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </v-data-table>
      </v-flex>
      <v-flex xs12 offset-lg1 lg5>
        <div class="dt-title">
          Your Selected Competitors
        </div>
        <v-data-table
          :headers="headers"
          :items="selected"
          item-key="name"
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">
              {{ props.item.address }}
            </td>
            <td class="text-xs-left">
              {{ props.item.rating }}
            </td>
            <td class="text-xs-right">
              <i class="material-icons md-48 clickable" @click="removeFromList(props.item)">remove_circle_outline</i>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'ListCompetitors',
  data() {
    return {
      search: '',
      selected: [],
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        { text: 'Address', value: 'address' },
        { text: 'Rating', value: 'rating' },
        { text: '', value: '' }
      ],
      properties: [
        {
          name: 'Park Villa',
          address: '272-276 Pentonville Road Kings Cross',
          rating: 7.3
        },
        {
          name: 'The Rose',
          address: '65 Union Street Borough',
          rating: 9.0
        },
        {
          name: 'New Corss Inn Hostel',
          address: '323 New Cross Road',
          rating: 8.5
        },
        {
          name: 'Pickwill Hall',
          address: '7 Bedford Place',
          rating: 9.3
        },
        {
          name: 'Cenas 2',
          address: '2 Rua ah e tal',
          rating: 9.9
        },
        {
          name: 'Cenas 3',
          address: '456 porque secalhar até já nem',
          rating: 5.5
        },
        {
          name: 'Cenas 4',
          address: '67 que informação dramática',
          rating: 6.7
        },
        {
          name: 'Cenas 5',
          address: '69 é isso e couves',
          rating: 7.8
        },
        {
          name: 'Cenas Hostel',
          address: '666 Rua das Coisas',
          rating: 6.6
        }
      ]
    }
  },
  methods: {
    addToList(item) {
      const index = this.properties.indexOf(item)
      this.selected.push(item)
      this.properties.splice(index, 1)
    },
    removeFromList(item) {
      const index = this.selected.indexOf(item)
      this.properties.push(item)
      this.selected.splice(index, 1)
    }
  }
}
</script>
<style scoped>
.clickable {
  cursor: pointer;
}
.dt-title {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
