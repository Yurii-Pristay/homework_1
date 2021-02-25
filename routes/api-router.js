const express = require('express');
<<<<<<< HEAD
const { signIn, signUp } = require('../controllers/auth-controller');
const { getFeed, registerFeed, deleteFeed } = require('../controllers/feeds-controller');
const authCheck = require('../middlewares/check-auth');
=======
const { signUserIn, signUserUp } = require('../controllers/auth-controller');
const { getMyFeed, registerMyFeed, deleteMyFeed } = require('../controllers/feeds-controller');
const authCheck = require('../middlewares/auth-check');
>>>>>>> origin/homework
const router = new express.Router();

router.get('/feeds', authCheck, getMyFeed);
router.post('/registerfeed', authCheck, registerMyFeed);
router.delete('/deletefeed', authCheck, deleteMyFeed);
router.post('/signin', signUserIn);
router.post('/signup', signUserUp);

module.exports = router;
