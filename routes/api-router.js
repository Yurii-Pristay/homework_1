const express = require('express');
const { signIn, signUp } = require('../controllers/auth-controller');
const { getFeed, registerFeed, deleteFeed } = require('../controllers/feeds-controller');
const authCheck = require('../middlewares/check-auth');
const router = new express.Router();

router.get('/feeds', authCheck, getFeed);
router.post('/registerfeed', authCheck, registerFeed);
router.delete('/deletefeed', authCheck, deleteFeed);
router.post('/signin', signIn);
router.post('/signup', signUp);

module.exports = router;
