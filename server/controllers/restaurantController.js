const Restaurant = require('../models/Restaurant');

const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addRestaurant = async (req, res) => {
    const { name, location, cuisine } = req.body;
    
    try {
        const restaurant = await Restaurant.create({ name, location, cuisine });
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getRestaurants, addRestaurant };
