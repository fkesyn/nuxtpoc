const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
const app = express()

app.use(cors())
app.use('/.netlify/functions/server') // path must route to lambda

app.get('/api/rooms', (req, res) => {
  const rooms = {
    rooms: [
      {
        beds: 1,
        id: 1,
        name: 'Basic 1 Bed Male Dorm',
        type: 'dorm'
      },
      {
        beds: 3,
        id: 2,
        name: 'Basic 3 Bed Male Dorm',
        type: 'dorm'
      },
      {
        beds: 2,
        id: 3,
        name: 'Private room',
        type: 'private'
      }
    ]
  }
  res.send(rooms)
})

module.exports = app
module.exports.handler = serverless(app)
