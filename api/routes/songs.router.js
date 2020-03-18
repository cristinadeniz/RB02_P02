const router = require('express').Router()

const {
  getAllSongs,
  getSongById,
  deleteSongById
} = require('../controllers/songs.controller')

router.get('/', getAllSongs)
router.get('/:id', getSongById)
router.delete('/:id', deleteSongById)

module.exports = router
