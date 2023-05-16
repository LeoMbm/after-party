const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const users = require('./controllers/users/users.controllers.js')
const auth = require('./controllers/auth/auth.controllers.js')
const { notAllowed, notFound } = require('./middleware/error.js')
app.use(express.json())


app.use('/api', auth)
app.use('/', users).all('*', notAllowed);
// app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'));
app.use(notFound)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})