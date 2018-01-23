'use strict'

let express = require('express')

let app = express()

app.get('/', (req, res) => {
  res.status(200).send('hello world!')
})

app.listen(8000, () => {
  console.log('app listening at http://localhost:8000')
})