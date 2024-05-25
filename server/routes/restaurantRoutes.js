// routes/restaurantRoutes.js
const express = require('express');
const { getRestaurants, addRestaurant } = require('../controllers/restaurantController');
// const { protect } = require('../middleware/authMiddleware');
const passport = require("passport"); 
const router = express.Router();


router.use(passport.initialize());
require('../configuration/passport.js');


router.get('/get-restaurant', getRestaurants);
router.post('/add-restaurant',  passport.authenticate('jwt', { session: false }), addRestaurant);

module.exports = router;
