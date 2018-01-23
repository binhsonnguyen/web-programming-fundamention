'use strict'

let express = require('express')

let app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  let view = 'greeting' // .pug
  let params = {
    title: 'Greeting World',
    name: 'Sam'
  }
  res.render(view, params)
})

app.listen(8000, () => {
  console.log('app listening at http://localhost:8000')
})