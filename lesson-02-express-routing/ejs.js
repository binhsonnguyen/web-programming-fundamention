'use strict'

let express = require('express')

let app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  let view = 'greeting' // .ejs
  let params = {
    title: 'Greeting World',
    name: 'Sam'
  }
  res.render(view, params)
})

app.listen(8000, () => {
  console.log('app listening at http://localhost:8000')
})