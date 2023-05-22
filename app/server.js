const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const users = require('./controllers/users/users.controllers.js')
const auth = require('./controllers/auth/auth.controllers.js')
const { notAllowed, notFound } = require('./middleware/error.js')
const createDatabaseConnection  = require('./db/database')
const UserDatabase = require("./db/User/UserDatabase");
const UserServices = require("./services/User/UserServices");
const UserRepository = require("./repository/User/UserRepository");
require('dotenv').config();
const pool = createDatabaseConnection()

app.use(express.json())
app.use(morgan('tiny'));
app.use('/api', users)
// app.use('/', users)
// app.use(express.urlencoded({ extended: false }))
app.use(notFound)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports = pool;
