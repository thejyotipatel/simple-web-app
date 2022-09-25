const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const router = require('./router/authRouter')

const pathPrintOnConsole = require('./middleware/pathPrintOnConsole')
const errorHandlerMiddlewares = require('./middleware/errorHandlerMiddleware')

app.use(pathPrintOnConsole)
app.use(errorHandlerMiddlewares)
app.use(express.json())

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
