
const { bulkWrite } = require('../models/songs')
const Songs = require('../models/songs')

module.exports = function(app) {
    //returns all songs in the database
    app.get('/songs', (re, res) => {
        Songs.find({}, (err,songs) => {
            if(err) console.log(err)
            else(res.json(songs))
        })
    })
    //uploads a song to the database with an api call
    app.post('/uploadSong', (req,res) => {
        //the upload song works when I do it manually here, having a hard time 
        //passing in the body into Postman. Maybe because I currently dont have internet?
        Songs.create({
            artist : req.body.artist,
            song_title : req.body.song_title,
            album : req.body.album,
            song_url : req.body.song_url
        }, function(err, newSong) {
            if (err)
                res.send(err);
            else res.redirect('/')
        })

        // newSong.save((err, newSong) => {
        //         if(err) console.log(err)
        //         else res.redirect('/')
        //     })
    })
    //updates a song in the database with an api call
    //can only update artist as of now
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
    //deletes a song from the database
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