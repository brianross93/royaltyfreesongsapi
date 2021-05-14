const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SongSchema = new Schema({
    artist: {type:String, required: true},
    song_title: {type:String, required: true},
    album: {type:String, required: true},
    song_url: {type:String, required: true}


})
// var Songs = mongoose.model('Songs', SongSchema)

// const newSong = new Songs({
//     artist: 'Benny Cashman',
//     song_title: "Corner of My Mind",
//     album:"Benny Cashman EP",
//     song_url:"https://www.youtube.com/watch?v=HECL8TjLwrI"

// })

// newSong.save() // Save to our Mongoose database



module.exports = mongoose.model("Songs", SongSchema)