const router = require('express').Router()

const {
  deleteFavouriteSongById,
  addSongToList,
  createFavouriteList,
  getAllListsByUser
} = require('../controllers/lists.controller')

router.post('/', createFavouriteList)
router.post('/:id', addSongToList)
router.delete('/:id', deleteFavouriteSongById)
router.get('/:id', getAllListsByUser)

module.exports = router
