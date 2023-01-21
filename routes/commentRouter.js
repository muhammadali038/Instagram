//express is imported here for this route
const router = require('express').Router()
//comennt controlling module is here...
const commentCtrl = require('../controllers/commentCtrl')
//auth is imported here
const auth = require('../middleware/auth')
//posting for the creation of a comment. 
router.post('/comment', auth, commentCtrl.createComment)
//module for data of commment updation...
router.patch('/comment/:id', auth, commentCtrl.updateComment)
//though this comment liking of a comment is processed
router.patch('/comment/:id/like', auth, commentCtrl.likeComment)
//though this comment unliking of a comment is processed
router.patch('/comment/:id/unlike', auth, commentCtrl.unLikeComment)
//though this comment Deletion process of a comment is processed
router.delete('/comment/:id', auth, commentCtrl.deleteComment)


module.exports = router