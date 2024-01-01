const express = require('express');
const router = express.Router();
const userController = require('../userController');
const checkJwtAuth = require('../../config/jwtAuth');

// user routes
router.post('/login', userController.login)
router.post('/signup', userController.signUp)
router.get('/logout', checkJwtAuth, userController.logOut)


// post routes
router.get('/post',checkJwtAuth, userController.post) 


module.exports = router