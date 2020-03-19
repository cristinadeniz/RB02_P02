const FavouriteList = require('../models/list.model')

const {
  handleError
} = require('../utils')

module.exports = {
  deleteFavouriteSongById,
  addSongToList,
  createFavouriteList,
  getAllListsByUser
}

function createFavouriteList (req, res) {
  FavouriteList
    .create((req.body),
      {
        headers: {
          token: localStorage.getItem('token')
        }
      })
    .then(favouriteList => res.json(favouriteList))
    .catch(err => console.log(err))
}

function deleteFavouriteSongById (req, res) {
  FavouriteList
    .remove({
      _id: req.params.id
    },
    {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function addSongToList (req, res) {
  const listId = req.params.id
  const songId = req.body.newSong
  FavouriteList.findById((listId),
    {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(list => {
      list.songs.push(songId)
      list.save()
        .then(res.json(list))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

function getAllListsByUser (req, res) {
  const userId = req.params.id
  FavouriteList.find({ owner: userId },
    {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .populate('songs')
    .then(lists => {
      res.json(lists)
    })
    .catch(err => console.log(err))
}
