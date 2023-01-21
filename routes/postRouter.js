// express in imported here
const router = require('express').Router()
//post controller is imported here
const postCtrl = require('../controllers/postCtrl')
//auth midleware is imported here 
const auth = require('../middleware/auth')

router.route('/posts')
    .post(auth, postCtrl.createPost)
    .get(auth, postCtrl.getPosts)
    
router.route('/post/:id')
    .patch(auth, postCtrl.updatePost)
    .get(auth, postCtrl.getPost)
    .delete(auth, postCtrl.deletePost)
// route for the like post are used here
router.patch('/post/:id/like', auth, postCtrl.likePost)
// route for the unlike post are used here
router.patch('/post/:id/unlike', auth, postCtrl.unLikePost)
// route for the getuserpost are used here
router.get('/user_posts/:id', auth, postCtrl.getUserPosts)
// route for the getpostdicover post are used here
router.get('/post_discover', auth, postCtrl.getPostsDicover)
// route for the save post are used here
router.patch('/savePost/:id', auth, postCtrl.savePost)
// route for the unlike post are used here
router.patch('/unSavePost/:id', auth, postCtrl.unSavePost)
// route for the getsafeposts are used here
router.get('/getSavePosts', auth, postCtrl.getSavePosts)

//exporting point of the module of this component 
module.exports = router