const router = require('express').Router()

const {
  createSong,
  getAllSongs,
  getSongsById,
  deleteSongById
} = require('../controllers/songs.controller')

router.post('/', createSong)
router.get('/', getAllSongs)
router.get('/:id', getSongsById)
router.delete('/:id', deleteSongById)

module.exports = router
