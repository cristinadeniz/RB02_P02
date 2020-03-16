const router = require('express').Router()

const {
    login,
    signup,

} = require('../controller/auth.controller')

router.post('/signup', signup)
router.post('/login', login)
router.post('miCuenta',logeado)

module.exports = router