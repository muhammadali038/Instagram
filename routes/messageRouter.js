//express routing is imported here
const router = require('express').Router()
//Message controller module is imported here
const messageCtrl = require('../controllers/messageCtrl')
const auth = require('../middleware/auth')
//se3nding message 
router.post('/message', auth, messageCtrl.createMessage)
//receiving conversation
router.get('/conversations', auth, messageCtrl.getConversations)
//receiving Message
router.get('/message/:id', auth, messageCtrl.getMessages)
//Deletion of message at this point
router.delete('/message/:id', auth, messageCtrl.deleteMessages)
//deletion of the whole conversation
router.delete('/conversation/:id', auth, messageCtrl.deleteConversation)

module.exports = router