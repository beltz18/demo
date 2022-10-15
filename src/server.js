const express = require('express')
const app     = express()
const port    = process.env.PORT
const path    = require('path')
const ejs     = require('ejs')

app.set("views", path.join(__dirname, '../views'))
app.engine('ejs', ejs.__express)
app.set('view engine', 'ejs')
app.use(express.static("views"))

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

app.get('/', (req,res) => {
  res.render('index')
})