const SongsModel = require('../models/songs.model')

const {
  handleError
} = require('../utils')

module.exports = {
  getAllSongs,
  getSongById,
  deleteSongById,
  createSong
}

function getAllSongs (req, res) {
  SongsModel
    .find({
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(songs => res.json(songs))
    .catch((err) => handleError(err, res))
}

function createSong (req, res) {
  SongsModel
    .create((req.body),
      {
        headers: {
          token: localStorage.getItem('token')
        }
      })
    .then(song => res.json(song))
    .catch((err) => handleError(err, res))
}

function getSongById (req, res) {
  SongsModel
    .findById((req.params.id),
      {
        headers: {
          token: localStorage.getItem('token')
        }
      })
    .then(song => res.json(song))
    .catch((err) => handleError(err, res))
}

function deleteSongById (req, res) {
  SongsModel
    .remove({
      _id: req.params.id
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(song => res.json(song))
    .catch(err => handleError(err, res))
}
