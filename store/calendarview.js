export const state = () => ({
  rooms: {
    '100': {
      name: 'Male Dorm',
      type: 'dorm',
      rateWeek: 50.0,
      rateWeekend: 60.0,
      nrrWeek: 2,
      nrrWeekend: 3,
      status: true
    },
    '101': {
      name: 'Female Dorm',
      type: 'dorm',
      rateWeek: 55.0,
      rateWeekend: 65.0,
      nrrWeek: 5,
      nrrWeekend: 7,
      status: true
    },
    '102': {
      name: 'Private Room',
      type: 'private',
      rateWeek: 87.0,
      rateWeekend: 94.0,
      nrrWeek: 10,
      nrrWeekend: 13,
      status: true
    },
    '103': {
      name: 'Private Deluxe Room',
      type: 'private',
      rateWeek: 187.0,
      rateWeekend: 194.0,
      nrrWeek: 10,
      nrrWeekend: 13,
      status: false
    }
  }
})

export const getters = {
  rooms: state => state.rooms
}
