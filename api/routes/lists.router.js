const router = require('express').Router()

const {
  deleteFavouriteSongById,
  updateFavouriteSongUser,
  createFavouriteList,
  getAllListsByUser
} = require('../controllers/lists.controller')

router.post('/', createFavouriteList)
router.put('/:id', updateFavouriteSongUser)
router.delete('/:id', deleteFavouriteSongById)
router.get('/:id', getAllListsByUser)

module.exports = router