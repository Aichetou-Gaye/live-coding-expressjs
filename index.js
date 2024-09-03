const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/students', (req, res) => {
    res.send("Hello students")
})

app.post('/students', (req, res) => {
    console.log(req.body)
    res.send(`${req.body.nom} a été enregistré avec succès`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

