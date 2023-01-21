//express route is imported here in this route
const router = require('express').Router()
//authentication route is impoted here
const authCtrl = require('../controllers/authCtrl')
//Registration  under conditions
router.post('/register', authCtrl.register)
// this route for login user 
router.post('/login', authCtrl.login)
//we use this route for logout
router.post('/logout', authCtrl.logout)
//Access token is controlled by this module....
router.post('/refresh_token', authCtrl.generateAccessToken)


module.exports = router