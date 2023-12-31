const express = require('express');
const router = express.Router();
const appController = require('../appController');
const checkJwtAuth = require('../../config/jwtAuth');


router.get('/login', appController.login)
router.get('/data',checkJwtAuth, appController.data)
router.get('/logout', appController.logOut)

module.exports = router