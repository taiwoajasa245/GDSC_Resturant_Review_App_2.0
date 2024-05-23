# Restaurant Review App

Welcome to the Restaurant Review App! This application allows users to browse, review, and rate restaurants. Users can create accounts, post reviews, add ratings, and browse through a comprehensive list of restaurants. It's designed to be intuitive, user-friendly, and accessible on multiple devices this application is a clone of the [yelp](yelp.com/writeareview) resturant review application.

## Features

- **User Authentication**: Sign up, log in, and log out functionality.
- **Restaurant Listings**: View detailed information about each restaurant.
- **Review System**: Add, edit, and delete reviews for restaurants.
- **Rating System**: Rate restaurants on a scale of 1 to 5 stars.
- **Search and Filter**: Search for restaurants by name, location, or cuisine type. Filter results based on ratings and reviews.
- **Responsive Design**: Optimized for both desktop and mobile use.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: passport-JWT (JSON Web Tokens)
- **Styling**: CSS, Tailwind
- **Hosting**: Render

## Installation

### Prerequisites

- Node.js (v12.x or higher)
- MongoDB (local or cloud instance)
- npm (Node package manager)

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/taiwoajasa245/GDSC_Resturant_Review_App_2.0.git
   cd GDSC_Resturant_Review_App_2.0

   ```

2. **install dependencies for both server and client**

   ```
   # For the backend

   cd server
   npm install

   # For the frontend

   cd ../client
   npm install

   ```

3. **Set up environment variables**

   Create a `.env ` file in the `server` directory and add the following:

   ```
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

   ```

4. **Run the application**
   in the `server` directory run:

   ```
   npm run start

   ```

   in the `client_side` directory run:

   ```
   npm run dev

   ```

The backend server will run on `http://localhost:4000` and the frontend will run on `http://localhost:5173/writeareview`.

## Usage

- **Sign Up/Log In**: Create an account or log in if you already have one.
- **Browse Restaurants**: Search for restaurants by name, location, or cuisine. Use filters to narrow down your search.
- **View Details**: Click on a restaurant to see its details, reviews, and ratings.
- **Add Review**: Write a review and rate the restaurant.
- **Edit/Delete Review**: Manage your reviews by editing or deleting them.

## Contributing

We welcome contributions! Please fork the repository and create a pull request with your changes. Make sure to follow the coding style and include relevant tests.

1. **Fork the repository**

2. **Create a new branch**

   ```bash

   git checkout -b feature-branch-name

   ```

3. **Commit your changes**

   ```
   git commit -m "Description of your changes"

   ```

4. **Push to branch**

   ```
   git push origin feature-branch-name

   ```


5. **Create pull request**


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or support, please open an issue or contact us at [TaiwoMail](ajasataiwo45@gmail.com).

Happy reviewing!

