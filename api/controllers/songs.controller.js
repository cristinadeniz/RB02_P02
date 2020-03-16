const SongsModel = require('../models/songs.model')
const {
  handleError
} = require('../utils')

module.exports = {
  createSong,
  getAllSongs,
  getSongsById,
  deleteSongById
}
function createSong (req, res) {
  SongsModel.create(req.body)
    .then(user => {
      res.json(user)
    })
}

function getAllSongs (req, res) {
  SongsModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getSongsById (req, res) {
  SongsModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteSongById (req, res) {
  SongsModel
    .remove({
      _id: req.params.id
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}
