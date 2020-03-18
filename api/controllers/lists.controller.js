const FavouriteList = require('../models/favouriteList.model')
const User = require('../models/users.model')

const {
  handleError
} = require('../utils')

module.exports = {
  deleteFavouriteSongById,
  updateFavouriteSongUser, 
  createFavouriteList,
  getAllListsByUser
}

function createFavouriteList (req, res) {
  FavouriteList
  .create(req.body) 
    .then(favouriteList => res.json(favouriteList))
}

function deleteFavouriteSongById (req, res) {
  FavouriteList
    .remove({
      _id: req.params.id
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateFavouriteSongUser (req, res) {
  FavouriteList
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getAllListsByUser (req, res) {
  const userId = req.params.id
  FavouriteList.find({ owner: userId })
    .populate('favouriteList')
    .then(lists => {
      res.json(lists)
    })
}
