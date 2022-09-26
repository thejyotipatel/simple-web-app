const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const db = require('./db/model')

const router = require('./router/authRouter')
// const con = require('./db/dbConnection')
const pathPrintOnConsole = require('./middleware/pathPrintOnConsole')
const errorHandlerMiddlewares = require('./middleware/errorHandlerMiddleware')

app.use(pathPrintOnConsole)
app.use(errorHandlerMiddlewares)
app.use(express.json())
app.use(cors())

app.use('/api/v1/user', router)
const port = process.env.PORT || 5000
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server running at port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
