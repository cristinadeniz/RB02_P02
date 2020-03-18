const SongsModel = require('../models/songs.model')

const {
  handleError
} = require('../utils')

module.exports = {
  getAllSongs,
  getSongById,
  deleteSongById
}

function getAllSongs (req, res) {
  SongsModel
    .find()
    .then(songs => res.json(songs))
    .catch((err) => handleError(err, res))
}

function getSongById (req, res) {
  SongsModel
    .findById(req.params.id)
    .then(song => res.json(song))
    .catch((err) => handleError(err, res))
}

function deleteSongById (req, res) {
  SongsModel
    .remove({
      _id: req.params.id
    })
    .then(song => res.json(song))
    .catch(err => handleError(err, res))
}
