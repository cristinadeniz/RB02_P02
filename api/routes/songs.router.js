const router = require('express').Router()

const {
  getAllSongs,
  getSongById,
  deleteSongById,
  createSong
} = require('../controllers/songs.controller')

router.get('/', getAllSongs)
router.get('/:id', getSongById)
router.post('/', createSong)
router.delete('/:id', deleteSongById)

module.exports = router
