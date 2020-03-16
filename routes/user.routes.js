const router = require('express').Router()

const {
    createUser,
    getUserById,
    deleteFavouriteSongById,
    updateFavouriteSongUser
} = require('../controller/users.controller')


router.get('/:id', getUserById)
router.post("/", createUser);
router.delete('/:id', deleteFavouriteSongById)
router.put('/:id', updateFavouriteSongUser)


module.exports = router