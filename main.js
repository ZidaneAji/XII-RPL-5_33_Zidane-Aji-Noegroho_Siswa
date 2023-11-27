const express = require('express')
const siswadb = require('./config/siswadb')
const router = require('./router/server')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(router);
siswadb()

app.listen(port, () => {
  console.log(`Server Running on port ${port}`)
})