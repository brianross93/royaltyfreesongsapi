const express = require('express')
const expressValidator = require('express-validator')
const assert = require('assert')
require('./mongo_db_connections.js')

const app = express()

// Middleware

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(expressValidator())

//controllers

require('./controllers/songs.js')(app)

app.get('/', (req,res) => {
    res.send('splash page')
})
// artist: {type:String, required: true},
//     song_title: {type:String, required: true},
//     album: {type:String, required: true},
//     song_url: {type:String, required: true}




app.listen(3000)

module.exports = app