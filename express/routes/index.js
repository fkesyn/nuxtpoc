const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
const app = express()

app.use(cors())

const router = express.Router()

router.get('/api/rooms', (req, res) => {
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

// app.use('/.netlify/functions/server', router) // path must route to lambda
app.use('/', router)

module.exports = app
module.exports.handler = serverless(app)
