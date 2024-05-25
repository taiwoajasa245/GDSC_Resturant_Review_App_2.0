// models/Restaurant.js
const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    averageRating: {
        type: Number,
        default: 0
    },
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
