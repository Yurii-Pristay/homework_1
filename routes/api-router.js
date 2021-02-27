const express = require('express');

const { signIn, signUp } = require('../controllers/auth-controller');
const { getFeed, registerFeed, deleteFeed } = require('../controllers/feeds-controller');
const authCheck = require('../middlewares/check-auth');

const router = new express.Router();

router.get('/feeds', authCheck, getMyFeed);
router.post('/registerfeed', authCheck, registerMyFeed);
router.delete('/deletefeed', authCheck, deleteMyFeed);
router.post('/signin', signUserIn);
router.post('/signup', signUserUp);

module.exports = router;
