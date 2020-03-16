const UserFavouriteList = require('../models/favouriteList.model')

const {
  handleError
} = require('../utils')

module.exports = {
  deleteFavouriteSongById,
  updateFavouriteSongUser
}

function deleteFavouriteSongById (req, res) {
  UserFavouriteList
    .remove({
      _id: req.params.id
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateFavouriteSongUser (req, res) {
  UserFavouriteList
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
