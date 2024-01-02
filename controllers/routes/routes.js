const express = require('express');
const router = express.Router();
const userController = require('../userController');
const postController = require('../postController');
const checkJwtAuth = require('../../config/jwtAuth');

// user routes
router.post('/login', userController.login)
router.post('/signup', userController.signUp)
router.get('/logout', checkJwtAuth, userController.logOut)


// post routes
router.get('/post', postController.getInfo) 
router.post('/post', postController.postInfo)

router.get('/:post/comment', postController.getComment)
router.post('/:post/comment', postController.postComment)

// ADMIN routes
router.get('/getposts', postController.getAllPost)
router.get('/publishpost', postController.publishPost)

router.put('/:post/:_id', postController.editComment)
router.delete('/:post/:_id', postController.deleteComment)




module.exports = router