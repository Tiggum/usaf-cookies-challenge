const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/login', (req, res) => {
    let name = req.body.name
    console.log(name)
    res.cookie('user', name)
    res.send("You've got cookies")
})

app.get('/hello', (req, res) => {
    console.log(req.cookies)
    res.send(`Hello ${req.cookies.user}`)
})

const port = 3001
app.listen(port, () => console.log(`usaf cookie challenge at http://localhost:${port}`))