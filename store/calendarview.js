export const state = () => ({
  currency: '€',
  rooms: {
    '100': {
      name: 'Male Dorm',
      type: 'dorm',
      rateWeek: 50.0,
      rateWeekend: 60.5,
      nrrType: 'derived',
      nrrWeek: 2,
      nrrWeekend: 3,
      status: true
    },
    '101': {
      name: 'Female Dorm',
      type: 'dorm',
      rateWeek: 55.0,
      rateWeekend: 65.0,
      nrrType: 'derived',
      nrrWeek: 5,
      nrrWeekend: 7,
      status: true
    },
    '102': {
      name: 'Private Room',
      type: 'private',
      rateWeek: 87.0,
      rateWeekend: 94.75,
      nrrType: 'derived',
      nrrWeek: 10,
      nrrWeekend: 13,
      status: true
    },
    '103': {
      name: 'Private Deluxe Room',
      type: 'private',
      rateWeek: 187.0,
      rateWeekend: 194.0,
      nrrType: 'derived',
      nrrWeek: 10,
      nrrWeekend: 13,
      status: false
    },
    '104': {
      name: 'Mix Dorm',
      type: 'dorm',
      rateWeek: 10.0,
      rateWeekend: 12.55,
      nrrType: 'non-derived',
      nrrWeek: 8.42,
      nrrWeekend: 11,
      status: false
    },
    '105': {
      name: 'Pod in dorm',
      type: 'private',
      rateWeek: 27.0,
      rateWeekend: 34.2,
      nrrType: 'derived',
      nrrWeek: 10,
      nrrWeekend: 12,
      status: true
    },
    '106': {
      name: 'Female deluxe dorm',
      type: 'dorm',
      rateWeek: 24.0,
      rateWeekend: 28.5,
      nrrType: 'non-derived',
      nrrWeek: 20.3,
      nrrWeekend: 22.2,
      status: false
    },
    '107': {
      name: 'Private Suite Room',
      type: 'private',
      rateWeek: 127.0,
      rateWeekend: 166.6,
      nrrType: 'derived',
      nrrWeek: 13,
      nrrWeekend: 15,
      status: true
    }
  }
})

export const getters = {
  rooms: state => state.rooms,
  currency: state => state.currency
}
