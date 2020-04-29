const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const maintnanceMode = require('./middleware/maintnance')

const app = express()
const port = process.env.PORT;

app.use(maintnanceMode) //Currently not in maintnance mode
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})