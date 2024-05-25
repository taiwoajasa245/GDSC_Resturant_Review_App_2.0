const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateJwtToken = require('../utils/token');
const sendEmail = require('../configuration/mail');




// Signup
const SignUP = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    zipcode,
    month,
    day,
    year
  } = req.body;

  try {

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = new User({
      firstName,
      lastName,
      email,
      password,
      zipcode,
      month,
      day,
      year

    });

    //Hash Password 
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to DB
    const userSaved = await user.save();

    // send the user token

    // set jwt payload
    const payload = {
      firstname: user.firstName,
      lastname: user.lastName,
      id: user._id
    }

    const token = generateJwtToken(payload);

    // send mail
    const first_name = firstName;
    const last_name = lastName;
    // await sendEmail(email, 'Welcome Email', first_name, last_name);

    // send response
    res.status(201).json({
      message: 'User registered successfully. Please check your email for verification',
      data: {
        id: userSaved._id,
        firstName: userSaved.firstName,
        lastName: userSaved.lastName,
        email: userSaved.email,
        token: "Bearer " + token
      }
    });


  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Something went wrong", data: [], error: error });
  }

};


// Login 
const LogIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ status: 401, message: 'Invalid email or password', data: [] });
    }

    // compare password (check if password is correct)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ status: 401, message: 'Incorrect email or password', data: [] });
    }

    // send the user token
    // set jwt payload
    const payload = {
      firstname: user.firstName,
      lastname: user.lastName,
      id: user._id
    }

    const token = generateJwtToken(payload);

    res.status(200).json({
      status: 200,
      message: "Logged in successfully!",
      token: "Bearer " + token
    });


  } catch (error) {
    console.error(error.message);
    res.status(401).json({
      status: 401,
      message: "Logged in Unsuccessfully!",
      error: error
    });
  }


};


const verifyLogin = (req, res) => {
  const { user } = req;

  res.status(200).json(
    {
      message: 'Secure route',
      data: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });

}




module.exports = { SignUP, LogIn, verifyLogin };