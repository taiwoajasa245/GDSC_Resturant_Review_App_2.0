// models/Review.js
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },

    rating: { 
        type: Number, 
        required: true 
    },

    foodQuality: { 
        type: Number, 
        required: true 
    },

    customerService: { type: Number, required: true },

    atmosphere: { type: Number, required: true },

    amenities: { type: Number, required: true },

    price: { type: Number, required: true },

    cleanliness: { type: Number, required: true },

    comment: { type: String },

    date: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Review', ReviewSchema);
