const jwt = require('jsonwebtoken');
const jwtSecretKey = process.env.JWT_SECRET;


const generateJwtToken = (payload) => {
    const token = jwt.sign(payload, jwtSecretKey, { expiresIn: '1h' });
    return token;
}


module.exports =  generateJwtToken 
