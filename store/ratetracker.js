export const state = () => ({
  rooms: [],
  selectedRoom: {}
})

export const mutations = {
  updateRooms(state, data) {
    state.rooms = data.rooms
    state.selectedRoom = data.rooms[0]
  },
  updateSelectedRoom(state, roomId) {
    state.selectedRoom = state.rooms.filter(room => room.id === roomId)[0]
  }
}

export const getters = {
  rooms: state => state.rooms,
  selectedRoom: state => state.selectedRoom
}
