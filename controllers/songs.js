
const { bulkWrite } = require('../models/songs')
const Songs = require('../models/songs')

module.exports = function(app) {
    
    app.get('/songs', (re, res) => {
        Songs.find({}, (err,songs) => {
            if(err) console.log(err)
            else(res.json(songs))
        })
    })

    app.post('/uploadSong', (req,res) => {
        const newSong = new Song(req.body)

        newSong
            .save((err, newSong) => {
                if(err) console.log(err)
                return res.redirect('/')
            })
    })

    app.put('/updateSong', (req, res) => {
        const songUpdate = null
        Songs.find({_id: req.body.ObjectId}, (err, songs) => {
            if(err) console.log(err)
            else songUpdate = songs
        })

        if(songUpdate.artist) {
            songUpdate.artist = "Janis Joplin"
            songUpdate.save((err, updatedSong) => {
                if(err) console.log(err)
                return res.json(updatedSong)

            })
        }
    
    })

    app.delete('/removeSong', (req, res) => {
    const songDelete = null
        Songs.find({_id: req.body.ObjectId}, (err, songs) => {
            if(err) console.log(err)
            else songDelete = songs
        })

        if(songDelete) {
            songDelete.delete({songDelete}, (err, deletedSong) => {
            if(err) console.log(err)
            else res.json(deletedSong)
        })}
    })

}