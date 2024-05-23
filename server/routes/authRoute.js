const express = require('express');
const router = express.Router();
const { SignUP, LogIn , verifyLogin } = require('../controllers/authControllers');
const passport = require('passport');



router.use(passport.initialize());
require('../configuration/passport.js');




router.post('/signup', SignUP);
router.post('/login', LogIn);

router.get('/dashboard', passport.authenticate('jwt', { session: false }), verifyLogin );

// router.post('/forgot-password', forgotPassword);
// router.post('/reset-password/:resetToken', resetPassword);
// router.get('/logout', logout);



module.exports = router;