// controllers/reviewController.js
const Review = require('../models/Review');
const Restaurant = require('../models/Restaurant');

const addReview = async (req, res) => {
  const { restaurantId, rating, foodQuality, customerService, atmosphere, amenities, price, cleanliness, comment } = req.body;
  try {
    const review = await Review.create({
      userId: req.user.id,
      restaurantId,
      rating,
      foodQuality,
      customerService,
      atmosphere,
      amenities,
      price,
      cleanliness,
      comment,
    });


    const reviews = await Review.find({ restaurantId });
    if(!reviews){ 
      return res.status(404).json({ status: 404, message: 'Restaurant Not found', data: [] });
    }

    const averageRating = ( reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);

    await Restaurant.findByIdAndUpdate(restaurantId, { averageRating });

    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getReviewsByRestaurant = async (req, res) => {

  const restaurantId = req.params.restaurantId

  try {
    if(!restaurantId){ 
      return res.status(404).json({ status: 404, message: ' Invalid Restaurant', data: [] });
    }
    const reviews = await Review.find( { restaurantId: restaurantId } ); 
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};

module.exports = { addReview, getReviewsByRestaurant };
