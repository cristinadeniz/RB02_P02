const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser
}

function getAllUsers (req, res) {
  UserModel
    .find({
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getUserById (req, res) {
  UserModel
    .findById((req.params.id),
      {
        headers: {
          token: localStorage.getItem('token')
        }
      })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById (req, res) {
  UserModel
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

function updateUser (req, res) {
  UserModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    },
    {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
