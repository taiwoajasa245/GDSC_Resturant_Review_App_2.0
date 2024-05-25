require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./configuration/db');
const authRoutes = require('./routes/authRoute');
const restaurantRoutes = require('./routes/restaurantRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const errorHandler = require('./utils/errorHandler');
const app = express();


// middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// Connect to database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/reviews', reviewRoutes);

app.use(errorHandler);

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) {
    try {
        res.status(200).json({
            status: "success",
            data: [],
            message: "Welcome to our API homepage!",
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }

});


mongoose.connection.once('open', () => {

    const PORT = process.env.PORT || 4000;
    try {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => { console.log(`listening for request on ${PORT}`) });
    } catch (error) {
        console.log("Can not connect to MongoDB ", error);
    }

});



