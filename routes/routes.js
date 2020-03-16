const router = require('express').Router()

const usersRouter = require('./user.routes')
//const authRouter = require('./song.routes')
const { 
    authUser
} = require('../utils') // Authenticated Route

router.use('/users', usersRouter)
//router.use('/songs', authRouter)

router.get('/whoami', authUser, (req, res) => {
    res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router;