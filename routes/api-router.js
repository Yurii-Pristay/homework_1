const express = require('express');
const { signUserIn, signUserUp } = require('../controllers/auth-controller');
const { getMyFeed, registerMyFeed, deleteMyFeed } = require('../controllers/feeds-controller');
const authCheck = require('../middlewares/auth-check');
const router = new express.Router();

router.get('/feeds', authCheck, getMyFeed);
router.post('/registerfeed', authCheck, registerMyFeed);
router.delete('/deletefeed', authCheck, deleteMyFeed);
router.post('/signin', signUserIn);
router.post('/signup', signUserUp);

module.exports = router;
