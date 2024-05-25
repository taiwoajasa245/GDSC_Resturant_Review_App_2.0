const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }, secure: false, // true for 465, false for other ports
  tls: {
    rejectUnauthorized: false // Disable SSL certificate verification
  },
});


const sendEmail = async (to, subject, first_name, last_name) => {

  let fName = first_name;
  let lName = last_name;

  const HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Yelp</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f7f7f7;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .header img {
            max-width: 200px;
        }
        .message {
            margin-bottom: 30px;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://s3-media0.fl.yelpcdn.com/assets/public/cookbook.yji-0a2bf1d9c330d8747446.svg" alt="Your Company Logo">
            <h2>Welcome to Our Company!</h2>
        </div>
        <div class="message">
            <p>Hi ${fName} ${lName},</p>
            <p>Welcome to Yelp! I'm so excited to have you join us. We're feeling pretty
            lucky that you chose us, and I just wanna say thank you on behalf of our whole
            company.</p>
            <p>To get you settled, I wanted to share with you some of our best resources so you can
            make the most out of your experience with us.
            <p>If you're interested in learning more about your product, feel free to contact me or
            anyone else on our support team at any time. We're always here to help you in any way
            we can.</p>
            <p>Cheers,</p>
            <p>Yelp Admin</p>
        </div>
        <div class="footer">
            &copy; 2024 Yelp. All rights reserved.
        </div>
    </div>
</body>
</html>

`

  const mailOptions = {
    from: `"Yelp 👻" < ${process.env.MAIL_USERNAME} >`,
    to,
    subject,
    html: HTML,
  };


  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};



module.exports = sendEmail;