const express = require('express');
const { signIn, signUp } = require('../controllers/auth-controller');
const { getMyFeed, registerMyFeed, deleteMyFeed } = require('../controllers/feeds-controller');
const authCheck = require('../middlewares/auth-check');
const router = new express.Router();

router.get('/feeds', authCheck, getMyFeed);
router.post('/registerfeed', authCheck, registerMyFeed);
router.delete('/deletefeed', authCheck, deleteMyFeed);
router.post('/signin', signIn);
router.post('/signup', signUp);

module.exports = router;
