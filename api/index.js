const express = require('express')
let bodyParser = require('body-parser')
// Create express instance
const app = express()


const login = require('./models/login')
// Require API routes
//app.use(mainRoute)
// Export express app
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.post('/login', async function (req, res){
  const dataResult = await login.login(req.body.token)
  console.log(dataResult)
  res.json(dataResult)
})
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
