const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");

const captcha= async (token, value)=>{
    try{
        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
          );
          if (response.data.success) {
            res.send("Human 👨 👩");
          } else {
            res.send("Robot 🤖");
          }
    }
    catch{
        console.error(error);
    res.status(500).send("Error verifying reCAPTCHA");
    }
}

module.exports = {captcha};