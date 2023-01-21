//express is imported is here in this route
const router = require('express').Router()
//auth module midlware is imported here
const auth = require('../middleware/auth')
//Notification controller module is imported here
const notifyCtrl = require('../controllers/notifyCtrl')
// create Notofication module is used here
router.post('/notify', auth, notifyCtrl.createNotify)
// remove Notofication module is used here
router.delete('/notify/:id', auth, notifyCtrl.removeNotify)
// get Notofication module is used here
router.get('/notifies', auth, notifyCtrl.getNotifies)
// already readed Notofication module is used here
router.patch('/isReadNotify/:id', auth, notifyCtrl.isReadNotify)
//for all noticication deletion we Delete all Notofication module is used here
router.delete('/deleteAllNotify', auth, notifyCtrl.deleteAllNotifies)


module.exports = router