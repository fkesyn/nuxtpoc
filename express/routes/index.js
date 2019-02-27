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

router.get('/cenas', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<h1>Hello from Express.js!</h1>')
  res.end()
})

app.use('/.netlify/functions/hello', router) // path must route to lambda
// app.use('/', router)

module.exports = app
module.exports.handler = serverless(app)
