// routes/reviewRoutes.js
const express = require('express');
const { addReview, getReviewsByRestaurant } = require('../controllers/reviewController');
const passport = require('passport');
const router = express.Router();



router.use(passport.initialize());
require('../configuration/passport.js');



router.post('/add', passport.authenticate('jwt', { session: false }), addReview);
router.get('/:restaurantId/getreview', getReviewsByRestaurant);


module.exports = router;
