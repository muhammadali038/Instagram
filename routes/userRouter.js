//express route is impprted here in route...
const router = require('express').Router()
//auth module is imported here
const auth = require("../middleware/auth")
//user control module is used here
const userCtrl = require("../controllers/userCtrl")
//This extra route was add by Sir Umeer Surkhel
router.get('/search', auth, userCtrl.searchUser)
//this route controle user get data
router.get('/user/:id', auth, userCtrl.getUser)
// this route for userupdation
router.patch('/user', auth, userCtrl.updateUser)
//this follow route is add in my task----------------------
router.patch('/user/:id/follow', auth, userCtrl.follow)
//this unfollow route is add in my task----------------------
router.patch('/user/:id/unfollow', auth, userCtrl.unfollow)
//This portion added in my task by Sir Hamayion Safdar Tahir Gill----------------------
router.get('/suggestionsUser', auth, userCtrl.suggestionsUser)


//route module is exported here with data of user.....
module.exports = router