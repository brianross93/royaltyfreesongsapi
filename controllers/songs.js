
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
        newSong = new Songs(req.body);

        newSong.save((err, newSong) => {
                if(err) console.log(err)
                else res.redirect('/')
            })
    })

    app.put('/updateSong', (req, res) => {
        const songUpdate = null
        Songs.find({_id: req.body.ObjectId}, (err, songs) => {
            if(err) console.log(err)
            else songUpdate = songs
        })

        if(songUpdate.artist) {
            songUpdate.artist = req.body.artist
            songUpdate.save((err, updatedSong) => {
                if(err) console.log(err)
                return res.json(updatedSong)

            })
        }
    
    })

    app.delete('/removeSong/:id', (req, res) => {
        // #const id = req.params.id;
    let songDelete = req.params.id
    console.log("here first")
        Songs.find({_id: req.params.id}, (err, songs) => {
            //getting into this code block alright
            if(err) console.log(err)
            else songDelete = songs
        })
        console.log("Here five")
        if(songDelete) {
            console.log("here three")
            Songs.deleteOne({songDelete}, (err, deletedSong) => {
                console.log("before delete json")
            if(err) console.log(err)
            else res.json(deletedSong) 
            console.log(songDelete)
            
        })}
    })

}